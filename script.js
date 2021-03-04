var wrapEle = document.body.querySelector(".wrapper");
var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

function createCharacter(char){
  var ele = document.createElement("div");
  ele.classList.add("character");
  if(char.afl === "autobot"){
    ele.classList.add("autobot");
    var img = document.createElement("img");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    var src = document.getElementById("header");
    ele.appendChild(img);
  }
  else {
    ele.classList.add("decepticon")
    var img = document.createElement("img");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    var src = document.getElementById("header");
    ele.appendChild(img);
  }
  
  var nameEle = document.createElement("div");
  var classEle = document.createElement("div");
  var vehicleEle = document.createElement("div");
  nameEle.innerHTML = "Name: " + char.name;
  classEle.innerHTML = "Class: " + char.class.toUpperCase();
  vehicleEle.innerHTML = "Vehicle: " + char.vehicle;
  
  if(char.vehicle === "truck"){
    vehicleEle.style.color = "blue";
  }
  else if(char.vehicle === "tank"){
    vehicleEle.style.color = "green";
  }
  else if(char.vehicle === "car"){
    vehicleEle.style.color = "gold";
  }
  else{
    vehicleEle.style.color = "white";
  }
  
  ele.appendChild(nameEle);
  ele.appendChild(classEle);
  ele.appendChild(vehicleEle);
  wrapEle.appendChild(ele);
  
}

for(var i=0; i<chrs.length; i++){
  createCharacter(chrs[i]);
}