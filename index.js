// getting a response in mocha that is timing out, therefore testing isnt working.

// crafting my solution and then comparing to master copy. 

//personal solution
let mainNode = document.getElementById('main');
mainNode.remove();

//master solution 
document.querySelector("main#main").remove();


// creating a new h1 header as h1#victory
const newHeader = document.createElement('h1');
newHeader.id ="victory";

newHeader.innerHTML = "Ian is the champion";

// why newHeader.className = "Victory"; ? defining the class name to victory is my guess. 