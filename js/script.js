
let selectArr = ["Yupqa", "Qalin", "O'rta"];
let radioArr = ["25 cm", "30 cm", "35 cm"];
let checkArr1 = [ "Pamidor" ,"Tuzlangan bodiring" ,"Kurka go'shti","Qo'ziqorin","Zaytun","Qazi"];
let checkArr2 = [ "Achchiq" ,"Sosiskali"];

let orderToppings = [];
let orderBottoms = [];


let elForm = document.querySelector(".form");
let elFormSelect = elForm.querySelector(".select-form");
let elInputRadio = elForm.querySelector(".form-input-radio");
let elInputCheck = elForm.querySelectorAll(".form-input-check");
let selectSpan = document.querySelectorAll(".select-span");
let elList = document.querySelector(".list");
let elList2 = document.querySelector(".list2");

function showOrderItems () {
    elList.innerHTML = "";

    for (let i = 0; i < orderToppings.length; i++) {
        let elOrderingItem = document.createElement("li");
        elOrderingItem.setAttribute("class", "list-group-item bg-warning bg-opacity-10 d-flex list-item justify-content-between align-items-center");
        elOrderingItem.textContent = orderToppings[i];

        elList.appendChild(elOrderingItem);
    }
}

function addOrederBottomItem () {
    elList2.innerHTML = ""
    for (let i = 0; i < orderBottoms.length; i++) {
        let elOrderBottomItem = document.createElement("li");
        elOrderBottomItem.setAttribute("class", "list-group-item bg-warning bg-opacity-10 d-flex list-item justify-content-between align-items-center");
        elOrderBottomItem.textContent = orderBottoms[i];

        elList2.appendChild(elOrderBottomItem);
    }
}

for(let i = 0; i < selectArr.length; i++) {
    let elOption = document.createElement("option");
    elOption.textContent= selectArr[i];
    elOption.value = selectArr[i];

    elFormSelect.appendChild(elOption);
}

for (let i = 0; i < radioArr.length; i++) {
    let elFormRadioBox = document.createElement("label");
    let elFormRadioInput = document.createElement("input");

    elFormRadioInput.setAttribute("type","radio");
    elFormRadioInput.setAttribute("name","Size");
    elFormRadioBox.setAttribute("class", "text-center rounded-circle bg-white me-4")
    elFormRadioInput.setAttribute("class", "radio-input")

    elFormRadioInput.value = radioArr[i];
    elFormRadioBox.textContent = radioArr[i];

    elFormRadioInput.addEventListener("change", function () {
        selectSpan[1].textContent = this.value;
    })

    elInputRadio.appendChild(elFormRadioBox);
    elFormRadioBox.appendChild(elFormRadioInput);

    elFormRadioBox.style.width = "70px"
    elFormRadioBox.style.height = "70px"
    elFormRadioBox.style.border = "2px solid black"
    elFormRadioBox.style.paddingTop = "20px"
    elFormRadioBox.style.paddingLeft = "10px"

    elFormRadioInput.style.opacity = "0"
}

for (let i = 0; i < checkArr1.length; i++) {
    let elFormCheckBox = document.createElement("label");
    let elFormCheckInput = document.createElement("input");

    elFormCheckInput.setAttribute("type","checkbox");
    elFormCheckInput.setAttribute("class", "form-check-input form-check-input1 me-2")
    elFormCheckInput.setAttribute("name", "Pizza toppings")
    elFormCheckBox.setAttribute("class", "col-md-6 form-check-label fs-5")

    elFormCheckInput.value = checkArr1[i];
    elFormCheckBox.textContent = checkArr1[i];

    elInputCheck[0].append(elFormCheckBox);
    elFormCheckBox .prepend(elFormCheckInput);

    elFormCheckInput.addEventListener("change", function () {
        if (orderToppings.includes(this.value)) {
            let OrderItemIndex = orderToppings.indexOf(this.value);
            orderToppings.splice(OrderItemIndex,1)

        }else {
            orderToppings.push(this.value)
        }

        showOrderItems()
        console.log(orderToppings);
    })
}

for (let i = 0; i < checkArr2.length; i++) {
    let elFormCheckBox = document.createElement("label");
    let elFormCheckInput = document.createElement("input");

    elFormCheckInput.setAttribute("type","checkbox");
    elFormCheckInput.setAttribute("name","Additional");
    elFormCheckInput.setAttribute("class", "form-check-input form-check-input2 me-2")
    elFormCheckBox.setAttribute("class", "col-md-6 form-check-label fs-5")

    elFormCheckInput.value = checkArr2[i];
    elFormCheckBox.textContent = checkArr2[i];

    elInputCheck[1].append(elFormCheckBox);
    elFormCheckBox .prepend(elFormCheckInput);

    elFormCheckInput.addEventListener("change",function () {
        if(orderBottoms.includes(this.value)) {
            let orderBottomItemIndex = orderBottoms.indexOf(this.value);
            orderBottoms.splice(orderBottomItemIndex,1)
        }else {
            orderBottoms.push(this.value);
        }

        addOrederBottomItem()
        console.log(orderBottoms);
    })
}

elFormSelect.addEventListener("change", function () {
    selectSpan[0].textContent = this.value;
})