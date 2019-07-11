//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    // "pizza",
    // "burgers",
    // "rice and beans",
    // "lasagna",
    // "macaroni and cheese",
    // "baked potatoes"
    "beef patty",
    "chicken",
    "spaghetti",
    "ice cream",
    "french fries",
    "sandwich"
];
const students = [
    // "Bob",
    // "Martin",
    // "Danny",
    // "Mahdi",
    // "Harry",
    // "Sean",
    // "Robert"
    "Izzy",
    "Joey",
    "Aaron",
    "Anthony",
    "Max",
    "Sam"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function randomNumber(){
    console.log(Math.random()*22)
}
randomNumber()

function randomLetter(){
    console.log(alphabet[Math.floor(Math.random() * alphabet.length)])
}
randomLetter()

function randomFood(){
    console.log(foods[Math.floor(Math.random() * foods.length)])
}
randomFood()

function randomStudent(){
    console.log(students[Math.floor(Math.random() * students.length)])
}
randomStudent()

function randomGroup(){
    let alpha1 = alphabet[Math.floor(Math.random() * alphabet.length)];
    let alpha2 = alphabet[Math.floor(Math.random() * alphabet.length)];
    let alpha3 = alphabet[Math.floor(Math.random() * alphabet.length)];
    if(alpha1==alpha2 || alpha1==alpha3){
        alpha1 = alphabet[Math.floor(Math.random() * alphabet.length)];
    } else if(alpha2==alpha3){
        alpha2 = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    console.log(alpha1);
    console.log(alpha2);
    console.log(alpha3);
}
randomGroup()