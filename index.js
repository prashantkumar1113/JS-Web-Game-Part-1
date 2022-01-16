function newImage(src, left, bottom) {
    let element = document.createElement("img");
    element.src = src;
    element.style.position = "fixed";
    element.style.left = left;
    element.style.bottom = bottom;
    document.body.append(element);
    return element; //returns the element if needed
}

function newItem(src, position, left, bottom) {
    let element = newImage(src, position, left, bottom);

    element.addEventListener("dblclick", function () {
        element.remove();
    });
    return element; //returns the element if needed
}

//Background
for (let i = 0; i < window.innerWidth; i = i + 100) {
    let left = i + "px";
    newImage("assets/grass.png", left, "0");
    newImage("assets/grass.png", left, "100px");
    newImage("assets/grass.png", left, "200px");
    newImage("assets/grass.png", left, "300px");
    newImage("assets/grass.png", left, "400px");
}

//New Images
newImage("assets/green-character.gif", "100px", "100px");
newImage("assets/pine-tree.png", "450px", "200px");
newImage("assets/tree.png", "200px", "300px");
newImage("assets/pillar.png", "350px", "100px");
newImage("assets/crate.png", "150px", "200px");
newImage("assets/well.png", "500px", "425px");

//New Items
newItem("assets/sword.png", "500px", "405px");
newItem("assets/sheild.png", "165px", "185px");
newItem("assets/staff.png", "600px", "100px");
