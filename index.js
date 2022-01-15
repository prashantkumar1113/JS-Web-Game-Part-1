function addImgToScreen(src, position, left, bottom) {
    let element = document.createElement("img");
    element.src = src;
    element.style.position = position;
    element.style.left = left;
    element.style.bottom = bottom;
    // document.body.append(element);
    return element;
}

let greenChar = addImgToScreen(
    "assets/green-character.gif",
    "fixed",
    "100px",
    "100px"
);
document.body.append(greenChar);

let pineTree = addImgToScreen(
    "assets/pine-tree.png",
    "fixed",
    "450px",
    "200px"
);
document.body.append(pineTree);

let tree = addImgToScreen("assets/tree.png", "fixed", "200px", "300px");
document.body.append(tree);

let pillar = addImgToScreen("assets/pillar.png", "fixed", "350px", "100px");
document.body.append(pillar);

let crate = addImgToScreen("assets/crate.png", "fixed", "150px", "200px");
document.body.append(crate);

let well = addImgToScreen("assets/well.png", "fixed", "500px", "425px");
document.body.append(well);

let sword = addImgToScreen("assets/sword.png", "fixed", "500px", "405px");
document.body.append(sword);

sword.addEventListener("click", function () {
    sword.remove();
});
