shipping_address = JSON.parse(localStorage.getItem("address"));
//console.log(shipping_address)
shipping_address.map(function(el){
    box1 = document.createElement("div");
    email = document.createElement("p").innerText = `Email : ${el.email}`;
    box1.append(email);
    box2 = document.createElement("div");
    names = document.createElement("p").innerText = `Name : ${el.first_name} ${el.last_name}`;
    box2.append(names);
    box3 = document.createElement("div");
    sh_add = document.createElement("p").innerText = `Address : ${el.flat},${el.area},${el.states},${el.pin}`;
    box3.append(sh_add);
    box4 = document.createElement("div");
    ph = document.createElement("p").innerText = `Contact : ${el.phone}`;
    box4.append(ph);
    document.querySelector(".add").append(box1,box2,box3,box4);
})
function changeFunction(){
  window.location.href = "payment_address.html"
}