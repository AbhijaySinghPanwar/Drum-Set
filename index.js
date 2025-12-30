var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleclick);
}

function handleclick() {
    var buttonInnerHTML=this.innerHTML;
    
    switch(buttonInnerHTML){
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);  
    }
    buttonAnimation(buttonInnerHTML);
    
}
function buttonClick(key)
{
    switch(key){
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);  
    }
}
document.addEventListener("keydown",function(event)
{
    buttonClick(event.key);
    buttonAnimation(event.key);
});
function buttonAnimation(keys)
{
    document.querySelector("."+keys).classList.add("pressed");
    setTimeout(function()
    {
        document.querySelector("."+keys).classList.remove("pressed");
    },100);
}