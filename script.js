const slidePage = document.querySelector(".page");
const nextBtnFirst = document.querySelector(".1-next");
const prevBtnSec = document.querySelector(".back1");
const nextBtnSec = document.querySelector(".2-next");
const prevBtnThird = document.querySelector(".back2");
const nextBtnThird = document.querySelector(".3-next");
const prevBtnFourth = document.querySelector(".back3");
const submitBtn = document.querySelector(".confirm");
nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginTop = "-25%";

});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginTop = "-50%";

});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginTop = "-75%";

});
submitBtn.addEventListener("click", function(){
  setTimeout(function(){
    alert("Your Form Successfully Submitted");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginTop = "0%";

});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginTop = "-25%";
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginTop = "-50%";
});
