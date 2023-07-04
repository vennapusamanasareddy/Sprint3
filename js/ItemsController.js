function addItem() {
    var nameInput = document.getElementById("newItemNameInput");
    var descriptionInput = document.getElementById("newItemkDescription");
    var imageUrlInput = document.getElementById("newItemImageUrl");
    
    var name = nameInput.value;
    var description = descriptionInput.value;
    var image = imageUrlInput.value;
    
    var itemList = document.getElementById("itemList");
    var listItem = document.createElement("li");
    
    listItem.textContent = name + " - " + description + " " + image;
    
    itemList.appendChild(listItem);
    
    nameInput.value = "";
    descriptionInput.value = "";
    imageUrlInput.value ="";
}