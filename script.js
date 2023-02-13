let empty = true

//code taken from class example
//function that will display message in the console
function displayLog(msg){
    console.log(msg); 
}

/* function that:
    1. targets the body
    2. creates tag elements inside the body 
    3. puts text inside the created element
    4. adds tag and inner text onto the browser through the HTML*/

function displayInPage(msg, tagType){
    const page = document.querySelector('body');
    let itemToAdd = document.createElement(tagType);
    itemToAdd.innerText = msg;
    page.appendChild(itemToAdd);
}

//function that, when called, will put template literal on both browser and console
function displayText(msg, tagType){
    displayInPage(msg, tagType); 
    displayLog(msg);
}

//START

//Title of Task
displayText("Pouring Out a Glass of Water","h1");

//Initial Set Up
displayText("Glass of water in front on the Table", "p");
displayText("Both arms palms down on the Table", "p");

//Prepare arm for contact with glass
function arm(bodyPart, action, degree, direction){
    displayText(`Take your ${bodyPart} and ${action} ${degree} ${direction}`,"p");
}

//parameters
arm("right wrist", "rotate", "90 degrees", "clockwise")
arm("right shoulder", "rotate", "45 degrees", "counterclockwise")

//Hold the cup
function holdCup(action, bodyPart, strength, powerLevel){
    displayText(`${bodyPart} around bottle, ${action} with a ${strength} of ${powerLevel}`)
}
//parameters
holdCup("squeeze", "Close hand", "grip strength", "25%")

//Pour Water
function pourWater(action, bodyPart, direction, degree,){
    displayText(`${action} ${bodyPart} ${direction} ${degree}`, "p")
}
//parameters
pourWater("Lift", "right elbow", "vertically up", "25 degrees");
pourWater("Rotate", "right wrist", "counterclockwise", "100 degrees");

//ifelse statement to determine IF we should keep pouring ELSE stop
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
//parameters
handOnGlass("Rotate", "right wrist", "100 degrees", "clockwise");
handOnGlass("Move", "right elbow", "25 degrees", "vertically down");
handOnGlass("Open", "right hand", "", "");
handOnGlass("Rotate", "right wrist", "90 degrees", "counterclockwise");

displayText("Back to starting position", "p");
//END




