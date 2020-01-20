const showMockupBtn = document.querySelectorAll(".show-mockup-btn");
const mockupImg = document.querySelectorAll(".mockup-img");
showMockupBtn.forEach(element => {
    element.addEventListener("click", function() {
        mockupImg.forEach(element =>{
            if (element.style.display === "block") {
                element.style.display = "none";
            }
            else {
                element.style.display = "block";
            }
        })
        
    })
});


console.log(showMockupBtn);
console.log(mockupImg);