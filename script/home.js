var bestSellerItems=[
    {
        topImg:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039",
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceGel-02_800x.jpg?v=1646987586",
        name:"Anti Acne, Pimple Scar Spots Removal Cream Gel For Me..",
        reviews:"★★★★★",
        treviews:"559 Reviews",
        stPrice:"Rs. 399",
        price:375,
        save:"(Save Rs. 24)"
    },{
        topImg:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039",
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_8155634b-1029-437e-862d-f927a3202fb1_1024x1024.jpg?v=1646654035",
        name:"Exfoliate Face and Body Scrub Grit, Skin Brightening, De-Ta..",
        reviews:"★★★★★",
        treviews:"2013 reviews",
        stPrice:"Rs. 275",
        price:249,
        save:"(Save Rs. 26)",
    },
    {
        topImg:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039",
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-02_c0cf55b8-cbae-47d0-9407-dd00ef1708b2_800x.jpg?v=1646652229",
        name:"Vitamin C-Glow Natural Face Wash With Coffee, Neem &..",
        reviews:"★★★★★",
        treviews:"1345 reviews",
        stPrice:"Rs. 249",
        price:225,
        save:"(Save Rs. 24)",
    },
    {
        topImg:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039",
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01_9c3f062b-b41a-45a7-a5a8-8fd203d83cda_1024x1024.jpg?v=1646822455",
        name:"NicoLips Lip Lightening Scrub For Dry, Chapped & Damaged..",
        reviews:"★★★★★",
        treviews:"2387 reviews",
        stPrice:"Rs. 450",
        price:399,
        save:"(Save Rs. 51)",
    },
    {
        topImg:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers-tag.png?v=4831700483207635039",
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/EyeLift-01_d29b983b-1aec-41d8-bf8e-4dd132398e11_1024x1024.jpg?v=1646821188",
        name:"EyeLift Under Eye Cream for Dark Circles, Puffy Eyes & Wr..",
        reviews:"★★★★★",
        treviews:"2673 reviews",
        stPrice:"Rs. 325",
        price:285,
        save:"(Save Rs. 40)",
    }
];
//var addToCart = JSON.parse(localStorage.getItem("cartItem"))||[];
bestSellerItems.map(function(elem){
    //console.log(elem);
    var box=document.createElement("div");
    box.setAttribute("id","innerBox")
    var topImage=document.createElement("img");
    topImage.src=elem.topImg;
    topImage.setAttribute("class","topImg")
    var image=document.createElement("img");
    image.src=elem.img;
    image.setAttribute("class","image");
    var name =document.createElement("p");
    name.innerText=elem.name;
    name.setAttribute("class","name");
    var insideInnerBox=document.createElement("div");
    insideInnerBox.setAttribute("id","insideInnerBox")
    var review=document.createElement("p");
    review.innerText=elem.reviews;
    review.setAttribute("class","star");
    var totalReviews=document.createElement("p");
    totalReviews.innerText=elem.treviews;
    totalReviews.setAttribute("class","review")
    var strkPrice=document.createElement("p");
    strkPrice.innerText=elem.stPrice;
    strkPrice.setAttribute("class","skprice")
    var newPrice=document.createElement("p");
    newPrice.innerText=`Rs. ${elem.price}`;
    newPrice.setAttribute("class","newPrice")
    var save=document.createElement("p");
    save.innerText=elem.save;
    save.setAttribute("class","save");
    insideInnerBox.append(review,totalReviews,strkPrice,newPrice)
    var btn = document.createElement("button");
    btn.innerText="Add To Cart";
    btn.setAttribute("class","btn");
    btn.addEventListener("click",function(){
        OnHoveringCart(elem);
    });
    box.append(topImage,image,btn,name,insideInnerBox,save);
    document.querySelector("#box7").append(box);
});
var newArrivals = [
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/EYEWINKKAJAL-01_fe8358fb-02ca-4179-9434-d83b041cc95f_1024x1024.jpg?v=1646289482",
    name:"Eyewink Ayurvedic Kajal with Vitamin E, Almond & Castor Oil - 2.5g",
    reviews:"★★★★★",
    treviews:"49 Reviews",
    stPrice:"Rs. 249",
    price:225,
    save:"(Save Rs. 24)"
},
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-glowfacecream-01_1024x1024.jpg?v=1645508609",
    name:"Vitamin C - Glow Natural Face Cream For Brightening & Glowing skin - 50ml",
    reviews:"★★★★★",
    treviews:"27 Reviews",
    stPrice:"Rs. 375",
    price:325,
    save:"(Save Rs. 50)"
},
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFacePack-01_1024x1024.jpg?v=1647238688",
    name:"Vitamin C - Glow Face Pack for Skin Brightening, Nourishment & Hydration..",
    reviews:"★★★★★",
    treviews:"25 Reviews",
    stPrice:"Rs. 399",
    price:349,
    save:"(Save Rs. 50)"
},
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Choco-01_1024x1024.jpg?v=1637919186",
    name:"Tinty Blush - Choco, 3 in 1 Lip, Eye & Cheek Blush with Free Applicator,..",
    reviews:"★★★★★",
    treviews:"23 Reviews",
    stPrice:"Rs. 299",
    price:349,
    save:"(Save Rs. 50)"
}
]    
//var addToCart = JSON.parse(localStorage.getItem("cartItem"))||[];
newArrivals.map(function(elem){
   var box=document.createElement("div");
   box.setAttribute("id","innerBox")
   var image=document.createElement("img");
   image.src=elem.img;
   image.setAttribute("class","image")
    var name =document.createElement("p");
    name.innerText=elem.name;
    name.setAttribute("class","name");
    var insideInnerBox=document.createElement("div");
    insideInnerBox.setAttribute("id","insideInnerBox")
    var review=document.createElement("p");
    review.innerText=elem.reviews;
    review.setAttribute("class","star");
    var totalReviews=document.createElement("p");
    totalReviews.innerText=elem.treviews;
    totalReviews.setAttribute("class","review")
    var strkPrice=document.createElement("p");
    strkPrice.innerText=elem.stPrice;
    strkPrice.setAttribute("class","skprice")
    var newPrice=document.createElement("p");
    newPrice.innerText=`Rs. ${elem.price}`;
    newPrice.setAttribute("class","newPrice")
    var save=document.createElement("p");
    save.innerText=elem.save;
    save.setAttribute("class","save");
    insideInnerBox.append(review,totalReviews,strkPrice,newPrice)
    var btn = document.createElement("button");
    btn.innerText="Add To Cart";
    btn.setAttribute("class","btn1");
    btn.addEventListener("click",function(){
        OnHoveringCart(elem);
    });
    box.append(image,btn,name,insideInnerBox,save);
    document.querySelector("#box8").append(box);
})

var comboset = [
  {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/LipBalm_-NicoLips-Lip-Scrub-Combo_1024x1024.jpg?v=1647863372",
    name:"NicoLips Lip Scrub & LipBalm Combo For Dry, Chapped & Da..",
    reviews:"★★★★★",
    treviews:"2300 Reviews",
    stPrice:"Rs. 675",
    price:538,
    save:"(Save Rs. 137)"
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Deo-White-Women-_-Men_1024x1024.jpg?v=1647342718",
    name:"DeoWhite Natural Under Arm Skin Whitening Roll-On Deo..",
    reviews:"★★★★★",
    treviews:"435 Reviews",
    stPrice:"Rs. 398",
    price:349,
    save:"(Save Rs. 49)"
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-02_1024x1024.jpg?v=1647345121",
    name:"NicoLips Lip Lightening Scrub For Dry & Chapped Lips - Pa.. ",
    reviews:"★★★★★",
    treviews:"2255 Reviews",
    stPrice:"Rs. 900",
    price:699,
    save:"(Save Rs. 201)"
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/12_1_1024x1024.jpg?v=1632397421",
    name:"Aroma Candles 4 X 60g each, 100% Pure Soy Wax Vanilla..",
    reviews:"★★★★★",
    treviews:"299 Reviews",
    stPrice:"Rs. 499",
    price:399,
    save:"(Save Rs. 100)"
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Glowner_1024x1024.jpg?v=1643781091",
    name:"Pore Minimizing Combo - Face Wash and Face Toner",
    reviews:"★★★★★",
    treviews:"1156 Reviews",
    stPrice:"Rs. 548",
    price:465,
    save:"(Save Rs. 83)"
  }
]
var addToCart = JSON.parse(localStorage.getItem("cartItem"))||[];
comboset.map(function(elem){
    //console.log(elem);
    var box=document.createElement("div");
    box.setAttribute("id","innerBox");
    var image=document.createElement("img");
    image.src=elem.img;
    image.setAttribute("class","image");
    var name =document.createElement("p");
    name.innerText=elem.name;
    name.setAttribute("class","name");
    var insideInnerBox=document.createElement("div");
    insideInnerBox.setAttribute("id","insideInnerBox")
     var review=document.createElement("p");
    review.innerText=elem.reviews;
    review.setAttribute("class","star");
    var totalReviews=document.createElement("p");
    totalReviews.innerText=elem.treviews;
    totalReviews.setAttribute("class","review")
    var strkPrice=document.createElement("p");
    strkPrice.innerText=elem.stPrice;
    strkPrice.setAttribute("class","skprice")
    var newPrice=document.createElement("p");
    newPrice.innerText=`Rs. ${elem.price}`;
    newPrice.setAttribute("class","newPrice")
    var save=document.createElement("p");
    save.innerText=elem.save;
    save.setAttribute("class","save");
    insideInnerBox.append(review,totalReviews,strkPrice,newPrice)
    var btn = document.createElement("button");
    btn.innerText="Add To Cart";
    btn.setAttribute("class","btn");
    btn.addEventListener("click",function(){
        OnHoveringCart(elem);
    });
    box.append(image,btn,name,insideInnerBox,save);
    document.querySelector("#box9").append(box);
});
function OnHoveringCart(elem){
    //console.log("My name");
    addToCart.push(elem);
    localStorage.setItem("cartItem",JSON.stringify(addToCart));

}