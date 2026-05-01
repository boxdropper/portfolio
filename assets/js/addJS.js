// Initialize Bootstrap Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Marquee Text
window.addEventListener("load", choosePhrase);

var phraseArray = new Array ("frog blast the vent core!",
"professional unprofessional!",
"somewhere in the heavens, they are waiting.",
"f you don, pay me you lime!",
"jack in. kick ass.",
"today is friday in california.",
"saul myers is ex military",
"saul myers's daughter has gone missing",
"saul myers is going to puerto sombra",
"saul myers is going to hit boiling point",
"this vexes me.",
"are you sure this is the way to the escape pod?",
"where did you learn to fly?",
"neotokyo friday, every friday",
"a.",
"asdfghjkjl;'",
"i have to shit.",
"qwuit whinning",
"the pinnacle of entertainment software!",
"well, the kids have to learn about tekwar sooner or later.",
"1 dollar.",
"for england, james?",
"no mister bond, i expect you to die!",
"longer. larger. fart",
"more mouse bites!",
"perfect dark is forever",
"they'll bury you in a lunchbox",
"all your base are belong to us",
"the sun never sets on the miku empire!",
"proud donator to Sven Co-Op!",
"proud donator to Hunt Down the Freeman!",
"proud donator to knockout.chat!",
"Allan please add details",
"buttsauce!",
"gaming!",
"neon genesis evangelion",
);

function choosePhrase() {
    var randomNum = Math.floor(Math.random() * phraseArray.length);
    document.getElementById("marqueePhrases").innerHTML = phraseArray[randomNum];}