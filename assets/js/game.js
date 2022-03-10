var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this fight? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        enemyHealth = enemyHealth - playerAttack
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //end 

        //enemy attack
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyName + " attacked " + playerAttack + ". " + playerName + " still has " + playerHealth + " health remaining."
        );
        //end

        //check player health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        //end 

    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        window.alert(playerName + " has chosen to skip the fight!");
         //ask player is they want to skip
         var confirmSkip = window.confirm("Are you sure you want to quit?");

         //if true, leave fight
         if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!")
            //end

         //sub from player money
            playerMoney = playerMoney - 2;
            console.log(playerMoney);
         //end
         }
         
         //if false, run fight()
         else {
             fight();
         }
    } else {
        window.alert("You need to choose a valid option. Try again");
    }
        
    
};


fight();