// const errorHandler = require("./errorHandler.js")
const {errorHandler, two} = require("./errorHandler.js")
// import something from "./"

async function getData(){
    try{
        undefined.find();

        const emailError = new Error("Email already exists!");
        throw emailError;
    }
    catch(error){
        errorHandler(error)
    }
}



getData();
console.log('done')