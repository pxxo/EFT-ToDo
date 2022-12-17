//INVENTRY
for (let i = 1; i < 171; i++) {
    var inventry_div = document.createElement('div');                           //div生成
    inventry_div.className = "additem additem" + String(i);                     //class付与
    document.getElementById('inventry-items').appendChild(inventry_div);        //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('additem' + String(i))      //class取得
    get_class[0].setAttribute("id", "additem" + String(i))                      //id付与
}

//STASH
//others01
for (let i = 1; i < 21; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('other-items').appendChild(stash_div);              //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i))         //class取得
    get_class[0].setAttribute("id", "item" + String(i))                         //id付与
}

//building materials02
for (let i = 21; i < 38; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('building-materials-items').appendChild(stash_div); //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i))         //class取得
    get_class[0].setAttribute("id", "item" + String(i))                         //id付与
}

//electronics03
for (let i = 38; i < 79; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('electronics-items').appendChild(stash_div);        //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i))         //class取得
    get_class[0].setAttribute("id", "item" + String(i))                         //id付与
}
//energy elements04
for (let i = 79; i < 87; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('energy-elements').appendChild(stash_div);          //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i))         //class取得
    get_class[0].setAttribute("id", "item" + String(i))                         //id付与
}
//flammable materials05
for (let i = 87; i < 105; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('flammable-materials').appendChild(stash_div);      //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i))         //class取得
    get_class[0].setAttribute("id", "item" + String(i))                         //id付与
}
//household materials06
for (let i = 105; i < 122; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('household-materials').appendChild(stash_div);      //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i))         //class取得
    get_class[0].setAttribute("id", "item" + String(i))                         //id付与
}
//medical supplies07
for (let i = 122; i < 132; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('medical-supplies').appendChild(stash_div);         //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i))         //class取得
    get_class[0].setAttribute("id", "item" + String(i))                         //id付与
}
//tools08
for (let i = 132; i < 150; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('tools-item').appendChild(stash_div);               //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i))         //class取得
    get_class[0].setAttribute("id", "item" + String(i))                         //id付与
}
//valuables09
for (let i = 150; i < 171; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('valuables-items').appendChild(stash_div);          //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i))         //class取得
    get_class[0].setAttribute("id", "item" + String(i))                         //id付与
}



function clicked(e) {
    let targetid = e.target.id;
    console.log(targetid);
    var cut3 = targetid.substring(0, 3);
    var cut4 = targetid.substring(0, 4);
    if (cut3 == "add") {
        const delete_audio = new Audio('audio/delete.mp3');
        delete_audio.play();
        let deleteitemname = targetid;
        document.getElementById(deleteitemname).style.display = "none";
    } else if (cut4 == "item") {
        const add_audio = new Audio('audio/add.mp3');
        add_audio.play();
        let additemname = "add" + targetid;
        document.getElementById(additemname).style.display = "inline-block";
    } else {
    }
}

// function playAudio() {
//     const select_audio = new Audio('audio/hover.mp3');
//     select_audio.play();
// }

for (let i = 1; i < 171; i++) {
    var defaultlistener = "item" + String(i);
    var addlistener = "additem" + String(i);
    // document.getElementById(defaultlistener).addEventListener('mouseover', playAudio, false);
    // document.getElementById(addlistener).addEventListener('mouseover', playAudio, false);
    document.getElementById(defaultlistener).addEventListener('click', clicked, false);
    document.getElementById(addlistener).addEventListener('click', clicked, false);
}

// OTHERS
for (let i = 1; i < 21; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/01others/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/01others/itemimg" + String(i) + ".gif)";
}
//BUILDING MATERIALS
for (let i = 21; i < 38; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/02buildingmaterials/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/02buildingmaterials/itemimg" + String(i) + ".gif)";
}
// ELECTRONICS
for (let i = 38; i < 79; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/03electronics/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/03electronics/itemimg" + String(i) + ".gif)";
}
// ENERGY ELEMENTS
for (let i = 79; i < 87; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/04energyelements/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/04energyelements/itemimg" + String(i) + ".gif)";
}
// FLAMMABLE MATERIALS
for (let i = 87; i < 105; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/05flammablematerials/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/05flammablematerials/itemimg" + String(i) + ".gif)";
}
// HOUSEHOLD MATERIALS
for (let i = 105; i < 122; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/06householdmaterials/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/06householdmaterials/itemimg" + String(i) + ".gif)";
}
// MEDICAL SUPPLIES
for (let i = 122; i < 132; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/07medicalsupplies/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/07medicalsupplies/itemimg" + String(i) + ".gif)";
}
// TOOLS
for (let i = 132; i < 150; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/08tools/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/08tools/itemimg" + String(i) + ".gif)";
}
// VALUABLES
for (let i = 150; i < 171; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/09valuables/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/09valuables/itemimg" + String(i) + ".gif)";
}