confirm("Rəngi dəyişmək üçün Click et")
 
 
document.getElementById("body").style.backgroundColor="white"
function Change(){
    if ( confirm("Rəngi dəyişmək üçün Click et")==true) {
        document.getElementById("body").style.backgroundColor="black";
    }
    else{
        document.getElementById('body').style.backgroundColor="white"
    }
}

 

 