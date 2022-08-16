let elForm = document.querySelector(".form");
let elFormSelect = elForm.querySelector(".select-form");
let elInputRadio = elForm.querySelector(".form-input-radio");
let elInputCheck = elForm.querySelectorAll(".form-input-check");
let selectSpan = document.querySelectorAll(".select-span");
let elList = document.querySelector(".list");
let elList2 = document.querySelector(".list2");

let selectArr = ["Yupqa", "Qalin", "O'rta"];
for(let i = 0; i < selectArr.length; i++) {
    let elOption = document.createElement("option");
    elOption.textContent= selectArr[i];
    elOption.value = selectArr[i];
    elFormSelect.appendChild(elOption);
}

let radioArr = ["25 cm", "30 cm", "35 cm"];
for (let i = 0; i < radioArr.length; i++) {
    let elFormRadioBox = document.createElement("label");
    let elFormRadioInput = document.createElement("input");

    elFormRadioInput.setAttribute("type","radio");
    elFormRadioInput.setAttribute("name","Size");
    elFormRadioBox.setAttribute("class", "text-center rounded-circle bg-white me-4")
    elFormRadioInput.setAttribute("class", "radio-input")

    elFormRadioInput.value = radioArr[i];
    elFormRadioBox.textContent = radioArr[i];

    elInputRadio.appendChild(elFormRadioBox);
    elFormRadioBox.appendChild(elFormRadioInput);

    elFormRadioBox.style.width = "70px"
    elFormRadioBox.style.height = "70px"
    elFormRadioBox.style.border = "2px solid black"
    elFormRadioBox.style.paddingTop = "20px"
    elFormRadioBox.style.paddingLeft = "10px"

    elFormRadioInput.style.opacity = "0"
}

let checkArr1 = [ {id:1, text: "Pamidor"} ,{id:2, text: "Tuzlangan bodiring"} ,{id:3, text: "Kurka go'shti"},{id:4, text: "Qo'ziqorin"},{id:5, text: "Zaytun"},{id:6, text: "Qazi"}];
for(let i = 0; i < checkArr1.length; i++) {
    let elFormCheckBox = document.createElement("label");
    let elFormCheckInput = document.createElement("input");

    elFormCheckInput.setAttribute("type","checkbox");
    elFormCheckInput.setAttribute("class", "form-check-input form-check-input1 me-2")
    elFormCheckInput.setAttribute("name", "Pizza toppings")
    elFormCheckBox.setAttribute("class", "col-md-6 form-check-label fs-5")

    elFormCheckInput.value = checkArr1[i].text;
    elFormCheckBox.textContent = checkArr1[i].text;

    elInputCheck[0].append(elFormCheckBox);
    elFormCheckBox .prepend(elFormCheckInput);
}

let checkArr2 = [{id:1, text: "Achchiq"} ,{id:2, text: "Sosiskali"}];
for (let i = 0; i < checkArr2.length; i++) {
    
    let elFormCheckBox = document.createElement("label");
    let elFormCheckInput = document.createElement("input");

    elFormCheckInput.setAttribute("type","checkbox");
    elFormCheckInput.setAttribute("name","Additional");
    elFormCheckInput.setAttribute("class", "form-check-input form-check-input2 me-2")
    elFormCheckBox.setAttribute("class", "col-md-6 form-check-label fs-5")

    elFormCheckInput.value = checkArr2[i].text;
    elFormCheckBox.textContent = checkArr2[i].text;

    elInputCheck[1].append(elFormCheckBox);
    elFormCheckBox .prepend(elFormCheckInput);
}

elFormSelect.addEventListener("change", function () {
    selectSpan[0].textContent = elFormSelect.value;    
})

elInputRadio.addEventListener("change", function (event) {
    selectSpan[1].textContent = event.target.value;
})

let arr = [];
let pizzaUst = document.querySelectorAll(".form-check-input1");
for (let index = 0; index < pizzaUst.length; index++) {
    
    let elListItem = document.createElement("li");
    pizzaUst[index].addEventListener("change", function () {
        elListItem.setAttribute("class", "list-group-item bg-warning bg-opacity-10 d-flex list-item justify-content-between align-items-center")
        
        if (pizzaUst[index].checked) {
            arr.push(checkArr1[index]);
        
            for(let i = 0; i < arr.length; i++) {
                elListItem.innerHTML= arr[i].text;
                elList.appendChild(elListItem);         
            }
        }
        else if (pizzaUst[index].checked === false) {
            for(let i = 0; i < arr.length; i++) {
                if(arr[i].id === (index+1)) {
                    arr.splice(i,1);
                }
            }
            elList.removeChild(elListItem);
        }
        
        console.log(arr);  
    })
}

let pizzaTopping = document.querySelectorAll(".form-check-input2");
let arr2 = [];
for(let i = 0; i < pizzaTopping.length; i++) {
    let pizzaToppingItem = document.createElement("li");
    pizzaToppingItem.setAttribute("class", "list-group-item bg-warning bg-opacity-10 d-flex list-item justify-content-between align-items-center")
    
    pizzaTopping[i].addEventListener("change", function () {

        if(pizzaTopping[i].checked) {
            arr2.push(checkArr2[i]);

            for(let el = 0; el < arr2.length; el++) {
                pizzaToppingItem.textContent = arr2[el].text;
                elList2.appendChild(pizzaToppingItem)
            }
        }
        else if(arr2[i].id === (i+1)) {
            arr2.splice(i,1)
            elList2.removeChild(pizzaToppingItem)

        }

        console.log(arr2);
    })
}
