let showBtn = document.querySelector(".show-btn");
let closeBtn = document.querySelector(".close-btn");
let modalContent = document.querySelector(".modal-content");

console.log("srcipt working")
showBtn.addEventListener("click", function(){
    modalContent.classList.toggle("show")
})


closeBtn.addEventListener("click", function(){
    modalContent.classList.toggle("show")
})