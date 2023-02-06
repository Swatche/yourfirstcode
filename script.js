let empty = true

function displayLog(msg){
    console.log(msg); 
}

function displayInPage(msg, tagType){
    const page = document.querySelector('body');
    let itemToAdd = document.createElement(tagType);
    itemToAdd.innerText = msg;
    page.appendChild(itemToAdd);
}

function displayText(msg, tagType){
    displayInPage(msg, tagType); 
    displayLog(msg);
}

//Sit Down
displayText("Pouring Out a Glass of Water","h1");
displayText("Glass of water in front on the Table", "p");
displayText("Both arms palms down on the Table", "p");

//Prepare arm for contact with glass
function arm(bodyPart, action, degree, direction){
    displayText(`Take your ${bodyPart} and ${action} ${degree} ${direction}`,"p");
}

arm("right wrist", "rotate", "90 degrees", "clockwise")
arm("right shoulder", "rotate", "45 degrees", "counterclockwise")

//Hold the cup
function holdCup(action, bodyPart, strength, powerLevel){
    displayText(`${bodyPart} around bottle, ${action} with a ${strength} of ${powerLevel}`)
}

holdCup("close hand", "Squeeze", "grip strength", "25%")

//Pour Water
function pourWater(action, bodyPart, direction, degree,){
    displayText(`${action} ${bodyPart} ${direction} ${degree}`, "p")
}

pourWater("Lift", "right elbow", "vertically up", "25 degrees");
pourWater("Rotate", "right wrist", "counterclockwise", "100 degrees");

function emptyOrNot(){
    if(empty == true){
        displayText("The cup is empty");
    } else {
        displayText("Keep pouring");
    }
}

emptyOrNot()

//Place Glass back on Table
function handOnGlass(action, bodyPart, direction, degree,){
    displayText(`${action} ${bodyPart} ${direction} ${degree}`, "p")
}

handOnGlass("Rotate", "right wrist", "100 degrees", "clockwise");
handOnGlass("Move", "right elbow", "25 degrees", "vertically down");
handOnGlass("Open", "right hand", "", "");
handOnGlass("Rotate", "right wrist", "90 degrees", "counterclockwise");

displayText("Back to starting position", "p");
//END




