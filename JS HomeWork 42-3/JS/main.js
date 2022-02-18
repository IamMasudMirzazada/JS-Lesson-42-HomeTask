 
 
 let Person={
     name: 'Sadiqxan',
     surname: 'Gaykhanov',
     password:19, 
     fullname:function(){
         return this.name +" "+ this.surname;
     }
 } 
   
 
function Info() {
     document.getElementById('text').innerHTML=Person.fullname().toUpperCase().valueOf();
}

Info();