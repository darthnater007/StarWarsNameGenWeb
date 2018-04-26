$(document).ready(function(){
    
    $("#submit").click(function(){
        
        if($("#f_name").val() == ""){
            $("#f_name").toggleClass("required");
        }else if($("#l_name").val() == ""){
            $("#l_name").toggleClass("required");
        }else if($("#maiden").val() == ""){
            $("#maiden").toggleClass("required");
        }else if($("#city").val() == ""){
            $("#city").toggleClass("required");
        }else{
            var fName = $("#f_name") .val();
            var lName = $("#l_name").val();
            var maiden = $("#maiden").val();
            var city = $("#city").val();

            var SWFname= lName.substr(0,3).toLowerCase() + fName.substr(0,2).toLowerCase();

            var SWLname = maiden.substr(0,2).toLowerCase() + city.substr(0,3).toLowerCase();
            
            /*
            if statement for adding random vowel in between name snippets if consonants on both sides
            */
            var vowelArray = ["a","e","i","o","u","y"];
            var SWLastnameFinal = SWLname;
            if(checkifNotVowel(SWLname[1]) && checkifNotVowel(SWLname[2])){
                SWLastnameFinal = SWLname.slice(0,2) + vowelArray[getRandomInt()] + SWLname.substr(2);
            }else{
                SWLastnameFinal= SWLname;
            }
            
           

            $("#nameSpace").html("<h2>Your Star Wars Name Is:</h2> <h1>" + toTitleCase(SWFname + " " + SWLastnameFinal)) + "</h1>";
            
            $("#nameSpace").addClass("anim");
            
            $(":text").val("");
        }
    });
    
    $("#f_name").click(function(){
        $("#nameSpace").removeClass("anim");
        $("#nameSpace").html("");
    });
    
    function checkifNotVowel(x){
        var result;
        if(x != "a" && x != "e" && x != "i" && x != "o" && x != "u" && x != "y"){
        result= true;
        }else{
            result = false;
        }
        return result;
    }
    
    function getRandomInt(){
        return Math.floor(Math.random() * 6);
    }
    
    function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
    
});