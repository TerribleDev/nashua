function showNav(){
    var elem = document.getElementsByClassName("hamNav")[0];
    elem.classList.add("show");
}

function hideNav(){
    var elem = document.getElementsByClassName("hamNav")[0];
    elem.classList.remove("show");
}

function triggerHamburg(){
    var elem = document.getElementsByClassName("hamNav")[0];
    if(elem.classList.contains("show")){
        elem.classList.remove("show");
    }
    else{
        elem.classList.add("show");
    }
}