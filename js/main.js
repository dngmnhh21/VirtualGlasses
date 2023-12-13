



let dataClasses = [
    {id:"G1", src:"./img/g1_l.jpg",virtialImg:"./img/g1_r.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150 ,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id:"G2", src:"./img/g1_l.jpg",virtialImg:"./img/g1_r.png",brand:"Arnette",name:"American flag",color:"American flag",price:150 ,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id:"G3", src:"./img/g1_l.jpg",virtialImg:"./img/g1_r.png",brand:"Burbery",name:"Belt of Hippolyte",color:"Blue",price:100 ,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id:"G4", src:"./img/g1_l.jpg",virtialImg:"./img/g1_r.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100 ,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id:"G5", src:"./img/g1_l.jpg",virtialImg:"./img/g1_r.png",brand:"D&G",name:"Joyride",color:"Gold",price:180 ,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id:"G6", src:"./img/g1_l.jpg",virtialImg:"./img/g1_r.png",brand:"Polo",name:"Natty Ice",color:"Blue",price:120 ,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id:"G7", src:"./img/g1_l.jpg",virtialImg:"./img/g1_r.png",brand:"Ralph",name:"Tortoise",color:"Black",price:120 ,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id:"G8", src:"./img/g1_l.jpg",virtialImg:"./img/g1_r.png",brand:"Polo",name:"Henry",color:"Red",price:120 ,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id:"G9", src:"./img/g1_l.jpg",virtialImg:"./img/g1_r.png",brand:"Coarch",name:"Midnight Vixen Remix",color:"Blue,Black",price:120 ,description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."}
];

//import các lớp đối tượng vào main
import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";

let glassesList = new GlassesList();
// hàm rút gọn cú pháp lấy element by id
const getEle = (id)=>{
     return document.getElementById(id);
}

// hàm hiển thị danh sách kính

const showGlassesList = ()=>{
    let divGlassesList = getEle("vglassesList");

    //tạo đối tượng kính và thêm vào danh sách
    //duyệt mảng 
    dataClasses.map((item,index)=>{
        let gl = new Glasses(item.id, item.src,item.virtialImg,item.brand,item.name,item.color,item.price,item.description);
        glassesList.addGlasses(gl);
    });
    // console.log(glassesList.glist);
    divGlassesList.innerHTML = glassesList.renderGlasses();
}

showGlassesList();

const tryOnGlasses = (e)=>{
 let gID = e.target.getAttribute("data-id");
 let gObject = {}; 
 //value là 1 đối tượng kính trong danh sách kính
 for(let value of glassesList.glist){
    if(value.id == gID){
        gObject = value;
    }
 }
 //gọi hàm show
 showInfo(gObject);
}

window.tryOnGlasses = tryOnGlasses;

//khai báo hàm show
const showInfo = (gObject)=>{
    let divAvatar = getEle("avatar");
    let divInfo = getEle("glassesInfo");

    divAvatar.innerHTML = `
        <img id="glasses" src="${gObject.virtualImg}">
    `;

    let status = "";
    if(gObject.status){
        status = "Stocking"
    }else{
        status = "Sold Out"
    } 
    divInfo.innerHTML = `
       <h5>${gObject.name} - ${gObject.brand} (${gObject.color})</h5>
       <p class = "card-text">
           <span class="btn btn-danger btn-sm me-2">$${gObject.price}</span>
           <span class="text-success">${status}</span>
       </p>
       <p class = "card-text">
           ${gObject.desc}
       </p>
    `;
    divInfo.style.display = "block";
}


const removeGlasses = (isDisplay)=>{
     let glasses = getEle("glasses");
     if(glasses!= null){
        if(isDisplay){
            glasses.style.opacity = 0.9;
         }else{
            glasses.style.opacity = 0;
         }
     }
    
}

window.removeGlasses = removeGlasses;