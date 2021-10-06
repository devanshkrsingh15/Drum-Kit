var arr = document.querySelectorAll("button");
for (var i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    MakeSound(this.innerHTML);
    animate(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  MakeSound(event.key);
  animate(event.key);
});

function MakeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/0.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/1.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/2.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/3.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/4.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/5.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/6.mp3");
      audio.play();
      break;
  }
}

function animate(key){
    var mybtn=document.querySelector("."+key);
    mybtn.classList.add("pressed");

    setTimeout(function(){
        mybtn.classList.remove("pressed");
    },100);
}
