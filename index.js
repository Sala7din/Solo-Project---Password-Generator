const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("field1")  
let password2 = document.getElementById("field2")   

function generatePasswords() {

    for(let i = 0; i < 15; i++){
        randomNum = Math.floor(Math.random() * length.characters)
        // let randomPassword = characters[randomNum]
        // characters[randomNum] += randomPassword
    }
  password1.textContent = randomPassword  
  password2.textContent = randomPassword
    
}

