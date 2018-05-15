
//word guesser

function wordGuess(wordInput){
        //declaring variable of array list
         var wordElement = ["Chika","Jenny","Val","Nonso","Ibe","Lucia","Uche"]; //word guess list
        //declaring another variable
         var info;
            for(var i=0; i<=wordElement.length-1; i++){
            if(wordInput == wordElement[i]){
                
                info = "Yah!, you guessed right.";
                break;
            }
            else {
                info = "oops! you guessed wrong, try again";
            }
        }
        console.log(info);

    }
wordGuess("Chika");
wordGuess("Amaka");
wordGuess("Lucia");
wordGuess("Nonso");

//I guess you are wrong, lets see...