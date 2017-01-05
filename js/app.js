


window.onload = function(){
  console.log('the window has loaded')
  var emailData={
  }
  var clicker = document.getElementById('clicker')

  clicker.addEventListener('click', function(){
    event.preventDefault();
    console.log("clicked")
    var email = document.getElementById('email-input').value;
    console.log(email)
    email.value = "";
    var name = document.getElementById('email-name').value;

    emailData.name = name;
    emailData.email= email;

    document.getElementById('pissed-off').innerHTML = "OK, Got it! Thank you.";
    document.getElementById('pissed-off').style.textAlign = "center";
    console.log(emailData)
    return emailData;
  })

}












// var mainModule = function(){
//   function pauly (){
//     console.log("Paul")
//   };
//   function second(){
//     console.log('other function in your module')
//     pauly();
//     otherModule.doSomething();
//   }
//   return{
//     second: second
//   };
// }()
//
// var otherModule = {
//   doSomething: function (){
//     console.log('I\'d change the background green if I could remember how to do that')
//   },
//   doAnother: function (){
//       console.log('I\'d change the background green if I could remember how to do that')
//     }
// };
//
//
// var max = {
//   pauly: function(){
//     console.log('Pauly')
//   },
//   sec: function(){
//     otherModule.doAnother();
//   }
//
// }
