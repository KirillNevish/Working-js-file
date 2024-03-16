window.onload = function(){
    let textStr = "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

    let searchRegExp = /[A-Z]/g;

    let searchIndex = textStr.match(searchRegExp);
    console.log(searchIndex);
}