function validate(){
    var itemname=document.getElementById("title").value;
    var itemprice=document.getElementById("price").value;
    var itemdate=document.getElementById("dateOfLaunch").value;
    var itemCategory=document.getElementById("category").value;
    if(itemname==" "){
        alert("Title is required");
    }
    if (itemprice==" "){
        alert("Price is requierd");
    }
    if(itemdate==" "){
        alert("Date of Launch is required");
    }
    if(itemCategory=="0"){
        alert("Category is required");
    }
    return false;
}

function deleted(){
    alert("Item deleted successfully");
    return false;
}