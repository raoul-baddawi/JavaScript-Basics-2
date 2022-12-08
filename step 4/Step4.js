function resetAll(){
   const name = document.querySelector("#name");
   const surname = document.querySelector("#surname");
   const city = document.querySelector("#city");
  
   let answer = confirm("You are about to clear all fields, are you sure?");
         if (confirm) {
           name.value = " ";
           surname.value = " ";
           city.value = " ";
         }
 }