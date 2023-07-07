function errorHandler(error){
    const {name, message, stack} = error;
    // console.log(message);
    
    
    console.log("Internal server error!");
}

// module.exports = errorHandler;

module.exports.two = function two(){
    console.log('two');
}

// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

// module.exports = {
//     errorHandler: errorHandler,
//     two
// }

// export errorHandler
// export default two