final_price = JSON.parse(localStorage.getItem("total"))
//console.log(final_price)
document.querySelector("#final_total1").innerHTML = `₹${final_price}`
document.querySelector("#final_total2").innerHTML = `₹${final_price}`
document.querySelector("#pay").addEventListener("click",addresFunction);
function addresFunction(){
    event.preventDefault()
    var addresss = [];
    var obj = {
        email : document.querySelector("#email").value,
        first_name : document.querySelector("#f_name").value,
        last_name : document.querySelector("#l_name").value,
        flat : document.querySelector("#flat").value,
        area : document.querySelector("#area").value,
        states : document.querySelector("#states").value,
        phone : document.querySelector("#phone").value,
        pin : document.querySelector("#pin").value,
    }
    var sum = 0;
    for(var key in obj){
        if(obj[key]==""){
            console.log(key,obj[key])
            sum++;
        }
    }
    //console.log(sum)
    if(sum>0){
        alert("Please fill all input")
    }else{
        window.location.href = "payment.html";
        addresss.push(obj)
        localStorage.setItem("address",JSON.stringify(addresss));
    }
}