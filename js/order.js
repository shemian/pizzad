
    
function quantityChange() { 
    var prize_size = parseInt(document.getElementById("sizes").value)
    var prize_topping = parseInt(document.getElementById("Toppings").value)
    var prize_crust_size = parseInt(document.getElementById("crust").value)
    var quantity = parseInt(document.getElementById("number").value);  
    var total_prize= (prize_size + prize_topping + prize_crust_size) * quantity;
    var where = prompt("Enter your location within Nairobi")
    alert( "Thank you for choosing on us. You pizza delivery will be done soon,  we have recived your location.You total prize is " + total_prize + " Because we do a free delivery! Your oder will be delivered in " + where + " thank you")
   
    
}

