function clickThis(name) {
    var name = document.getElementById("name").value;
    if(name !== null){
        alert(name   + "  we've recieved your message.we will check on you later.Thank you"); 
    };
    return name;
};