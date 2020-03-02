var prize_size = 0;
var prize_topping =0;
var prize_crust_size = 0;
var quantity=0;
function sizeChange(selectObject) {
    var value = selectObject.value; 
    //console.log(value);
    switch (value) {
        case "small":
            prize_size = 600;
            break;
        case "medium":
            prize_size = 800;
            break;
        case "large":
            prize_size = 1100;
            break;
    
        default:
            prize_size = 0;
            break;
    }
    // console.log(prize_size)
}
function toppingsChange(selectObject) {
    var value = selectObject.value;  
    //console.log(value);

    switch (value) {
        case "pepperoni":
            prize_topping = 200;
            break;
        case "mushroom":
            prize_topping = 150;
            break;
        case "veges":
            prize_topping = 110;
            break;
        case "cheeses":
            prize_topping = 80;
            break;  
        case "bacon":
            prize_topping = 90;
            break;
        case "onions":
            prize_topping = 50;
            break;  
    
        default:
            prize_topping = 0;
            break;
    }
    // console.log(prize_topping)
    
}
function crustChange(selectObject) {
    var value = selectObject.value;  
    // console.log(value);
    switch (value) {
        case "thickcrust":
            prize_crust_size = 100;
            break;
        case "stuffed":
            prize_crust_size = 150;
            break;
    
        default:
            prize_crust_size = 0;
            break;
    }
    // console.log(prize_crust_size);
}

    
function quantityChange(quantityObject) { 
    var quantity = quantityObject.value;  
    var total_prize=0;
    if (prize_size !=0 && prize_topping !=0 && prize_crust_size) {

        total_prize= (prize_size + prize_topping + prize_crust_size) * quantity;
        console.log(total_prize);
    }else{
        console.log("prizes are zero");
        console.log("size prize: "+prize_size+"\ntopping: "+prize_topping+"\ncrust: "+prize_crust_size);
    }
    // console.log(value);
    
}
