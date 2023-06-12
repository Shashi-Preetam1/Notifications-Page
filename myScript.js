function notifs(y) {
    var x = document.getElementById("num_notif").textContent;
    if(x - y > 0){
        document.getElementById("num_notif").innerHTML = x - y;
    }
    else{
        document.getElementById("num_notif").style.display = "none";
    }
}

// removes background color and dot from each unread notification individually on click     
// better functionality but uglier code with seperate ids for each unread notif
function unread1(){
    document.getElementById("tabc_unread1").style.backgroundColor="white";
    document.getElementById("dot1").style.display="none";
}

function unread2(){
    document.getElementById("tabc_unread2").style.backgroundColor="white";
    document.getElementById("dot2").style.display="none";
}

function unread3(){
    document.getElementById("tabc_unread3").style.backgroundColor="white";
    document.getElementById("dot3").style.display="none";
}