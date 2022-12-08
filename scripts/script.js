// Navigatie menu openen
let menuBtn = document.getElementById('menu-btn');
let primaireNav = document.getElementById('primaire-nav');

menuBtn.addEventListener('click', () => {
    primaireNav.classList.toggle("show");
});

// Checkboxes tellen
var waarneembaarCheckboxes = document.querySelectorAll('#rl-waarneembaar input[type=checkbox]');
var robuustCheckboxes = document.querySelectorAll('#rl-robuust input[type=checkbox]');
var begrijpelijkCheckboxes = document.querySelectorAll('#rl-begrijpelijk input[type=checkbox]');
var bedienbaarCheckboxes = document.querySelectorAll('#rl-bedienbaar input[type=checkbox]');

waarneembaarCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        countChecks(checkbox, this.closest(".rl-cards").parentElement.id);
    });
});

robuustCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        countChecks(checkbox, this.closest(".rl-cards").parentElement.id);
    });
});

begrijpelijkCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        countChecks(checkbox, this.closest(".rl-cards").parentElement.id);
    });
});

bedienbaarCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        countChecks(checkbox, this.closest(".rl-cards").parentElement.id);
    });
});

function countChecks(checkbox, categorie) {
    var progress = checkbox.closest(".rl-cards").querySelectorAll('input[type=checkbox]:checked').length;

    switch (categorie) {
        case "rl-waarneembaar":
            document.getElementById("waarneembaar-count").innerHTML = progress;
            break;

        case "rl-robuust":
            document.getElementById("robuust-count").innerHTML = progress;
            break;

        case "rl-begrijpelijk":
            document.getElementById("begrijpelijk-count").innerHTML = progress;
            break;
        
        case "rl-bedienbaar":
            document.getElementById("bedienbaar-count").innerHTML = progress;
            break;
    
        default:
            break;
    }
}

// Card openen alternatief
let cardButtons = document.querySelectorAll('.rl-card-btn');
let cardsContent = document.querySelectorAll('.rl-card-content');

cardButtons.forEach((cardButton) => {
    cardButton.addEventListener('click', function () {
        let parentElement = this.closest('.rl-card-content-wrapper');
        let targetElement = parentElement.querySelector('.rl-card-extra');
        let btnElement = parentElement.querySelector('.rl-card-btn');
        
        targetElement.classList.toggle("showCard");
        
        if(targetElement.classList.contains("showCard")){
            btnElement.innerHTML = "Minder info";
        } else {
            btnElement.innerHTML = "Meer info";
        }
    })
})
