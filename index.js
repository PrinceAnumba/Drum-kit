var loopLimit = document.querySelectorAll(".drum").length;

// Botton key listener
for (let i = 0; i < loopLimit; i++) {
    document.getElementsByTagName("button")[i].addEventListener("click", function () {
        var bottonInnerHtml = this.innerHTML;
        playSound(bottonInnerHtml);
        bottomAnimation(bottonInnerHtml);
    });
}


// key press listener
document.addEventListener("keydown",function (event) {
    playSound(event.key);
    bottomAnimation(event.key);
});

// Play sound function
function playSound(item) {
    switch (item) {
            case "w":
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                console.log(this);
                break;
        }
}

// bottom animation

function bottomAnimation(arg) {
    var activeBotton = document.querySelector("."+ arg);
    activeBotton.classList.add("pressed");

    setTimeout(function () {
        activeBotton.classList.remove("pressed");
    }, 100)
}