const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');
const otplink=document.querySelector('#otb-btn');
const btn=document.querySelector('.btnLogin-popup');
const clse=document.querySelector('.icon-close');
registerlink.addEventListener('click',()=>
{
    wrapper.classList.add('active');
    
});
loginlink.addEventListener('click',()=>
{
    // var exist= prompt("If you already have an email .Please Write your email")
    // var emaillogg=document.getElementsByName("ee")[0];
    // if(exist!="")
    // {
    //     wrapper.classList.remove('active');
    //     emaillogg.value=exist;
    // }
    // else
    // {
    //     alert("Try Again")
    // }
    wrapper.classList.remove('active');
    var emailtext=document.getElementsByName("otpcode")[0].value;
    var emaillogg=document.getElementsByName("ee")[0];
    emaillogg.value=emailtext;
});

// otplink.addEventListener('click',()=>
// {
//     wrapper.classList.add('active-otopup');
// });
btn.addEventListener('click',()=>
{
    wrapper.classList.add('active-popup');
});
clse.addEventListener('click',()=>
{
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active-otopup');

});
/////////////////////////////////
// var codetext=Math.floor((Math.random()*716489)+149348);
// alert(codetext);
var codetext="789548"
function validation(){
  wrapper.classList.add('active-otopup');
  var emailtext=document.getElementsByName("otpcode")[0].value;
  var emailotp=document.getElementById("otpmessage");
  emailotp.innerText+=emailtext;


//   alert(emailtext);
    // Email.send({
    //     SecureToken : "a720abe6-21e6-4588-987b-6d52b8ed8d37",
    //     // To : emailtext,
    //     To:'mohamedwael44466@gmail.com',
    //     From : "mohamedwael4553@gmail.com",
    //     Subject : "The Verification code",
    //     Body :"789548"
    // }).then(
    //     message => alert("Success send message")
    // );
  }

function sub(){
    var codemo=document.getElementsByName("codetest")[0].value;
    if(codemo=="")
    {
      alert("Please Enter your code!!")
    }
    else if(codetext==codemo)
    {
        window.open("index.html",'target=_self')
    }
    else
    {
        alert("Wrong Code. Try again!!")
    }
    // mohamedwael4553@gamil.com
}
function login()
{
    window.open("index.html",'target=_self')
    
}

// function validation(){
//   var inputfield=document.getElementsByName("otpuser")[0];
//   var inputfieldd=document.getElementsByName("otpcode")[0];
//   var inputfielddd=document.getElementsByName("otbpass")[0];

//   // var passw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
//   var passw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//   var emailw= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if(inputfield.value!="" &&inputfield.value.length>6 && inputfield.value.length<20&&
//   inputfielddd.value!="" &&inputfielddd.value.match(passw)&&
//   inputfieldd.value!="" && inputfielddd.value.match(emailw)){
//     var emailotp=document.getElementById("otpmessage");
//     emailotp.innerText="We've sent vertification code to your email : "+inputfieldd.value;
//     wrapper.classList.add('active-otopup');
//       // alert('Please Fill The Form!!');
//   }
//   // else if((!inputfielddd.value.match(passw))&&(!inputfieldd.value.match(emailw)))
//   // {
//   //   alert("There are something Wrong. Check your form");
//   // }
//   else
//   {
//     alert('There are something Wrong. Check your form!!');
//     // var emailtext=document.getElementsByName("otpcode")[0].value;
//     // var emailotp=document.getElementById("otpmessage");
//     // emailotp.innerText="We've sent vertification code to your email : "+inputfieldd.value;
//     // wrapper.classList.add('active-otopup');
//   }
// }