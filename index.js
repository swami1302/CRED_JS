const carForm = document.getElementById("form");
const carProdInp = document.getElementById("carProd");
const carModelInp = document.getElementById("carModel");
const carColorInp = document.getElementById("carColor");
const carPriceInp = document.getElementById("carPrice");
const carIdInp = document.getElementById("carId");
const carList = document.getElementById("carList");

let cars=[];

carForm.addEventListener("submit", function (s){
    s.preventDefault();

    const carProd = carProdInp.value;
    const carModel = carModelInp.value;
    const carColor = carColorInp.value;
    const carPrice = carPriceInp.value;
    const carId = carIdInp.value;

    if(carId){
        //edit
        const index = cars.findIndex((car)=> car.id === carId);
        if(index !== -1){
            cars[index].prod = carProd;
            cars[index].model =carModel;
            cars[index].color=carColor;
            cars[index].price =carPrice;
        }
    } else{
        //new
        const newCar ={
            id: Date.now().toString(),
            prod: carProd,
            model: carModel,
            color: carColor,
            price: carPrice,
        };
        cars.push(newCar);
    }

    //clear
    carProdInp.value="";
    carModelInp.value="";
    carColorInp.value="";
    carPriceInp.value="";
    carIdInp.value="";

    displayCarList();

    carForm.reset();
});

function delCar(id){
    cars=cars.filter((car)=>car.id !== id);
    displayCarList();

}

function editCar(id){
    const carEdit = cars.find((car)=> car.id === id);
    if(carEdit){
        carProdInp.value=carEdit.prod;
        carModelInp.value=carEdit.model;
        carColorInp.value=carEdit.color;
        carPriceInp.value=carEdit.price;
        carIdInp.value=carEdit.id;
    }
}

function displayCarList(){
    carList.innerHTML="";
    cars.forEach((car)=>{
        const row = document.createElement("tr");
        row.innerHTML=`
            <td>${car.prod}</td>
            <td>${car.model}</td>
            <td>${car.color}</td>
            <td>${car.price}</td>
            <td><button class="del" onclick="delCar('${car.id}')">X</button></td>
            <td><button class="edit" onclick="editCar('${car.id}')">Edit</button></td>
        `;
        carList.appendChild(row);
    });
}
displayCarList();
