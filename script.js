//INVENTRY
for (let i = 1; i < 244; i++) {
    var inventry_div = document.createElement('div');                           //div生成
    inventry_div.className = "additem additem" + String(i);                     //class付与
    document.getElementById('inventry-items').appendChild(inventry_div);        //inventry-itemsにdivを挿入
    var get_class = document.getElementsByClassName('additem' + String(i));     //class取得
    get_class[0].setAttribute("id", "additem" + String(i));                     //id付与
}

//STASH
//ここより下はdiv生成script
//Part01//
//others01
for (let i = 1; i < 21; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('other-items').appendChild(stash_div);              //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}

//building materials02
for (let i = 21; i < 38; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('building-materials-items').appendChild(stash_div); //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}

//electronics03
for (let i = 38; i < 79; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('electronics-items').appendChild(stash_div);        //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));         //class取得
    get_class[0].setAttribute("id", "item" + String(i));                         //id付与
}
//energy elements04
for (let i = 79; i < 87; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('energy-elements').appendChild(stash_div);          //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}
//flammable materials05
for (let i = 87; i < 105; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('flammable-materials').appendChild(stash_div);      //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}
//household materials06
for (let i = 105; i < 122; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('household-materials').appendChild(stash_div);      //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}
//medical supplies07
for (let i = 122; i < 132; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('medical-supplies').appendChild(stash_div);         //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}
//tools08
for (let i = 132; i < 150; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('tools-item').appendChild(stash_div);               //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}
//valuables09
for (let i = 150; i < 171; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('valuables-items').appendChild(stash_div);          //other-itemsにdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}

//Part02//
//medication01
for (let i = 171; i < 186; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('medication01').appendChild(stash_div);             //medication01にdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}
//medication02
for (let i = 186; i < 197; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('medication02').appendChild(stash_div);             //medication02にdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}
//medication03
for (let i = 197; i < 203; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('medication03').appendChild(stash_div);             //medication03にdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}
//medication04
for (let i = 203; i < 206; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('medication04').appendChild(stash_div);             //medication04にdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}

//Part03//
//Provisions01
for (let i = 206; i < 225; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('provisions01').appendChild(stash_div);             //Provisions01にdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}
//Provisions02
for (let i = 225; i < 244; i++) {
    var stash_div = document.createElement('div');                              //div生成
    stash_div.className = "item item" + String(i);                              //class付与
    document.getElementById('provisions02').appendChild(stash_div);             //Provisions02にdivを挿入
    var get_class = document.getElementsByClassName('item' + String(i));        //class取得
    get_class[0].setAttribute("id", "item" + String(i));                        //id付与
}


//INVENTRYの画像表示切り替え
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

//アイテムのクリックの監視
for (let i = 1; i < 244; i++) {
    var defaultlistener = "item" + String(i);
    var addlistener = "additem" + String(i);
    // document.getElementById(defaultlistener).addEventListener('mouseover', playAudio, false);
    // document.getElementById(addlistener).addEventListener('mouseover', playAudio, false);
    document.getElementById(defaultlistener).addEventListener('click', clicked, false);
    document.getElementById(addlistener).addEventListener('click', clicked, false);
}


//タブクリックされたときの処理
let items_part01 = document.getElementById('items-part01');
let items_part02 = document.getElementById('items-part02');
let items_part03 = document.getElementById('items-part03');
let items_part04 = document.getElementById('items-part04');

function changedisplay01() {
    items_part01.style.display = "block";
    items_part02.style.display = "none";
    items_part03.style.display = "none";
    items_part04.style.display = "none";
}
function changedisplay02() {
    items_part01.style.display = "none";
    items_part02.style.display = "block";
    items_part03.style.display = "none";
    items_part04.style.display = "none";
}
function changedisplay03() {
    items_part01.style.display = "none";
    items_part02.style.display = "none";
    items_part03.style.display = "block";
    items_part04.style.display = "none";

}
function changedisplay04() {
    items_part01.style.display = "none";
    items_part02.style.display = "none";
    items_part03.style.display = "none";
    items_part04.style.display = "block";

}
//タブをクリックされたかを監視
document.getElementById('tab01').addEventListener('click', changedisplay01, false);
document.getElementById('tab02').addEventListener('click', changedisplay02, false);
document.getElementById('tab03').addEventListener('click', changedisplay03, false);
document.getElementById('tab04').addEventListener('click', changedisplay04, false);

//ここより下は画像挿入script
//Part01
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

//Part02
// medication01
for (let i = 171; i < 186; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/MEDICATION/injectors/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/MEDICATION/injectors/itemimg" + String(i) + ".gif)";
}
// medication02
for (let i = 186; i < 197; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/MEDICATION/injury_treatment/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/MEDICATION/injury_treatment/itemimg" + String(i) + ".gif)";
}
// medication03
for (let i = 197; i < 203; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/MEDICATION/medkits/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/MEDICATION/medkits/itemimg" + String(i) + ".gif)";
}
// medication04
for (let i = 203; i < 206; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/MEDICATION/pills/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/MEDICATION/pills/itemimg" + String(i) + ".gif)";
}

//Part03
// provisions01
for (let i = 206; i < 225; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/PROVISIONS/drinks/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/PROVISIONS/drinks/itemimg" + String(i) + ".gif)";
}
// provisions02
for (let i = 225; i < 244; i++) {
    document.getElementById('item' + String(i)).style.backgroundImage = "url(item_img/PROVISIONS/food/itemimg" + String(i) + ".gif)";
    document.getElementById('additem' + String(i)).style.backgroundImage = "url(item_img/PROVISIONS/food/itemimg" + String(i) + ".gif)";
}