// Sticky Navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("#header");
    header.classList.toggle("sticky", window.scrollY > 350);
});

// Number max length
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    };
});

//Show contact sales
var showno = document.querySelector(".showno");
var none = document.querySelector(".none");

showno.addEventListener("click", () => {
    if(none.style.display === "block")
    {
        none.style.display = "none";
    }else{
        none.style.display = "block";
    }
});

// Open and Close Navigation
var open = document.querySelector("#icon");
var close = document.querySelector(".close");
var nav = document.querySelector(".navlinks");

open.addEventListener("click", ()=>{
        nav.style.left= "0";
        nav.style.display= "block";
        header.classList.toggle("sticky2");
});

close.addEventListener("click", ()=>{
    nav.style.left= "100%";
    nav.style.display= "none";
    header.classList.remove("sticky2");
});

// Submenu Open Close trigger
var itarrow = document.querySelector(".itarrow");

itarrow.addEventListener("click", ()=>{
    nav.classList.toggle("show1");
});

var subarrow1 = document.querySelector(".subarrow1");

subarrow1.addEventListener("click", ()=>{
    nav.classList.toggle("show2");
});

var subarrow2 = document.querySelector(".subarrow2");

subarrow2.addEventListener("click", ()=>{
    nav.classList.toggle("show3");
});

var subarrow3 = document.querySelector(".subarrow3");

subarrow3.addEventListener("click", ()=>{
    nav.classList.toggle("show4");
});

var subarrow4 = document.querySelector(".subarrow4");

subarrow4.addEventListener("click", ()=>{
    nav.classList.toggle("show5");
});

// Contact Submenu Open Close trigger
var cuarrow = document.querySelector(".cuarrow");

cuarrow.addEventListener("click", ()=>{
    nav.classList.toggle("cushow1");
});

var cusubarrow1 = document.querySelector(".cusubarrow1");

cusubarrow1.addEventListener("click", ()=>{
    nav.classList.toggle("cushow2");
});

var cusubarrow2 = document.querySelector(".cusubarrow2");

cusubarrow2.addEventListener("click", ()=>{
    nav.classList.toggle("cushow3");
});

var cusubarrow3 = document.querySelector(".cusubarrow3");

cusubarrow3.addEventListener("click", ()=>{
    nav.classList.toggle("cushow4");
});


// faq
var que = document.getElementsByClassName("que");
var ans = document.querySelector(".ans");
var quearrow = document.getElementsByClassName("quearrow");
var i;

for(i = 0; i < que.length; i++)
{
    que[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var ans = this.nextElementSibling;
        if(ans.style.display === "block")
        {
            ans.style.display = "none";

        }else{
            ans.style.display = "block";
        }
    });
};

// Date
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;


// Form validation
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const how = document.getElementById("how");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const howInput = document.querySelector('input[name="how"]');

let isFormValid = false;


    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = message; 
        inputControl.classList.add("error");
        inputControl.classList.remove("success");
    };

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = '';
        inputControl.classList.add("success");
        inputControl.classList.remove("error");
    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

 const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const howValue = how.value.trim();

    if (nameValue === '')
    {
        isFormValid = false;
        setError(name, "Please complete this required field.");
    }else{
        isFormValid = true;
        setSuccess(name);
    }

    if (emailValue === '')
    {
        isFormValid = false;
        setError(email, "Please complete this required field.");
    }else if(!isValidEmail(emailValue)){
        isFormValid = false;
        setError(email, "Email must be formatted correctly.");
    }else{
        isFormValid = true;
        setSuccess(email);
    }

    if (howValue === '')
    {
        isFormValid = false;
        setError(how, "Please complete this required field.");
    }else{
        
        setSuccess(how);
        if(setSuccess(how))
        {
            isFormValid = true;
        }
    }

 };

 form.addEventListener("submit", e =>{
    e.preventDefault();

    validateInputs();

    if(isFormValid)
    {
        window.location.href = "index.html";
    }
});

 nameInput.addEventListener("input", () => {
        setSuccess(name);
 });

 emailInput.addEventListener("input", () => {
    setSuccess(email);
 });

 howInput.addEventListener("input", () => {
    setSuccess(how);
 });

//  Ssn check
function check1(){
    let ssn1 = document.myform.ssn1.value;
    let cssn1 = document.myform.cssn1.value;

    if(ssn1 == cssn1){
        document.getElementById("msg").innerText = "";
    }else if(cssn1 == '')
    {
        document.getElementById("msg").innerText = "";
    }
    else
    {
        document.getElementById("msg").innerText = "SSN does'nt match";
    }
}

function check2(){
    let ssn2 = document.myform.ssn2.value;
    let cssn2 = document.myform.cssn2.value;

    if(ssn2 == cssn2){
        document.getElementById("msg").innerText = "";
    }else if(cssn2 == '')
    {
        document.getElementById("msg").innerText = "";
    }
    else
    {
        document.getElementById("msg").innerText = "SSN does'nt match";
    }
}

function check3(){
    let ssn3 = document.myform.ssn3.value;
    let cssn3 = document.myform.cssn3.value;

    if(ssn3 == cssn3){
        document.getElementById("msg").innerText = "";
    }else if(cssn3 == '')
    {
        document.getElementById("msg").innerText = "";
    }
    else
    {
        document.getElementById("msg").innerText = "SSN does'nt match";
    }
};


// Phone number formatter
function formatPhoneNumber(value) {
    if (!value) return value;
    const phone = value.replace(/[^\d]/g, '');
    const phoneLength = phone.length;
    if(phoneLength < 4) return phone;
    if(phoneLength < 7) {
        return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    }
    return `(${phone.slice(0, 3)}) ${phone.slice(
        3,
        6,
        )}-${phone.slice(6, 9)}`;
}

function phoneNumberFormat() {
    const inputField = document.getElementById("phone");
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}