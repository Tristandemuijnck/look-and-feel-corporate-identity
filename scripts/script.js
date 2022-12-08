// function toggleMenu(){
//     var menu = document.getElementById("primaire-nav");
//     if(menu.style.display == "block"){
//         menu.style.display = "none";
//     } else{
//         menu.style.display = "block";
//     }
// }

// Navigatie menu openen
let menuBtn = document.getElementById('menu-btn');
let primaireNav = document.getElementById('primaire-nav');

menuBtn.addEventListener('click', () => {
    primaireNav.classList.toggle("show");
});

// Checboxes tellen

// Waarneember section
let waarneembaarCheckboxes = document.getElementsByName('richtlijn-cb-waarneembaar');
let numberOfCheckboxesWaarneembaar = 0;

console.log(waarneembaarCheckboxes);

for (let i = 0; i < waarneembaarCheckboxes.length; i++) {
    waarneembaarCheckboxes[i].addEventListener('change', countChecks(waarneembaarCheckboxes[i])); 
    console.log(waarneembaarCheckboxes[i]);
}


function countChecks(checkbox) {
    if (checkbox.checked){
        numberOfCheckboxesWaarneembaar++;
    }

    console.log(numberOfCheckboxesWaarneembaar);
}
 

// Robuust section

// Begrijpelijk section

// Bedienbaar section


// Card openen
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