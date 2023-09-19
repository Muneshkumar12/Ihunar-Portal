var container = document.getElementById("portal");
var row = document.createElement("div");
container.appendChild(row);
row.setAttribute("class" , "row")
// empty col
var empty = document.createElement("div");
row.appendChild(empty);
empty.setAttribute("class" , "col");
// data section
var portalData = document.createElement("div");
row.appendChild(portalData);
portalData.setAttribute("class" , "col-11 col-sm-11 col-md-11 col-lg-11 col-xl-5 col-xxl-5 portal-data");
// heading
var portalHeading = document.createElement("div");
portalData.appendChild(portalHeading);
portalHeading.setAttribute("class" , "portal-heading");
portalHeading.innerHTML = "Student sign up";
// 
var otherData = document.createElement("div");
portalData.appendChild(otherData);
otherData.setAttribute("class" , "otherdata");
// logo
var logo = document.createElement("div");
otherData.appendChild(logo);
logo.setAttribute("class" , "logo");
var logoImage = document.createElement("img");
logo.appendChild(logoImage);
logoImage.setAttribute("src" , "./Images/Ihunarlogo.png");
logoImage.setAttribute("alt" , "logo");
// classses
var classes = document.createElement("div");
otherData.appendChild(classes);
classes.setAttribute("class" , "classes");
var physical = document.createElement("div");
classes.appendChild(physical);
physical.setAttribute("class" , "physical");
var physicalLink = document.createElement("a");
physical.appendChild(physicalLink);
physicalLink.setAttribute("href" , "#");
physicalLink.innerHTML = "physical";
var online = document.createElement("div");
classes.appendChild(online);
online.setAttribute("class" , "online");
var onlineLink = document.createElement("a");
online.appendChild(onlineLink);
onlineLink.setAttribute("href" , "#");
onlineLink.innerHTML = "online";
// input
var inputData = document.createElement("div");
otherData.appendChild(inputData);
inputData.setAttribute("class" , "inputdata");
// apply message
var apply = document.createElement("div");
inputData.appendChild(apply);
apply.setAttribute("class" , "apply");
var applyPara = document.createElement("p");
apply.appendChild(applyPara);
applyPara.innerHTML = "Apply from here for physical classes";
var nameInp = document.createElement("input");
inputData.appendChild(nameInp);
nameInp.setAttribute("placeholder" , "Name")
nameInp.setAttribute("type" , "text")
var fNameInp = document.createElement("input");
inputData.appendChild(fNameInp);
fNameInp.setAttribute("placeholder" , "Father's Name")
fNameInp.setAttribute("type" , "text")
var EmailInp = document.createElement("input");
inputData.appendChild(EmailInp);
EmailInp.setAttribute("placeholder" , "Email")
EmailInp.setAttribute("type" , "email")
var passwordInp = document.createElement("input");
inputData.appendChild(passwordInp);
passwordInp.setAttribute("placeholder" , "password")
passwordInp.setAttribute("type" , "password")
var cnicInp = document.createElement("input");
inputData.appendChild(cnicInp);
cnicInp.setAttribute("placeholder" , "CNIC Number")
cnicInp.setAttribute("type" , "number")
var mobileInp = document.createElement("input");
inputData.appendChild(mobileInp);
mobileInp.setAttribute("placeholder" , "Mobile Number")
mobileInp.setAttribute("type" , "number");
var courseDrop = document.createElement("select");
inputData.appendChild(courseDrop);
var selCourse = document.createElement("option");
courseDrop.appendChild(selCourse);
selCourse.setAttribute("id" , "disabled");
selCourse.innerHTML = ("select Course");
selCourse.disabled = true;
selCourse.selected = true;
var web = document.createElement("option");
courseDrop.appendChild(web);
web.innerHTML = "WEb Development";
var app = document.createElement("option");
courseDrop.appendChild(app);
app.innerHTML = "App Development";
var wordPress = document.createElement("option");
courseDrop.appendChild(wordPress);
wordPress.innerHTML = "wordPress";
var graphic = document.createElement("option");
courseDrop.appendChild(graphic);
graphic.innerHTML = "Graphic Designing";
var Freelancing = document.createElement("option");
courseDrop.appendChild(Freelancing);
Freelancing.innerHTML = "Freelancing";
var Marketing = document.createElement("option");
courseDrop.appendChild(Marketing);
Marketing.innerHTML = "Social Media Marketing";
var youMastery = document.createElement("option");
courseDrop.appendChild(youMastery);
youMastery.innerHTML = "Youtube Mastery";
var genderDrop = document.createElement("select");
inputData.appendChild(genderDrop);
var selectGender = document.createElement("option");
genderDrop.appendChild(selectGender);
selectGender.disabled = true;
selectGender.selected = true;
selectGender.innerHTML = "Select Gender";
var male = document.createElement("option");
genderDrop.appendChild(male);
male.innerHTML = "Male";
var female = document.createElement("option");
genderDrop.appendChild(female);
female.innerHTML = "female";
var passportPic = document.createElement("input");
inputData.appendChild(passportPic);
passportPic.setAttribute("type" , "file");
passportPic.setAttribute("placeholder" , "Select Image");
var imgMessage = document.createElement("div");
inputData.appendChild(imgMessage);
imgMessage.setAttribute("class" , "Imagemessage");
var imgPara = document.createElement("p");
imgMessage.appendChild(imgPara);
imgPara.innerHTML = "Upload your passport size photo with blue background.";
var lapMessage = document.createElement("p");
var lapMessageInp = document.createElement("input");
lapMessage.appendChild(lapMessageInp);
lapMessageInp.setAttribute("type" , "checkbox");
lapMessageInp.innerHTML = "I have laptop for  classes";
var message = document.createElement("p");
inputData.appendChild(message);
message.setAttribute("id" , "message")
var alreadyAcc = document.createElement("div");
inputData.appendChild(alreadyAcc);
alreadyAcc.setAttribute("class" , "alreadyaccount");
var member = document.createElement("div");
alreadyAcc.appendChild(member);
member.setAttribute("class" , "Already");
var memberLink = document.createElement("a");
member.appendChild(memberLink);
memberLink.setAttribute("href" , "#");
memberLink.innerHTML = "Already a member";
var signin = document.createElement("div");
alreadyAcc.appendChild(signin);
signin.setAttribute("class" , "signin");
var signinLink = document.createElement("a");
signin.appendChild(signinLink);
signinLink.setAttribute("href" , "#");
signinLink.innerHTML = "Signin";
var signUp = document.createElement("div");
inputData.appendChild(signUp);
signUp.setAttribute("class" , "signup");
var signUpBtn = document.createElement("button");
signUp.appendChild(signUpBtn);
signUpBtn.innerHTML = "signUp";
signUpBtn.setAttribute("onclick" , "signup()")
function signup(){
    if(nameInp.value === ""){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Name Required!"
        nameInp.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 500);
    }else if(fNameInp.value === ""){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Father Name Required!"
        fNameInp.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 500);
    }else if(EmailInp.value === ""){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Email Required!"
        EmailInp.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 500);
    }else if(passwordInp.value === ""){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "password Required!"
        passwordInp.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 500);
    }else if(cnicInp.value === ""){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "CNIC Number Required!"
        cnicInp.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 500);
    }else if(cnicInp.value.length !== 14){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Inter valid CNIC Numebr"
        cnicInp.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 500);
    } else if(mobileInp.value === ""){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "mobile Number Required!"
        mobileInp.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 500);
    }else if(mobileInp.value.length !== 11){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Enter your valied mobile Number "
        mobileInp.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 500);
    }else{
        var userData = [
            {
                name:  nameInp.value,
                fatherName: fNameInp.value,
                email: EmailInp.value,
                password: passwordInp.value,
                cnic: cnicInp.value,
                mobile: mobileInp.value,
            }
        ]
        console.log(userData);
        message.style.display = "block";
        message.style.color = "green";
        message.innerHTML = "success"
        setTimeout(() => {
            message.style.display = "none";
            nameInp.value = "";
            fNameInp.value = "";
            EmailInp.value = "";
            passwordInp.value = "";
            cnicInp.value = "";
            mobileInp.value = "";
            
        }, 500);
    }
}














// empty col2
var empty2 = document.createElement("div");
row.appendChild(empty2);
empty2.setAttribute("class" , "col");