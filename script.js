const avatarName = prompt(`You are a half-elf always seeking a new adventure.`
                            +` What would you like to be called? `);
const weapons = ['sickle','warhammer', 'mace', 'greatsword'];
let usersChoice = null;

const chooseWeapon = () =>{
    usersWeapon = prompt(`Weapons: ${weapons.toString()}\nChoose a weapon!`);

    if(weapons.includes(usersWeapon)){
        return usersWeapon;
    }else{
        usersWeapon = prompt(`Please choose from one of the following weapons: ${weapons.toString()}`);
        chooseWeapon();
    }
    
}

const initialChoice = () =>{
    if(usersChoice === "bar"){
        bar();
    }else if(usersChoice === "path"){
        doNotEnter();
    }else{
        usersChoice = prompt(`Please enter 'bar' or 'path'`);
        initialChoice();
    }
}

const bar = () =>{
    usersChoice = prompt(`You enter the bar and immediately meet two rogues.`
    +`  You are having a great time drinking ale and sharing laughs.`
    +`  Uh oh! One of the rogues just got caught trying to steal an Orc's coins!`
    +`  A bar fight is about to start! Are you going to fight or run?`);

    barChoice();
}

const barChoice =()=>{
    if(usersChoice === "fight"){
        fight();
    }else if(usersChoice === "run"){
        run();
    }else{
        usersChoice = prompt(`Please enter 'fight' or 'run'`);
        barChoice();  
    }
}

const fight =()=>{
    usersChoice = prompt(`Everything got crazy so fast you did not get a chance to pull out your weapon.`
                                +`  You get knocked out by of the rogues who confused you with someone else.`
                                +`  A druid pulls you out of the bar and takes you to a tent behind the bar.` 
                                +`  She gives you water and cleans up your wounds.  You tell her about your `
                                +`  love for adventures and her face lights up.  She loves adventures too.`
                                +`  She asks if you would like to join her on her next adventure?(y/n)`);

    fightChoice();
}

const fightChoice =()=>{
    if(usersChoice === 'y'){
        alert(`You have made a new friend! Your next adventure will be a great one`);
        again();
    }else if(usersChoice === 'n'){
        alert(`You leave the tent and wonder off to who knows where?`);
        again();
    }else{
        usersChoice = prompt(`Please enter 'y' or 'n'`);
        fightChoice();  
    }   
}

const run = () =>{
    usersChoice = prompt(`You run frantically out of the bar without realizing where you are headed.`
    +`  Once you stop you noticed an odd shop infront of you.  A wizard comes out of the shop.`
    +`  He asks you if you would like to see his potions.(y/n)`);

    runChoice();
}

const runChoice = () =>{
    if(usersChoice === 'y'){
        usersChoice = prompt(`You and the Wizard enteer the shop. He shows you his top 4 potions.`
        +`  A green potion for healing, A yellow potion for stealth, and two blue potions.`
        +`  "Uhhh... the light blue potion is for strength. I think. I really shouldn't make potions that look so alike.`
        +`  Very well which potion would you like? (green/yellow/light blue/dark blue)` );
        potionChoice();
    }else if(usersChoice === 'n'){
        alert(`You refuse to go into the shop with the wizard.  He is offended by your rejection and zaps you into dust.`);
        again();
    }else{
        usersChoice = prompt(`Please enter 'y' or 'n'`);
        runChoice();  
    }    
}

const potionChoice = () =>{
    switch(usersChoice){
        case 'yellow':
            alert(`You put your new potion in your pack and return to the bar.`
            +`  You take the potion and effectively steal everyone's coins.  You're now a rich adventure!`);
            again();
            break;
        
        case 'green':
            alert('You put your new potion in your pack and head to that fenced path you saw earlier.'
            + '  You fell invincible and ready for any challenge! Good Luck!');
            again();
            break;
        
        case 'light blue':
            alert('You immediately take the potion after exiting the shop.'
            +'  You feel weird.  Must be the potion working.  Uh oh!!'
            +`  The wizard gave you the wrong potion! You've turned into a frog!`
            +`  Hop your way onto a new adventure and remember not to trust the first wizard you encounter.`);
            again();
            break;
            
        case 'dark blue':
            alert('You immediately take the potion after exiting the shop.'
            +'  You feel weird.  Must be the potion working.  Wow!!'
            +`  Your muscles rip through your clothes.`
            +`  I guess your next adventure should be shopping`);
            again();
            break;
        default:
            usersChoice = prompt(`Please enter one of the following: 'green', 'yellow', 'light blue', or 'dark blue'`);
            potionChoice();
        
    }
}


const doNotEnter = () =>{
    usersChoice = prompt(`You're feeling dangerous today.  You hop the fence but don't get very far.`
                        +`  A goblin attacks you with its spiked chain.  You dodge his attack with your amazing reflexes.`
                        +`  You strike him with your ${weapon}.  Phew! That was close.  Would you like to continue or turn around?`
                        +` (continue/turn around)`);
    pathChoice();
}

const pathChoice =()=>{
    if(usersChoice === 'continue'){
        continuePath();
    }else if(usersChoice === 'turn around'){
        alert('You decide to live one more day and turn around.  Maybe today is not the best day for danger.');
        again();
    }else{
        usersChoice = prompt(`Please enter 'continue' or 'turn around'`);
    }
}

const continuePath = () =>{
usersChoice = prompt(`You continue on the path feeling invincible after defeating the goblin.`
                +`  You come to a fork in the road.  Path 1 has a sign that says 'All day, all you can eat buffet!'`
                +`  Path 2 has a sign that says 'He who enters shall never exit'`
                +`  Which path would you like to take? (1 or 2)`);
continueChoice();
}

const continueChoice = () =>{
    if(parseInt(usersChoice) === 1){
        alert(`You are starving! Plus that other path didn't sound to inviting.`
                +`  You skip along the path with excitement, when suddenly an enormous hill giant grabs you.`
                +`  Your ${weapon} falls to the ground.  You are no match for the giant.  It now dawns on you...`
                +`  The buffet is not for you but for the giant and you just became the next thing on his menu.`);
                again();
    }else if(parseInt(usersChoice) === 2){
        let randNum = Math.floor(Math.random()*10)+1;

        alert(`You are fearless.  There is no one who can defeat you!`
                +`  You strut through the path and encounter a blood thirsty vampire.`
                +`  Good thing you are a garlic fanatic!  you coat your ${weapon} and launch it at the vampire...`);

        if(randNum >=5){
            alert(` Your ${weapon} strikes the vampire and he shrivels up.  You are the greatest adventure of all time!`);
            again();
        }else if(randNum < 5 && randNum > 0){
            alert(`You missed!  The vampire attacks you and drinks your blood.  Guess you aren't so invincible afer all.`);
            again();
        }else{
            alert('Computing Error!');
        }
    }else{
        usersChoice = prompt(`Please enter '1' or '2'`);
        continueChoice();
    }
}

const again = () =>{
    usersChoice = prompt(`Would you like to play again? (y/n)`);
    againChoice();
}

const againChoice = () =>{
    if(usersChoice === 'y'){
        repeat = true;
    }else if(usersChoice === 'n'){
        repeat = false;
    }else{
        usersChoice = prompt(`Please enter 'y' or 'n' `);
        againChoice();
    }
}


let repeat = false;

do{
const weapon = chooseWeapon();
usersChoice = prompt(`You are on the search for your next adventure.  You have found a village you hadn't seen before.`
                    +`  You see a bar up ahead and a fenced path with a sign that says "DO NOT ENTER!"`
                    +`  Where would you like to go?(bar/path)`);
initialChoice(); }while(repeat === true);
