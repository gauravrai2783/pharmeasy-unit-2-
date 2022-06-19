let slideimgArray = [
    "https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg",
    "https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg",
    "https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg",
    "https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg"
];
let imgNumber = 0;
let slideImage = document.querySelector("#slideImage");
let button2 = document.querySelectorAll(".btn2");
button2[0].addEventListener("click", function () {
    if (imgNumber === 0) {
        imgNumber = slideimgArray.length - 1;
    } else {
        imgNumber--;
    }
    slideImage.src = slideimgArray[imgNumber];
})

button2[1].addEventListener("click", function () {
    if (imgNumber === slideimgArray.length - 1) {
        imgNumber = 0;
    } else {
        imgNumber++;
    }
    slideImage.src = slideimgArray[imgNumber];
});


let info2 = document.querySelectorAll(".info11");
info2.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    });
});


// silde div 2
let slider = document.querySelector("#slider");
    let btn3 = document.querySelector(".btn3");
    let btn4 = document.querySelector(".btn4");
    let index = 0;
    let temp=3
    btn3.addEventListener("click", function () {
        if (index==temp-1) {
            index = 0;
            // index = index - 1;
            slider.style.transform = "translate(" + (index) * -20 + "%)";
        }else{
            index = index + 1;
            slider.style.transform = "translate(" + (index) * -20 + "%)";
        }
            
    })

    btn4.addEventListener("click", function () {
        if(index==2){
            // index=temp-1;
            index = index - 1;
        slider.style.transform = "translate(" + (index) * -20 + "%)";

        }else{

         index = index + 1;
        slider.style.transform = "translate(" + (index) * -20 + "%)";
        }
    })
    // slide div 2 end ......