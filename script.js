const rateState = document.querySelector(".rating-state")
const thankYou = document.querySelector(".thank-you-state")
const button = document.querySelectorAll(".btn-circle")
const buttonSubmit = document.querySelector(".btn-submit")
const selectButton = document.querySelector(".selected-btn")

for (let i=0; i<button.length; i++ ){
    button[i].addEventListener("click" ,function(){
        button[i].style.backgroundColor="hsl(217, 12%, 63%)";
        button[i].style.color="white";
        selectButton.textContent = i + 1;  
    });

}
buttonSubmit.addEventListener("click", function(){
    
        thankYou.style.display = "block" 
        rateState.style.display = "none";

     
    
});
