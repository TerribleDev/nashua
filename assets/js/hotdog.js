function showNav(){
    var elem = document.getElementsByClassName("hamNav")[0];
    var btn = document.getElementsByClassName("navBtn")[0];
    btn.setAttribute("href", "#");
    elem.classList.add("show");
}

function hideNav(){
    var elem = document.getElementsByClassName("hamNav")[0];
    var btn = document.getElementsByClassName("navBtn")[0];
    btn.setAttribute("href", "#hamMenu");
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