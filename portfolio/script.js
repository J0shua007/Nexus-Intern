$(document).ready(function() {
    $(".toggle").click(function () {
        $(".navi").slideToggle(1000);
    })
});

let animated =  document.getElementById("animated");
let text = "Full Stack Developer";
let textIndex = 0;
let typingSpeed = 300;
let times = 0;
let timesCount = 3;

function type() {
    animated.innerHTML = text.substring(0,textIndex+1);
    textIndex++;

    if (textIndex === text.length) {
        textIndex = 0;
        times++;
        if (times < timesCount) {
            setTimeout(type,3000);
            
        }
        
    }
    else{
        setTimeout(type,typingSpeed);
    }
    
}
setTimeout(type,3000);







//dark mode and light mode
function dark() {
    let darkBtn = document.querySelector(".dark");
    document.body.classList.toggle("darktheme");
    if (document.body.classList.contains("darktheme")) {
        darkBtn.firstElementChild.classList.replace("fa-moon","fa-sun")
    } 
    else {
        darkBtn.firstElementChild.classList.replace("fa-sun","fa-moon")
    }
    };