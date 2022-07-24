document.querySelector("form").addEventListener("submit", signUpFun);
var userData = JSON.parse(localStorage.getItem("userCreds"))||[]
//   console.log(userData)
function signUpFun() {
 event.preventDefault();
var userObj = {
   email:document.querySelector("#email").value,
   password:document.querySelector("#password").value,
  };
 //  console.log(userObj);
 userData.push(userObj);
localStorage.setItem("userCreds",JSON.stringify(userData))
 // console.log(userData.length)
var enteredemail=document.querySelector("#email").value
var enteredpass=document.querySelector("#password").value
console.log(enteredpass,enteredemail)
console.log(userData.length)
for(var i=0;i<userData.length;i++)
{
   if(enteredemail==userData[i].email&&enteredpass==userData[i].password)
   {
       console.log("yes")
      
       break;
   }
   else
   {
 window.location.href="index.html"
       break
   }
}


}
    
     
     