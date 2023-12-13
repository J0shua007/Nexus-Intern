let icon = document.querySelector(".icon");
let moon = document.querySelector(".moon");

icon.addEventListener("click", () => {
  console.log(document.body);
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    moon.classList.replace("fa-moon", "fa-sun");
  } else {
    moon.classList.replace("fa-sun", "fa-moon");
  }
});

let header = document.querySelector(".header");
let text = "Laptops";
let index = 0;

function fade(index) {
  
  if (index < text.length) {
    setTimeout(() => {
        header.innerHTML += text[index];
        index += 1;
        fade(index);   
    },600);
  }
  else{
    setTimeout(()=>{      
    function erase() {
      setTimeout(()=>{
        if (index > 0) {
          header.innerHTML = header.innerHTML.slice(0,-1);

          index--;
          console.log(index);
          erase();
        }
        else{
          fade(index);
        }
      },200);
    }
    erase();




    },2000);


  }
}

  fade(index);
