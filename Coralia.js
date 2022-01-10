var CharacterSel = document.getElementById("CharacterSel");
var BattleSel    = document.getElementById("BattleSel");
var TutorialSel  = document.getElementById("TutorialSel");

var mainmenu    = document.getElementById("mainmenu");
var ChGrid      = document.getElementById("ChGrid");
var ChGrid2     = document.getElementById("ChGrid2");
var statDisplay = document.getElementById("statDisplay");
var prep        = document.getElementById("prep");
var battlescr   = document.getElementById("battlescr");
var Return      = document.getElementById("Return");
var Return2     = document.getElementById("Return2");
var Start       = document.getElementById("start");

var Rival     = "";
var Player    = "";
var rivalpt   = document.getElementById("rivalcard");
var rivalpt2  = document.getElementById("rivalcard2");
var playerpt  = document.getElementById("playercard");
var playerpt2 = document.getElementById("playercard2");
var square    = 0;

var battlelog = document.getElementById("battlelog");
var pcbar     = document.getElementById("pcbar");
var rcbar     = document.getElementById("rcbar");

var t         = 0;
var bAtk      = document.getElementById("bAtk");
var bMagic    = document.getElementById("bMagic");
var bItems    = document.getElementById("bItems");
var Wait      = document.getElementById("Wait");

var pmenu     = document.getElementById("pmenu");
var playermenu= document.getElementById("playermenu");
var extrac    = document.getElementById("extrac");
var resultsc  = document.getElementById("resultsc");
var bas       = 0;
var winner    = "";
var inventory = "";

var wint      = document.getElementById("wint");
var wincard   = document.getElementById("wincard");
var rdesc     = document.getElementById("rdesc");

Return.onclick = function(){
    ChGrid.style.display      = "none";
    ChGrid2.style.display     = "none"; 
    Return.style.display      = "none";
    prep.style.display        = "none";
    statDisplay.style.display = "none";
    battlescr.style.display   = "none";
    resultsc.style.display    = "none";
    mainmenu.style.display    = "block";
    Rival  = "";
    Player = "";
    rivalpt.innerHTML = "Rival";
    rivalpt.style.padding = "";
    playerpt.innerHTML = "You";
    playerpt.style.padding   = "";
    playerpt.style.transform = "";
    startp.innerHTML    = "";
    battlelog.innerHTML = "";
    pcbar.style = "";
    rcbar.style = "";
    winner      = "";
    bMagic.style.color = "white";
    
    
    currentP = {
        hp:   0,
        str:  0,
        res:  0,
        spd:  0,
        cord: 0,
        agl:  0,
        nrg:  0,
        pwr:  0,
        rcv:  0,
        stt:  0,
        img : ""
};
    currentR = {
        hp:   0,
        str:  0,
        res:  0,
        spd:  0,
        cord: 0,
        agl:  0,
        nrg:  0,
        pwr:  0,
        rcv:  0,
        stt:  0,
        img: ""
};
    
    
}

document.getElementById("Return2").onclick = function(){
    ChGrid2.style.display = "none";
    prep.style.display    = "block";
}

const Characters = {
    Aren: {
        id: 0,
        name: "Aren",
        Lv: 47,
        Stamina: 74,
        Strenght: 91,
        Resistance: 76,
        Speed: 72.5,
        Coordination: 81,
        Agility: 77,
        Energy: 11,
        Power: 60,
        Recover: 2,
        img: "Aren.png",
    },
    Aqua: {
        id: 1,
        name: "Aqua",
        Lv: 47,
        Stamina: 46,
        Strenght: 20,
        Resistance: 45,
        Speed: 27,
        Coordination: 53,
        Agility: 42,
        Energy: 10,
        Power: 80,
        Recover: 6,
        img: "Aqua.png",
        story: "A lone girl that lives in the shore. While isolated from everyone else, she learned water magic like if it was nothing.",
        magic: ["Water I", "Water II", "Water III"],
        skill: "heals 10% every turn."
    },
    Kyle: {
        id: 2,
        name: "Kyle",
        Lv: 45,
        Stamina: 39,
        Strenght: 46,
        Resistance: 51,
        Speed: 77,
        Coordination: 67,
        Agility: 82,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Kyle.png",
        story: "A member of the ocean people, he's very friendly but seems to struggle to keep it together.",
        magic: "",
        skill: "rises agility by 20 % when stamina is below 60%."
    },
    Roylan: {
        id: 3,
        name: "Roylan",
        Lv: 10,
        Stamina: 35,
        Strenght: 10,
        Resistance: 15,
        Speed: 15,
        Coordination: 50,
        Agility: 27,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Roylan.png",
        story: "A very young sailor that has nowhere else to go. Somehow can read ancient writings.",
        magic: "",
        Roylan: "has 50% chances of halving damage received or inflict foe's half maximun stamina."
    },
    Kaigune: {
        id: 4,
        name: "Kaigune",
        Lv: 60,
        Stamina: 70,
        Strenght: 61,
        Resistance: 30,
        Speed: 90,
        Coordination: 80,
        Agility: 90,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Kaigune.png",
        story: "A guy that left behind the life on land for unkown reasons. Looks like he's running away or only going to explore.",
        magic: "",
        skill: "accuracy x0.9, strenght x1.4"
    },
    Husker: {
        id: 5,
        name: "Husker",
        Lv: 50,
        Stamina: 100,
        Strenght: 90,
        Resistance: 68,
        Speed: 50,
        Coordination: 60,
        Agility: 50,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Husker.png",
        story: "Member of the half reptilian kind. Raised inside the palace walls he grew up like any other human along with Ziore.",
        magic: "",
        skill: "strenght x1.3 using axe and 1/5 chances of decreasing damage by 60%"
    },
    Gerald: {
        id: 6,
        name: "Gerald",
        Lv: 50,
        Stamina: 50,
        Strenght: 72,
        Resistance: 70,
        Speed: 90,
        Coordination: 56,
        Agility: 80,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Gerald.png",
        story: "Member of the royal guard and one of Ziore's closest friends. He gives his best to deserve his heritage.",
        magic: "",
        skill: "strenght x1.3 using sword"
    },
    Hans: {
        id: 7,
        name: "Hans",
        Lv: 50,
        Stamina: 80,
        Strenght: 61,
        Resistance: 62,
        Speed: 70,
        Coordination: 90,
        Agility: 90,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Hans.png",
        story: "Member of the royal guard and one of Ziore's closest friends. He was once a thief, but Ziore decided not to punish him, giving back a lot of loyalty.",
        magic: "",
        skill: "strenght x1.3 using lances"
    },
    Ziore: {
        id: 8,
        name: "Ziore",
        Lv: 90,
        Stamina: 90,
        Strenght: 97,
        Resistance: 86,
        Speed: 90,
        Coordination: 100,
        Agility: 90,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Ziore.png",
        story: "The current Prince of Coralia. He's been trough a lot and now has to face a new threat with a hard choice that will decide the future of his kingdom.",
        magic: "",
        skill: "never fails, and damage received is always lowered by 30%"
    },
    Raiku: {
        id: 9,
        name: "Raiku",
        Lv: 60,
        Stamina: 50,
        Strenght: 90,
        Resistance: 44,
        Speed: 98,
        Coordination: 88,
        Agility: 87,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Raiku.png",
        story: "A member of the half lizard kind. He trained many years with Regi, feeding his hatred against humans. He's very fast in the ground.",
        magic: "",
        skill: "has 1/2 chances of halving damage received"
    }, 
    Steve: {
        id: 10,
        name: "Steve",
        Lv: 60,
        Stamina: 50,
        Strenght: 90,
        Resistance: 44,
        Speed: 98,
        Coordination: 88,
        Agility: 87,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Steve.png",
        story: "A member of the half lizard kind and Raiku's best friend. very quiet, but has a deadly poison that will not hesitate to use against any enemy.",
        magic: "",
        skill: "has 1/3 chances of poisoning the target"
    }, 
    Sally: {
        id: 11,
        name: "Sally",
        Lv: 60,
        Stamina: 40,
        Strenght: 68,
        Resistance: 56,
        Speed: 120,
        Coordination: 90,
        Agility: 90,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Sally.png",
        story: "A member of the half lizard kind. Was the first one found by Regi. Has some misterious hypnotic powers that make battles difficult to her enemies.",
        magic: "",
        skill: "rises agility by 20%"
        
    },
    Kraine: {
        id: 12,
        name: "Kraine",
        Lv: 60,
        Stamina: 100,
        Strenght: 67,
        Resistance: 100,
        Speed: 40,
        Coordination: 60,
        Agility: 30,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Kraine.png",
        story: "A member of the half lizard kind. Was left behind by his family, and hopes one day to meet with them. He's very hard to undertand.",
        magic: "",
        skill: "if stamina is below 60%, defense rises by 30%"
    },
    Regi: {
        id: 13,
        name: "Regi",
        Lv: "??",
        Stamina: 1000,
        Strenght: 120,
        Resistance: 100,
        Speed: 130,
        Coordination: 80,
        Agility: 100,
        Energy: 13,
        Power: 0,
        Recover: 0,
        img: "Regi.png",
        story: "One of the kings of the now almost extinct half lizard kind. Known as the Dragon of Darkness, he lost everything in the war against humans and nothing will stop him from getting his revenge.",
        magic: "",
        skill: "inmune to magic attacks."
        
     },
    Rossie: {
        id: 14,
        name: "Rossie",
        Lv: 50,
        Stamina: 60,
        Strenght: 47,
        Resistance: 70,
        Speed: 80,
        Coordination: 100,
        Agility: 87,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Rossie.png",
        story: "Member of the royal guard and one of Ziore's closest friends. A skilled strategician that knows a lot about the war between lizards and humans.",
        magic: "",
        skill: "strenght x1.3 using bow and accuracy +10%"
     }, 
    Raymond: {
        id: 15,
        name: "Raymond",
        Lv: 45,
        Stamina: 64,
        Strenght: 81,
        Resistance: 66,
        Speed: 80,
        Coordination: 82,
        Agility: 75,
        Energy: 0,
        Power: 0,
        Recover: 0,
        img: "Raymond.png",
        story: "A half lizard that got lost a lot of time. His goal was to find his brother at all costs, Putting it above his own life.",
        magic: "",
        skill: "has 1/4 chances of neglecting any damage received by attacks"
    }, 
};


function get_Roster(){
    statDisplay.style.display = "none";
    mainmenu.style.display    = "none";
    Return.style.display      = "block"; 
    ChGrid.style.display      = "block";
    
}

CharacterSel.onclick = function() {
    get_Roster();
}



function display_Stats(character){
    ChGrid.style.display = "none";
    
    statDisplay.innerHTML = `
    <p class="select" onclick=get_Roster()>Back to character select</p>
    <img id="imgstat" src="./assets/images/${character.img}">
    <p id="namelist">${character.name}</p>
    <div id="story"><p>${character.story}</p></div>
    <div id="statlst">
    <p class="statlist">Level: ${character.Lv}</p>
    <p class="statlist">Stamina: ${character.Stamina}</p>
    <p class="statlist">Strenght: ${character.Strenght}</p>
    <p class="statlist">Resistance: ${character.Resistance}</p>
    <p class="statlist">Speed: ${character.Speed}</p>
    <p class="statlist">Coordination: ${character.Coordination}</p>
    <p class="statlist">Agility: ${character.Agility}</p>
    <p class="statlist">Energy: ${character.Energy}</p>
    </div>
    <div id="skillds"> Skill: ${character.skill}</div>
    `
    statDisplay.style.display = "block";
    
}

function stBattle(){
    mainmenu.style.display = "none";
    Return.style.display = "block";
    prep.style.display = "block";
    
    
}

function chPlayer(){
    prep.style.display = "none"
    ChGrid2.style.display = "block";
    x = 1;
}

function chRival(){
    prep.style.display = "none"
    ChGrid2.style.display = "block";
    x = 2;
}


function setPlayer(character){
    
    Player = character;
    ChGrid2.style.display = "none";
    prep.style.display = "block";
    playerpt.innerHTML = `<img class="chall" src="./assets/images/${character.img}"> `;
    playerpt2.innerHTML = `<img class="chall" src="./assets/images/${character.img}"> `;
    playerpt.style.transform = "scaleX(-1)";
    playerpt2.style.transform = "scaleX(-1)";
    
}

function setRival(character){
    Rival = character;
    ChGrid2.style.display = "none";
    prep.style.display = "block";
    rivalpt.innerHTML = `<img class="chall" src="./assets/images/${character.img}"> `;
    rivalpt2.innerHTML = `<img class="chall" src="./assets/images/${character.img}"> `;
}

function setChar(character){
        if (x == 1){
            setPlayer(character);
        }else{
            setRival(character);
        }
    }



BattleSel.onclick = function() {
    stBattle();
};



//in battle stats
var currentP = {
    hp:   0,
    str:  0,
    res:  0,
    spd:  0,
    cord: 0,
    agl:  0,
    nrg:  0,
    pwr:  0,
    rcv:  0,
    stt: 0
};
var currentR ={
    hp:   0,
    str:  0,
    res:  0,
    spd:  0,
    cord: 0,
    agl:  0,
    nrg:  0,
    pwr:  0,
    rcv:  0,
    stt: 0
};

function Statset(Player, Rival){
    currentP.name = Player.name;
    currentP.id   = Player.id;
    currentP.hp   = Player.Stamina;
    currentP.str  = Player.Strenght;
    currentP.res  = Player.Resistance;
    currentP.spd  = Player.Speed;
    currentP.cord = Player.Coordination;
    currentP.agl  = Player.Agility;
    currentP.nrg  = Player.Energy;
    currentP.pwr  = Player.Power;
    currentP.rcv  = Player.Recover;
    currentP.img  = Player.img
    currentP.stt  = 0;
    
    currentR.name = Rival.name;
    currentR.id   = Rival.id;
    currentR.hp   = Rival.Stamina;
    currentR.str  = Rival.Strenght;
    currentR.res  = Rival.Resistance;
    currentR.spd  = Rival.Speed;
    currentR.cord = Rival.Coordination;
    currentR.agl  = Rival.Agility;
    currentR.nrg  = Rival.Energy;
    currentR.pwr  = Rival.Power;
    currentR.rcv  = Rival.Recover;
    currentR.img  = Rival.img
    currentR.stt  = 0;
}

Start.onclick = function(){
    if (Player == "" || Rival == ""){
        startp.innerHTML = "At least two characters are necessary.";
    } else if (Player == Rival){
        startp.innerHTML = "No mirror battles allowed.";
    } else {
        
        
        prep.style.display = "none";
        Statset(Player, Rival);
        inventory = ["Potion", "Potion", "Potion"];
        
        document.getElementById("Playerhp").innerHTML   = 
        currentP.hp + "/" + Player.Stamina;
        document.getElementById("playername").innerHTML = Player.name;
        document.getElementById("playerlvl").innerHTML  = "Lvl: " + Player.Lv;
        
        document.getElementById("Rivalhp").innerHTML    =
        currentR.hp + "/" + Rival.Stamina;
        document.getElementById("rivalname").innerHTML  = Rival.name;
        document.getElementById("rivallvl").innerHTML   = "Lvl: " + Rival.Lv;
        
        console.log(currentP.hp, Player.Stamina);
        battlescr.style.display = "block";
        
        if(Player.magic == ""){
            bMagic.style.color = "#575757";
        }
        battlelog.innerHTML = "";
        
    };
    
}

//skills:
function Pskill(pers, target, current, enemy, acc, dmg){
    //offensive skills
    
    
    //Aqua: Ocean dance
    if (pers.id == 1){
        
        
        if (current.hp >= pers.Stamina){
            current.hp = pers.Stamina;
        } else {
            current.hp = Math.floor(current.hp * 1.1);
            currenthp.innerHTML = currentB.hp + "/" + target.Stamina;
            battlelog.innerHTML = battlelog.innerHTML + "<p> Aqua recovers 10% of her health </p>";
        }
    }

    //Kyle: Ink defense
    if (pers.id == 2){
        if (current.hp <= current.hp * 0.6){
            current.agl = pers.Agility;
            current.agl = current.agl * 1.2;
        }
        else{
            current.agl = pers.agl;
        }
    }
    //Roylan: Miracle
    if (pers.id == 3){
        let des = Math.floor(Math.random() * 2);
            if (des == 0){
                battlelog.innerHTML = battlelog.innerHTML + " <p> A miracle! Roylan made a special attack! </p>";
                damage = Math.floor(target.Stamina / 2);
                console.log("miracle's damage = "+ damage);
        } else{
            damage = damage;
        }
    }
    
    //Kaigune: One-eyed Rage
    if (pers.id == 4){
        accuracy = accuracy * 0.9;
        damage = damage * 1.4;
        
    }
    //Husker: Axe Fighter
    if (pers.id == 5){
        damage = damage * 1.3;
    }
    
    //Gerald: Swordfighter
    if (pers.id == 6){
        damage = damage * 1.3;
    }
    
    //Hans: Lance Knight
    if (pers.id == 7){
        damage = damage * 1.3;
    }
    
    //Ziore: Ocean's Legacy
    if (pers.id == 8){
        accuracy == 100;
    }
    //Steve: Poison
    if (pers.id == 10){
        let des = Math.floor(Math.random() * 4);  
        if (des == 1){
            if (target.stt == 0){
                target.stt = 1;
                battlelog.innerHTML = battlelog.innerHTML + "<p> " + enemy.name + " was poisoned! </p>";
            } else {
                        //nothing happens
            }
        }
    }
    //Sally: Illusion
    if (pers.id == 11){
            current.agl = pers.Agility;
            current.agl = current.agl * 1.2;
            console.log("raw agi: " + pers.Agility);
            console.log("agi: " + current.agl);
    }
    
    //Kraine: Tough Defense
    if (pers.id == 12){
        if (current.hp <= current.hp * 0.6){
            current.res = pers.resistance
            current.res = current.res * 1.3;
        }
    }
    
    //Rossie: Skilled Archer
    if (pers.id == 14){
        damage = damage * 1.3;
    }
} //END OF OFFENSIVE SKILLS
    
function Rskills(pers, target, current, enemy, acc, dmg){
    
    
    //Roylan's Miracle
    if (enemy.id == 3){
        let des = Math.floor(Math.random() * 2);
            if (des == 1){
                damage = damage * 0.2;
                battlelog.innerHTML = battlelog.innerHTML + " <p> Is a miracle! Roylan resisted the attack like a champ! </p>";
        } else{
            damage = damage;
        }
    }
        
    // Husker
    if (enemy.id == 5){
        let des = Math.floor(Math.random()* 5);
            if (des == 1){
                damage = damage * 0.6;
                battlelog.innerHTML = battlelog.innerHTML + "<p> Solid scales protected Husker from this attack! </p>";
                
        } else{
            damage = damage;
        }
    }
    
    //Ziore's Legacy
    if (enemy.id == 8){
        damage = damage * 0.7;
    }
    //Raiku's Flexibility
    if (enemy.id == 9){
        let des = Math.floor(Math.random()* 2);
            if (des == 1){
                damage = damage / 2;
                battlelog.innerHTML = battlelog.innerHTML + " <p> Raiku receive half the damage! </p>";
        }
    }
        
    //Regi: Dark Scales
    if (enemy.id == 13){
        if (atk == "magic"){
            damage = 0;
            battlelog.innerHTML = battlelog.innerHTML + "<p> Regi is not affected by magic! </p>";
            setTimeout(function() {current.hp == current.hp * 0.95;
                battlelog.innerHTML = battlelog.innerHTML + "<p>" + pers.name + "was damaged by Regi's dark aura! </p>";                     
            }, 1000);
        }
    }
        
    //Raymond: Wonder Guard
    if (enemy.id == 15){
        let des = Math.floor(Math.random()* 5);
            if (des == 1){
                damage = 0;
                battlelog.innerHTML = battlelog.innerHTML + "<p> Raymond blocked the attack perfectly! </p>";
        } else{
            damage = damage;
        }
    }//end if
        
}//END OF DEFFENSIVE SKILLS

function Accuracy(self, enemy){
    let ac = self.cord;
    let agi = enemy.agl;
    let lastc = 0;
    if (ac > (agi - 5) || ac < (agi + 5)){
        lastc = 70;
    } 
    
    //Decreasing percentage
    else if (ac > (agi - 10) && ac < (agi + 15)){
        lastc = 65;
    }
    else if (ac > (agi - 15) && ac < (agi + 20)){
        lastc = 60;
    }
    else if (ac > (agi - 20) && ac <(agi + 25)){
        lastc = 55;
    }
    else if (ac > (agi - 25) && ac < (agi + 30)){
        lastc = 50;
    }
    else if (ac > (agi - 30) && ac < (agi + 35)){
        lastc = 45;
    }
    else if (ac > (agi - 35) && ac < (agi + 40)){
        lastc = 40;
    }
    else if (ac > (agi - 45) && ac < (agi + 50)){
        lastc = 35;
    }
    
    //Increasing percentage
    if (ac > (agi + 10) && ac < (agi + 15)){
        lastc = 75;
    }
    else if (ac > (agi + 15) && ac < (agi + 20)){
        lastc = 77;
    }
    else if (ac > (agi + 20) && ac <(agi + 25)){
        lastc = 80;
    }
    else if (ac > (agi + 25) && ac < (agi + 30)){
        lastc = 83;
    }
    else if (ac > (agi + 30) && ac < (agi + 35)){
        lastc = 87;
    }
    else if (ac > (agi + 35) && ac < (agi + 40)){
        lastc = 92;
    }
    else if (ac > (agi + 45) && ac < (agi + 50)){
        lastc = 99;
    }
    return lastc;
}

var damage, accuracy;
var iP = 0;
var iR = 0;

pcbar.value = 100;
rcbar.value = 100;

function magiclst(mag){
    if (mag == "Water I"){
        bas = 5;
    } 
    else if (mag == "Water II"){
        bas = 10;
    }
    else if (mag == "Water III"){
        bas = 15;
    }
}

function itemlst(name, cn){
    
    if (name == "Potion"){
        dd = `<div class="select" onclick= "itemfn(1, ${cn})"> Potion </div>`;
        
    }
    return dd;
};

function itemfn(ids, nmb){
    if (ids == 1){
        console.log(currentP.hp);
        currentP.hp = Math.floor(currentP.hp * 1.5);
        
        if (currentP.hp > Player.Stamina){
            currentP.hp = Player.Stamina;
        }
        
        health = Math.floor((currentP.hp / Player.Stamina) * 100);
        if(health < 0){
            health = 0;
            
        }
        if(health > Player.Stamina){
            health = 100;
        }
        console.log(health)
        
        pcbar.style.width = health + "%";
        if(currentP.hp <= (Player.Stamina * 0.5) && currentP.hp > (Player.Stamina * 0.3)){
            pcbar.style.backgroundColor = "#e6c700";
        } else if ((currentP.hp <= Player.Stamina * 0.3)){
            pcbar.style.backgroundColor = "#d40e00";
        } else if (currentB.hp > (Player.Stamina * 0.5)){
            pcbar.style.backgroundColor = "#007f00";
        }
        
        Playerhp.innerHTML = currentP.hp + "/" + Player.Stamina;
        battlelog.innerHTML = battlelog.innerHTML + `<p>`+ Player.name + ` restored 50% of health with potion </p>`;
        battlelog.scrollTop = battlelog.scrollHeight;
        setTimeout(function() {Attack(currentR, currentP, Rival, Player, Playerhp, pcbar);}, 1000);
    }
    inventory.shift(nmb);
}

//damage and accuracy function
function Attack(currentA, currentB, pers, target, currenthp, bar){
    t = 1;
    extrac.style.display = "none";
    extrac.innerHTML     = "";
    
    //CurrentA refers to attacker, CurrentB refers to rival
    if(currentA.hp > 0){
    atk = "normal";
    accuracy = 0;
    damage = 0 ; //damage cleaner
    battlelog.innerHTML = battlelog.innerHTML + "<p>" + pers.name + " attacked! <p>";
    accuracy = Accuracy(currentP, currentR);
    var hit  = Math.floor(Math.random() * 101);
    if (currentA.id == 8){
        accuracy = 100;
    };
    battlelog.scrollTop = battlelog.scrollHeight;
    //set the battle log to bottom
    
    
    //CurrentA refers to attacker, CurrentB refers to rival
    //Check accuracy
    if (hit <= accuracy){
        var health = 0;
        damage = 0;
        var ps = "";
        var rs = "";
        
        
        damage   = Math.floor(currentA.str - currentB.res) + 5;
        if (damage <= 5){
            damage = 5;
        }
        console.log("Damage before skills: " + currentA.str + " - " + currentB.res + " + 5 = "+ damage);
        
        
        
        //checking offensive skills
        setTimeout(function() {Pskill(pers, target, currentA, currentB, accuracy, damage);
        battlelog.scrollTop = battlelog.scrollHeight;
        if (damage <= 5){
            damage = 5;
        }
        }, 1000);
        
        console.log("Damage after main skill: " + damage);
        
        
        //checking deffensive skills
        setTimeout(function() {Rskills(pers, target, currentA, currentB, accuracy, damage);
        damage = Math.floor(damage);
        battlelog.innerHTML = battlelog.innerHTML + rs;
        battlelog.scrollTop = battlelog.scrollHeight;
        
        if (damage <= 0){
            damage = 5;
        }
        
        
        console.log("Damage after rival skill: " + damage);
        
        currentB.hp = currentB.hp - damage;
        console.log(target.name + " received damage: " + damage);
        }, 1500);
        
        setTimeout(function() {battlelog.innerHTML = battlelog.innerHTML + "<p>"+ target.name+ " received "+ damage + " damage! </p>";
        battlelog.scrollTop = battlelog.scrollHeight;
        
                               
        health = Math.floor((currentB.hp / target.Stamina) * 100);
        if(health < 0){
            health = 0;
            
        }
        console.log(health)
        
        if(currentB.id == Player.id){
            pcbar.style.width = health + "%";
            if(currentB.hp <= (Player.Stamina * 0.5) && currentB.hp > (Player.Stamina * 0.3)){
                pcbar.style.backgroundColor = "#e6c700";
            } else if ((currentB.hp <= Player.Stamina * 0.3)){
                pcbar.style.backgroundColor = "#d40e00";
            }
            else if (currentB.hp > (Player.Stamina * 0.5)){
            pcbar.style.backgroundColor = "#007f00";
            }
        } 
        
        else if (currentB.id == Rival.id){
            rcbar.style.width = health + "%";
            if(currentB.hp <= (Rival.Stamina * 0.5) && currentB.hp > (Rival.Stamina * 0.3)){
                rcbar.style.backgroundColor = "#e6c700";
            } else if (currentB.hp <= (Rival.Stamina * 0.3)){
                rcbar.style.backgroundColor = "#d40e00";
            }
            else if (currentB.hp > (Rival.Stamina * 0.5)){
                rcbar.style.backgroundColor = "#007f00";
            }
        }
        
        if (currentB.hp <= 0){
            currentB.hp = 0
            currenthp.innerHTML = currentB.hp + "/" + target.Stamina;
            setTimeout(function() {battlescr.style.display = "none";
            setWinner(currentA);
            resultsc.style.display = "block";
            var hhh = false;
            }, 2500);
            
        } 
        else {
            currenthp.innerHTML = currentB.hp + "/" + target.Stamina;
    
            if(currentB.stt == 1){
            currentB.hp = currentB.hp * 0.94;
            battlelog.scrollTop = battlelog.scrollHeight;
            }
        }
        }, 2500);
        
         
        } //END OF TRUE ATTACK
        else {
        setTimeout(function() {battlelog.innerHTML = battlelog.innerHTML + "<p>...but missed! </p>";
        battlelog.scrollTop = battlelog.scrollHeight;}, 3000);
        }
        setTimeout(function() {if (currentA.id == Player.id){
            Attack(currentB, currentA, Rival, Player, Playerhp, pcbar);
                          
        } else {
            t = 0;
        }
        }, 4000);    
        
    
    
    mag = "";
    bas = 0;
} //end of prime function


function Magic(currentA, currentB, pers, target, currenthp, bar, mag){
    bAtk.disabled   = true;
    bMagic.disabled = true;
    bItems.disabled = true;
    Wait.disabled   = true;
    //CurrentA refers to attacker, CurrentB refers to rival
    extrac.style.display = "none";
    extrac.innerHTML     = "";
    
    magiclst(mag);
    
    atk = "magic";
    accuracy = 0;
    damage = 0 ; //damage cleaner
    battlelog.innerHTML = battlelog.innerHTML + "<p>" + pers.name + " attacked using magic! <p>";
    accuracy = Accuracy(currentP, currentR);
    var hit  = Math.floor(Math.random() * 101);
    if (currentB.id == 8){
        accuracy = 100;
    };
    battlelog.scrollTop = battlelog.scrollHeight;
    //set the battle log to bottom
    
    
    //CurrentA refers to attacker, CurrentB refers to rival
    //Check accuracy
    if (hit <= accuracy){
        var health = 0;
        damage = 0;
        var ps = "";
        var rs = "";
        
        
        damage   = Math.floor(((Player.Power / 10) * bas) - currentB.res) + 5;
        if (damage <= 5){
            damage = 5;
        }
        console.log("Damage before skills: " + Player.Power +"/ 10 * "+ bas + " - "+ currentB.res);
        
        
        
        //checking offensive skills
        setTimeout(function() {Pskill(pers, target, currentA, currentB, accuracy, damage);
        battlelog.scrollTop = battlelog.scrollHeight;
        if (damage <= 5){
            damage = 5;
        }
        }, 1000);
        
        console.log("Damage after main skill: " + damage);
        
        
        //checking deffensive skills
        setTimeout(function() {Rskills(pers, target, currentA, currentB, accuracy, damage);
        damage = Math.floor(damage);
        battlelog.innerHTML = battlelog.innerHTML + rs;
        battlelog.scrollTop = battlelog.scrollHeight;
        
        if (damage <= 5){
            damage = 5;
        }
        
        
        console.log("Damage after rival skill: " + damage);
        
        currentB.hp = currentB.hp - damage;
        console.log(target.name + " received damage: " + damage);
        }, 1500);
        
        setTimeout(function() {battlelog.innerHTML = battlelog.innerHTML + "<p>"+ target.name+ " received "+ damage + " damage! </p>";
        battlelog.scrollTop = battlelog.scrollHeight;
        
                               
        health = Math.floor((currentB.hp / target.Stamina) * 100);
        if(health < 0){
            health = 0;
            
        }
        console.log(health)
        
        if(currentB.id == Player.id){
            pcbar.style.width = health + "%";
            if(currentB.hp <= (Player.Stamina * 0.5) && currentB.hp > (Player.Stamina * 0.3)){
                pcbar.style.backgroundColor = "#e6c700";
            } else if ((currentB.hp <= Player.Stamina * 0.3)){
                pcbar.style.backgroundColor = "#d40e00";
            } else if (currentB.hp > (Player.Stamina * 0.5)){
                pcbar.style.backgroundColor = "#007f00";
            }
        } 
        
        else if (currentB.id == Rival.id){
            rcbar.style.width = health + "%";
            if(currentB.hp <= (Rival.Stamina * 0.5) && currentB.hp > (Rival.Stamina * 0.3)){
                rcbar.style.backgroundColor = "#e6c700";
            } else if (currentB.hp <= (Rival.Stamina * 0.3)){
                rcbar.style.backgroundColor = "#007f00";
            }
            else if (currentB.hp > (Rival.Stamina * 0.5)){
                rcbar.style.backgroundColor = "#007f00";
            }
        }
        
        if (currentB.hp <= 0){
            currentB.hp = 0
            currenthp.innerHTML = currentB.hp + "/" + target.Stamina;
            
            setTimeout(function() {
            battlescr.style.display = "none";
            setWinner(currentA);
            resultsc.style.display = "block";
            }, 2500);
            
        } 
        else {
            currenthp.innerHTML = currentB.hp + "/" + target.Stamina;
    
            if(currentB.stt == 1){
            currentB.hp = currentB.hp * 0.94;
            battlelog.scrollTop = battlelog.scrollHeight;
            }
        }
        }, 2500);
        
         
        } //END OF TRUE ATTACK
        else {
        setTimeout(function() {battlelog.innerHTML = battlelog.innerHTML + "<p>...but missed! </p>";
        battlelog.scrollTop = battlelog.scrollHeight;}, 3000);
        }
    if (currentA.id == Player.id || currentA.hp > 0){
        setTimeout(function() {Attack(currentR, currentP, Rival, Player, Playerhp, pcbar);}, 4500);
    } else {
        bAtk.disabled   = false;
        bMagic.disabled = false;
        bItems.disabled = false;
        Wait.disabled   = false;
    }
}
}




function mAtk(mag){
    Magic(currentP, currentR, Player, Rival, Rivalhp, rcbar, mag);
}




bAtk.onclick = function(){
    if (t == 0){
    Playerhp = document.getElementById("Playerhp");
    Rivalhp  =  document.getElementById("Rivalhp");
    Attack(currentP, currentR, Player, Rival, Rivalhp, rcbar, t);    
        
    } else {
        
        var yyy = 1;
    }

    
}


bMagic.onclick = function(){
    
    var t = 0;
    Playerhp = document.getElementById("Playerhp");
    Rivalhp  = document.getElementById("Rivalhp");
    
    if (Player.magic == ""){}
    else {
    
    
    extrac.innerHTML = `  
    <div class="select" onclick= mAtk(Player.magic[0])> ${Player.magic[0]} </div>
    <div class="select" onclick= mAtk(Player.magic[1])> ${Player.magic[1]} </div>
    <div class="select" onclick= mAtk(Player.magic[2])> ${Player.magic[2]} </div>`;
    extrac.style.display = "block";   
       
    }
    
    
}

bItems.onclick = function(){
    extrac.innerHTML = "";
    for (var w = 0; w < inventory.length; w++){
        var dd = itemlst(inventory[w], w);
        extrac.innerHTML = extrac.innerHTML + dd;
    }
    extrac.style.display = "block";
}

Wait.onclick = function(){
    "<p>" + currentP.name + " waited.. </p>";
    setTimeout(function() {Attack(currentR, currentP, Rival, Player, Playerhp, pcbar);}, 1500);
}


function setWinner(currentH){
    winner = currentH;
    console.log(currentH);
    if (winner.name == Player.name){
        wint.style.color = "#007f00";
        wint.innerHTML   = "Victory!"
    } else if (winner.name == Rival.name){
        wint.style.color = "#d40e00";
        wint.innerHTML   = "Defeat..";
    }
    
    wincard.innerHTML  = `<img class="chall" src="./assets/images/${winner.img}">`;
    rdesc.innerHTML = winner.name + " won!";
    
    console.log(winner.img);
}
