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

newImage("assets/green-character.gif", "fixed", "100px", "100px");

newImage("assets/pine-tree.png", "fixed", "450px", "200px");

newImage("assets/tree.png", "fixed", "200px", "300px");

newImage("assets/pillar.png", "fixed", "350px", "100px");

newImage("assets/crate.png", "fixed", "150px", "200px");

newImage("assets/well.png", "fixed", "500px", "425px");

newItem("assets/sword.png", "fixed", "500px", "405px");

newItem("assets/sheild.png", "fixed", "165px", "185px");

newItem("assets/staff.png", "fixed", "600px", "100px");
