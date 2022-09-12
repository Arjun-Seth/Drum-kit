
// // Code is for detecting drum button clicks

// var numberOfButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         // console.log(this.style.color = "white");

//         switch (this.innerHTML) {

//             case "w":
//                 var audio = new Audio('sounds/tom-1.mp3');
//                 audio.play();
//                 break;
//             case "a":
//                 var audio = new Audio('sounds/tom-2.mp3');
//                 audio.play();
//                 break;
//             case "s":
//                 var audio = new Audio('sounds/tom-3.mp3');
//                 audio.play();
//                 break;
//             case "d":
//                 var audio = new Audio('sounds/tom-4.mp3');
//                 audio.play();
//                 break;
//             case "j":
//                 var audio = new Audio('sounds/snare.mp3');
//                 audio.play();
//                 break;
//             case "k":
//                 var audio = new Audio('sounds/crash.mp3');
//                 audio.play();
//                 break;
//             case "l":
//                 var audio = new Audio('sounds/kick-bass.mp3');
//                 audio.play();
//                 break;
//             default:
//                 alert("Press the right drum");
//                 break;
//         }

//     });
// }

// // Code is for Detecting keyboard press

// document.addEventListener("keypress", function (event) {

//     switch (event.key) {

//         case "w":
//             var audio = new Audio('sounds/tom-1.mp3');
//             audio.play();
//             break;
//         case "a":
//             var audio = new Audio('sounds/tom-2.mp3');
//             audio.play();
//             break;
//         case "s":
//             var audio = new Audio('sounds/tom-3.mp3');
//             audio.play();
//             break;
//         case "d":
//             var audio = new Audio('sounds/tom-4.mp3');
//             audio.play();
//             break;
//         case "j":
//             var audio = new Audio('sounds/snare.mp3');
//             audio.play();
//             break;
//         case "k":
//             var audio = new Audio('sounds/crash.mp3');
//             audio.play();
//             break;
//         case "l":
//             var audio = new Audio('sounds/kick-bass.mp3');
//             audio.play();
//             break;
//         default:
//             alert("Press any drum button");
//             break;
//     }


// });


var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        makeSound(this.innerHTML);

        buttonAnimation(this.innerHTML);
    });
}



document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {

        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            alert("Press any drum button");
            break;
    }
};

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);

}