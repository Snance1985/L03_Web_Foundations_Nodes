//appendChild
function append(){
    // create a new element
    var newtag = document.createElement('p');
    // add content to the new element
    newtag.innerHTML = "I am a new node created using createElement and appendChild";
    // place it in our document
    document.getElementById('appendid').appendChild(newtag);
}

//insertBefore
function insert(){
    //identify the parent that our element will go in
    var list = document.getElementById('newlist');
    //create a new element
    var newitem = document.createElement('li');
    //add content to our element
    newitem.innerHTML = "New List Item 1.5";
    //place it in our document
    list.insertBefore(newitem, list.children[1]);
}

//replaceChild
function replace() {
    var itemList = document.getElementById("myList");
    var newElement = document.createElement("li");
    newElement.innerHTML= "This is a NEW element- Bubble Tea";
    
    itemList.replaceChild(newElement, itemList.children[0]);
}

//removeChild
function removeCh(){
    var coffeeList = document.getElementById("myList");
      
    coffeeList.removeChild(coffeeList.children[0]);
}

//remove()
function remove(){
    var thirdItem = document.getElementById("thirdItem");
    thirdItem.remove();
}


