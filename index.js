function newImage(src, position, left, bottom) {
    let element = document.createElement("img");
    element.src = src;
    element.style.position = position;
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
    newImage("assets/grass.png", "fixed", left, "0");
    newImage("assets/grass.png", "fixed", left, "100px");
    newImage("assets/grass.png", "fixed", left, "200px");
    newImage("assets/grass.png", "fixed", left, "300px");
    newImage("assets/grass.png", "fixed", left, "400px");
}

//New Images
newImage("assets/green-character.gif", "fixed", "100px", "100px");
newImage("assets/pine-tree.png", "fixed", "450px", "200px");
newImage("assets/tree.png", "fixed", "200px", "300px");
newImage("assets/pillar.png", "fixed", "350px", "100px");
newImage("assets/crate.png", "fixed", "150px", "200px");
newImage("assets/well.png", "fixed", "500px", "425px");

//New Items
newItem("assets/sword.png", "fixed", "500px", "405px");
newItem("assets/sheild.png", "fixed", "165px", "185px");
newItem("assets/staff.png", "fixed", "600px", "100px");
