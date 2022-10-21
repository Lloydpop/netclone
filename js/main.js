const btns=document.querySelectorAll(".box")
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let content=e.currentTarget.lastElementChild
        content.classList.toggle("add-content")
        btn.classList.toggle("add-box")
    })
})
const images=["/img/netad.GIF","/img/netad2.GIF","/img/netad-3.GIF","/img/netad4.GIF"]
const ads=document.querySelector(".netad")
function rand(){
    let rand= Math.floor(Math.random()*images.length)
    ads.src=images[rand]
}
setInterval(rand,3000)
rand()
const form=document.querySelector("#first")
const email=document.querySelector("#email")
const form2=document.querySelector("#form2")
const email2=document.querySelector("#email2")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validate()
})
function validate(){
    let emailVal=email.value.trim()
    if(emailVal===""){
        setError(email,"Email cannot be empty!")
    }
    else if(!isEmailValid(emailVal)){
        setError(email,"not a valid Email!")
    }
    else{
        setSuccess(email,"")
        window.location
    }
}
const isEmailValid = (emails) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emails);
};
form2.addEventListener("submit",(e)=>{
    e.preventDefault()
    validate2()
})
function validate2(){
    let emailVal=email2.value.trim()
    if(emailVal===""){
        setError2(email2,"Email cannot be empty!")
    }
    else if(!isEmailValid(emailVal)){
        setError2(email2,"not a valid Email!")
    }
    else{
        setSuccess2(email2,"")
    }
}
function setError(element,message) {
    let parent=element.parentElement
    let error=parent.querySelector(".error")
    element.classList.add("add-border")
    error.innerHTML=message
}
function setSuccess(element,message){
    let parent=element.parentElement
    let error=parent.querySelector(".error")
    element.classList.remove("add-border")
    error.innerHTML=message
}
function setError2(element,message) {
    let parent=element.parentElement
    let error=parent.querySelector(".error2")
    element.classList.add("add-border")
    error.innerHTML=message
}
function setSuccess2(element,message){
    let parent=element.parentElement
    let error=parent.querySelector(".error2")
    element.classList.remove("add-border")
    error.innerHTML=message
}