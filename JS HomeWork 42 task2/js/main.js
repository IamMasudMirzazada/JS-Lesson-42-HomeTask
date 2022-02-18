 
var x=prompt("Yaşınızı daxil edin");
console.log(isNaN(x))
if (x<0) {
    alert("Yaş mənfi ola bilməz")
}
else{
    if (x.trim()==''){
        alert('bos ola bilmez')
    }
    else{
        if (isNaN(x)==true )
        {
           alert("herf daxil etmek olamaz ")
       }
       
       else{
          if (x<18) {
              alert("Yaş 18-dən kiçik ola bilməz");  
              // window.close()
           }
           
           else{
               alert("Uğurla qeydiyyatdan keçdiniz" );
           }
       
       }
    }
}

 
  
 
    