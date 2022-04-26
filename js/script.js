
let elForm = document.querySelector("form");
let elBreadOfPizza = document.querySelector(".bread-of-pizza");
let elSize = document.querySelector(".size");
let elPutOn = document.querySelector(".put-on");
let elAdditions = document.querySelector(".additions");
let breadWeight = document.querySelector("#bread");

//============out span==============
let typeBread = document.querySelector(".type-bread");
let typeSize = document.querySelector(".type-size");
let typePut = document.querySelector(".type-put");
let typeAdditions = document.querySelector(".type-additions");

let elBtn = document.querySelector(".button");

let elOut = document.querySelector(".out");
let pizzaSize = document.querySelector(".size-of-pizza");


//=============arrays=========
let elSelOpt = ["Yupqa", "Ortacha", "Qalin"];
let elSizeValue = ["25sm", "30sm", "35sm"];
let elPutOnValue = ["Pomidor ", "Kurka goshti ", "Zaytun ", "Tuzlangan bodring ", "Qoziqorin ", "Qazi "];
let elAdditionsItem = ["Achchiq ", "Sosiskali "]


//============functions=============
for(let i = 0; i < elSelOpt.length; i++) {
  let elOpt = document.createElement("option");
  elOpt.value = elOpt.textContent = elSelOpt[i];

  elOpt.addEventListener("change", function(evt){
    evt.preventDefault();
    typeBread.textContent = this.value;
    
  })
 
  breadWeight.append(elOpt);
}


for(let i = 0; i < elSizeValue.length; i++) {

  let size = document.createElement("input");
  let sizeLabel = document.createElement("label");

  size.value = elSizeValue[i];
  sizeLabel.textContent = elSizeValue[i];
  size.setAttribute("type", "radio");
  size.setAttribute("name", "size");

  
  
  sizeLabel.classList.add("sizeLabel-css", "px-2", "btn", "m-2");
  
  size.addEventListener("change", function(evt){
    evt.preventDefault();
    typeSize.textContent = this.value;
  })

  sizeLabel.appendChild(size);
  pizzaSize.appendChild(sizeLabel);

}

for(let i = 0; i < elPutOnValue.length; i++) {
  let putOn = document.createElement("input");
  putOn.value = elPutOnValue[i];
  putOn.setAttribute("type", "checkbox");
  putOn.setAttribute("name", "put");
  putOn.classList.add("m-2");

  let putLabel = document.createElement("label");
  putLabel.textContent = elPutOnValue[i];
  putLabel.classList.add("m-2");
  putLabel.appendChild(putOn);

  putOn.addEventListener("change", function(evt){
    evt.preventDefault();
    typePut.textContent += this.value;
  })

  elPutOn.append(putLabel);

}

for(let i = 0; i < elAdditionsItem.length; i++) {
  let additionCheck = document.createElement("input");
  additionCheck.value = elAdditionsItem[i];
  additionCheck.setAttribute("type", "checkbox");
  additionCheck.setAttribute("name", "add-item");
  additionCheck.classList.add("m-1");

  let additionsLabel = document.createElement("label");
  additionsLabel.textContent = elAdditionsItem[i];
  additionsLabel.classList.add("m-2");

  additionCheck.addEventListener("change", function(evt){
    evt.preventDefault();
    typeAdditions.textContent += this.value;

  })

  additionsLabel.appendChild(additionCheck);
  elAdditions.appendChild(additionsLabel);

}
