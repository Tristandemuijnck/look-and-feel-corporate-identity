function toggleMenu(){
    var menu = document.getElementById("primaire-nav");
    if(menu.style.display == "block"){
        menu.style.display = "none";
    } else{
        menu.style.display = "block";
    }
}

function switchDisplay(id, buttonId){
    let elementId = document.getElementById(id);
    let button = document.getElementById(buttonId);
    
    if(elementId.style.display == 'none'){
        elementId.style.setProperty('display', 'flex');
        button.innerHTML = "Minder info";
    }
    else if(elementId.style.display == 'flex'){
        elementId.style.setProperty('display', 'none');
        button.innerHTML = "Meer info";
    }
}

function switchButtonText(classDisplayChild){
    const infoButton = document.querySelectorAll('.rl-card-btn');

    infoButton.forEach((infoButtonChild) => {
        if(classDisplayChild == 'none'){
            infoButtonChild.innerHTML = "Meer info";
        }
        else if(classDisplayChild == 'flex'){
            infoButtonChild.innerHTML = "Minder info";
        }
    });
}