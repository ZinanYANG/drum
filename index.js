// alert("test working");

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("i got clicked");
// }


// document.querySelectorAll(".drum")[0].addEventListener("click", function handleClick() {
//     alert("i got clicked");
// });


// detecting button press
var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
        // this.style.color = "white";
        // alert("i got clicked");
        // var sound = new Audio("sounds/tom-1.mp3");
        // sound.play();
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// detecting keyboard press
document.addEventListener("keypress", function (key) {
    // this.style.color = "white";
    // console.log(even);
    makeSound(key.key);
    // this.style.color = "white";
    buttonAnimation(key.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log("buttonInnerHTML")

    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}
