document.getElementById("change-p").onclick = function(){
        document.getElementById("p-tag").innerHTML = "Hello everyone!"
}

let cars = ["Audi","Bmw","Mercedes"]
// cars[2] = "ww"
console.log(cars)
console.log(cars[2])

var text = "";
for(let i = 0; i < cars.length; i++ ){
    text += cars[i] + "<br/>";
     
}

document.getElementById("p-tag").innerHTML = text; 
 

let var1 = 13;
if (var1 == "11"){
    document.getElementById("p-tag").innerHTML = "They are the same";
} else if (var1=="13" ) {
    document.getElementById("p-tag").innerHTML = "They are not the same";

}