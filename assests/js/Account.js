/////////////move betweeen forms///////
const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');
const openform=document.querySelector('.btnLogin-popup');
const hideform=document.querySelector('.icon-close');

registerlink.addEventListener('click',()=>
{
    wrapper.classList.add('active');
    
});
loginlink.addEventListener('click',()=>
{
    wrapper.classList.remove('active');
    var emailtext=document.getElementsByName("otpcode")[0].value;
    var emaillogg=document.getElementsByName("ee")[0];
    emaillogg.value=emailtext;
});

openform.addEventListener('click',()=>
{
    wrapper.classList.add('active-popup');
});
hideform.addEventListener('click',()=>
{
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active-otopup');

});
///////////////localstorage data of register //////////////////
let username=document.querySelector("#username");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let register_btn=document.querySelector("#register_btn");
register_btn.addEventListener('click',function(e){
    e.preventDefault();
    if(username.value==="" ||email.value==="" || password.value==="")
    {
        alert("Please Fill The Data");
    }
    else
    {
        localStorage.setItem('username',username.value);
        localStorage.setItem('email',email.value);    
        localStorage.setItem('password',password.value);
        // setTimeout(()=>{
        //     window.location="index.html";
        // },1500);
        wrapper.classList.add('active-otopup');
        var emailtext=document.getElementsByName("otpcode")[0].value;
        var emailotp=document.getElementById("otpmessage");
        emailotp.innerText+=emailtext;
    }
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
});
///////////////////localstorage data of login //////////////////////////
let login_btn=document.querySelector("#login_btn");
let emaill=document.querySelector("#emaill");
let passwordd=document.querySelector("#passwordd");
let getemail=localStorage.getItem("email");
let getpassword=localStorage.getItem("password");
login_btn.addEventListener('click',function(){
    // e.preventDefault();
    if(emaill.value==="" || passwordd.value==="")
    {
        alert("Please Fill The Data")
    }
    else if(getemail && getemail.trim()===emaill.value.trim()&&
        getpassword &&getpassword===passwordd.value)
    {
        window.location="index.html";
    }
    else
    {
        alert("email or password is wrong !!");
    }
});

////////////////opt vertification code//////////////////
// var codetext=Math.floor((Math.random()*716489)+149348);
// alert(codetext);
var codetext="789548"
let otp_code=document.querySelector("#opt_code");
otp_code.addEventListener('click',function(e){
    e.preventDefault();
    var codemo=document.getElementsByName("codetest")[0].value;
    if(codemo=="")
    {
      alert("Please Enter your code!!")
    }
    else if(codetext==codemo)
    {
        window.location.replace("index.html");
    }
    else
    {
        alert("Wrong Code. Try again!!")
    }//   alert(emailtext);
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

});


