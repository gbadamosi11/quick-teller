const log = document.querySelector(".log-in");
const showLog = document.querySelector(".show-log");
const sign = document.querySelector(".sign-up");
const showSign = document.querySelector(".show-sign");
const close = document.querySelector(".close");
log.addEventListener("click", function(){
     showLog.style.display = "block";
});
sign.addEventListener("click", function(){
     showSign.style.display = "block";
});
close.addEventListener("click", function(){
     showLog.style.display = "none";
})