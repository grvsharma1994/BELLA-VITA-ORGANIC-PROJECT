var cartdata = JSON.parse(localStorage.getItem("cartItem"));
var cartData = JSON.parse(localStorage.getItem("cartItem")) || [];
//console.log(cartData)
//quantity------>
var counter;
if(localStorage.getItem("counter"==null)){
    counter = 1;
}else if(cartdata==[]){
    counter = 1; 
}else{
    counter = localStorage.getItem("counter")
}
function decFunction(el){
    if(counter>1){
        counter--;
        document.querySelector("#count").innerText=counter;
        localStorage.setItem("counter",counter);
        window.location.reload()
    }   
}
function incFunction(el){
    counter++;
    document.querySelector("#count").innerText=counter;
    localStorage.setItem("counter",counter);
    window.location.reload()
}
//quantity------>
//console.log(counter)
 var total = cartData.reduce(function(sum,el){
     return (sum+(el.price)*counter);
     
},0)
localStorage.setItem("total",JSON.stringify(total));
cartData.map(function(el,ind){
var product_details = document.createElement("div");
    product_details.setAttribute("class","product_details");
    var box1 = document.createElement("div");
     box1.setAttribute("class","box1");
     var pr_img = document.createElement("img");
     pr_img.src = el.img;
     pr_img.setAttribute("class","pr_img");
     var box2 = document.createElement("div");
     box2.setAttribute("class","box2");
     var name = document.createElement("p");
     name.innerText = el.name;
     var price = document.createElement("h2");
     price.innerText = `Rs. ${el.price}`;
    var quantity = document.createElement("p");
     quantity.innerText="Quantity :";
    var qnt_rem_line_box = document.createElement("div")
     qnt_rem_line_box.setAttribute("class","qnt_rem_line_box");
     var qnt_box = document.createElement("div");
     qnt_box.setAttribute("id","qnt_box");
   //quantity------>
    var qnt_box1 = document.createElement("button");
    qnt_box1.setAttribute("class","qnt");
    qnt_box1.innerText = "-";
    qnt_box1.addEventListener("click",function(){
        decFunction(el,ind)
    })
    var qnt_box2 = document.createElement("div");
    qnt_box2.innerText = counter;
    qnt_box2.setAttribute("id","count")
    var qnt_box3 = document.createElement("button");
    qnt_box3.setAttribute("class","qnt");
    qnt_box3.innerText = "+";
    qnt_box3.addEventListener("click",function(){
        incFunction(el,ind)
    })
    //remove----->
    var remove = document.createElement("div");
    remove.innerText = "X Remove"
    remove.setAttribute("id","remove");
    remove.addEventListener("click",function(){
        removeFunction(el,ind)
    })
  //all appends ----->
     qnt_box.append(qnt_box1,qnt_box2,qnt_box3)
     qnt_rem_line_box.append(qnt_box,remove)
     box1.append(pr_img)
     box2.append(name,price,quantity,qnt_rem_line_box)
     product_details.append(box1,box2);
     document.querySelector("#order_details").append(product_details);
    })
var money = document.createElement("div");
money.setAttribute("id","money");
var price_tag = document.createElement("p");
price_tag.innerText = "Total:";
var price_amount = document.createElement("span");
price_amount.innerText = `Rs. ${total}`;
price_amount.setAttribute("id","price_amount");
var off_box = document.createElement("div");
off_box.setAttribute("id","offer")
var div1 = document.createElement("div");
var x = document.createElement("p");
x.innerText = "Or 4 interest-free payments of Rs 243.75 with"
div1.append(x)
var div2 = document.createElement("div");
div2.setAttribute("id","div2")
var off_img = document.createElement("img");
off_img.setAttribute("id","off_img")
off_img.src = "https://cdn.sezzle.in/branding/2.0/Sezzle_Logo_FullColor.svg"
div2.append(off_img)
off_box.append(div1,div2);
var payment_div = document.createElement("div");
payment_div.setAttribute("id","payment_div");
payment_div.innerText = "PROCEED TO CHECKOUT";
payment_div.addEventListener("click",function(){
    processNextFunction()
})
var trust_div = document.createElement("div");
trust_div.setAttribute("id","trust_div")
var tr_div1 = document.createElement("div");
tr_div1.setAttribute("class","tr_div")
var tr_img1 = document.createElement("img");
tr_img1.src= "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Shipping_in_24_hrs.png?v=13393426083289990043";
tr_img1.setAttribute("class","tr_img");
tr_div1.append(tr_img1);
var tr_div2 = document.createElement("div");
tr_div2.setAttribute("class","tr_div");
var tr_img2 = document.createElement("img");
tr_img2.src = "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Includes_Taxes_and_Shipping.png?v=6421662264027915738";
tr_img2.setAttribute("class","tr_img");
tr_div2.append(tr_img2);
var tr_div3 = document.createElement("div");
tr_div3.setAttribute("class","tr_div");
var tr_img3 = document.createElement("img");
tr_img3.src = "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Secure_Payment.png?v=1619255193";
tr_img3.setAttribute("class","tr_img");
tr_div3.append(tr_img3);
trust_div.append(tr_div1,tr_div2,tr_div3)
money.append(price_tag,price_amount)
document.querySelector("#price_details").append(money,off_box,payment_div,trust_div)
//remove ----->
function removeFunction(el,ind){
    cartData.splice(ind,1);
    console.log(cartData)
    localStorage.setItem("cartItem",JSON.stringify(cartData));
    window.location.reload();
}
function processNextFunction(){
    window.location.href = "payment_address.html";
}