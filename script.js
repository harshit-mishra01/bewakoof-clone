
//nav bar x button function
const ComeHome = ()=>{
    page=1;
    document.getElementById('1').classList.remove('commonPageNot');
    document.getElementById('1').classList.add('commonPage');
    

    document.getElementById('2').classList.remove('productPage');
    document.getElementById('2').classList.add('productPageNot');

    document.getElementById('3').classList.remove('buyPage');
    document.getElementById('3').classList.add('buyPageNot');

    document.getElementById('logo').innerText="Bewakoof";
    document.getElementById('logo').classList.remove('HomeButton');
    document.getElementById('logo').classList.remove('HomeButton');
}

//to change nav bar when reduce screen size

let e=document.querySelectorAll('#text');

window.addEventListener("resize" , ()=>{
    if(window.innerWidth<850){
        e.forEach(function(element){
            element.classList.add('hidden');
            document.getElementById('nav1').classList.add('navMobile');
        })
    }
    else{
        
        e.forEach(function(element){
            element.classList.remove('hidden');
            document.getElementById('nav1').classList.add('navMobile');
            

        })
    }
    

})

//COmmon page 

//to check which product is clicked
let page=1; //1=common page , 2=product page , 3=checkout
let pro =document.getElementById("1");
pro.addEventListener("click" , function(e){
    if(e.target.className==='commonPage'){
        return;
    }
    //it will collect all info  from product when clicked
    let image=e.target.parentElement.querySelector('img').src;
    let bewakoof=e.target.parentElement.querySelector('#bewakoof').innerText;
    let name=e.target.parentElement.querySelector('#productName').innerText;
    let price=e.target.parentElement.querySelector('#price').innerText;
    let OriPrice=e.target.parentElement.querySelector('#originalPrice').innerText;
    let priceDiscount=e.target.parentElement.querySelector('#discount').innerText;
    let star=e.target.parentElement.querySelector('#star').innerText;
    let tag=e.target.parentElement.querySelector('#tag').innerText;
    
    //it will swap classes
    page=2;
    document.getElementById('1').classList.add('commonPageNot');
    document.getElementById('1').classList.remove('commonPage');

    document.getElementById('2').classList.add('productPage');
    document.getElementById('2').classList.remove('productPageNot');

    document.getElementById('logo').innerText="X";
    document.getElementById('logo').classList.add('HomeButton');
    
    //it will paste info in product page
    document.querySelector('.left img').src=image;
    document.getElementById('bewakoofF').innerText=bewakoof;
    document.getElementById('productNameF').innerText=name;
    document.getElementById('priceF').innerText=price;
    document.getElementById('discountF').innerText=priceDiscount;
    document.getElementById('originalPriceF').innerText=OriPrice;
    document.getElementById('starF').innerText=star;
    document.getElementById('tagF').innerText=tag;

    //it will reset previous selected size
    if(a===1){
        reset.style.backgroundColor='white'; 
        reset=""; 
        a=0;
        }
})


// PRODUCT PAGE 

//to change count of cart
let count = 0;
let cartButton=document.getElementById('addCart');

//to select Size 

let size=document.querySelector('.size');


//event to select size
let reset=0;
let a;
size.addEventListener('click' , function(e){
    if(e.target.className==='size'){
        return;
    }
    if(reset.innerText==(e.target.innerText)){
        console.log('already slected');
        reset="";
        a=0;
        e.target.style.backgroundColor='white';
    }
    else{
        if(a===1){
        reset.style.backgroundColor='white';
        }
        e.target.style.backgroundColor='rgba(239, 99, 34, 0.788)'; 
        reset=e.target;
        a=1;
    }
    console.log(reset.innerText);
    

})


//event to add product from add to cart

cartButton.addEventListener("click" , ()=>{

     //it will check it user selected sixe or not and give alert
     if(reset.innerText===undefined){
        alert('Select Size First');
        return;
    }

    //it will increase count of nav cart

    count=count+1;
    document.getElementById('countValue').classList.remove('visibility');
    document.getElementById('countValue').innerText=count;
   
    //it will triger animation of cart
    cartButton.querySelector('img').id='cartMove';
    cartButton.querySelector('p').id='cartText';
    setTimeout(function(){
        cartButton.querySelector('img').removeAttribute('id');
        cartButton.querySelector('p').removeAttribute('id');
    },2000)


    let nameBuy = document.getElementById('productNameF').innerText;
    let photoBuy = document.querySelector('.left img').src;
    let priceBuy = parseInt((document.getElementById('priceF').innerText));

    //it will add buy now item in chekout list
    let q=document.querySelector('.itemBuy');

    //create itembuy1
    let u=document.createElement("div");
    u.classList.add('itemBuy1');
    q.appendChild(u);

    //create productbuy
    let w=document.createElement("div");
    w.classList.add('productBuy');
    u.appendChild(w);

    //create image src
    let e=document.createElement("img");
    e.setAttribute('id' , 'Pphoto');
    e.src=photoBuy;
    w.appendChild(e);

    //create Pname
    let r=document.createElement("p");
    r.classList.add('Pname');
    r.innerText=nameBuy;
    w.appendChild(r);

    // //create size 
    let i=document.createElement("p");
    i.classList.add('Pname1');
    i.innerText=`size-${reset.innerText}`;
    w.appendChild(i);

    //create Pprice
    let y=document.createElement("p");
    y.classList.add('Pprice');
    y.innerText=priceBuy;
    u.appendChild(y);

    let tax=0;

    //calculate subtotal price
    subTotal=subTotal+priceBuy;
    console.log(subTotal);
    document.getElementById('PriceBuy').innerText=subTotal;

    //it will calculate Total with tax
    tax=subTotal*0.05;
    parseFloat(tax.toFixed(3));
    total=subTotal+tax;
    document.getElementById('PriceBuy1').innerText=total;
    document.getElementById('PriceBuy2').innerText=tax;


})

//when user click on buy now 

let buyButton = document.getElementById('buy');

let subTotal=0;

let tax=0;

let total=0;  //total amount variable
buyButton.addEventListener("click" , ()=>{

    //it will check it user selected sixe or not and give alert
    if(reset.innerText===undefined){
        alert('Select Size First');
        return;
    }
    
    //it will swap classes
    document.getElementById('3').classList.remove('buyPageNot');
    document.getElementById('3').classList.add('buyPage');

    document.getElementById('2').classList.remove('productPage');
    document.getElementById('2').classList.add('productPageNot');


    //it will collect data of product for check out
    let nameBuy = document.getElementById('productNameF').innerText;
    let photoBuy = document.querySelector('.left img').src;
    let priceBuy = parseInt((document.getElementById('priceF').innerText));

    //it will add buy now item in chekout list
    let q=document.querySelector('.itemBuy');

    //create itembuy1
    let u=document.createElement("div");
    u.classList.add('itemBuy1');
    q.appendChild(u);

    //create productbuy
    let w=document.createElement("div");
    w.classList.add('productBuy');
    u.appendChild(w);

    //create image src
    let e=document.createElement("img");
    e.setAttribute('id' , 'Pphoto');
    e.src=photoBuy;
    w.appendChild(e);

    //create Pname
    let r=document.createElement("p");
    r.classList.add('Pname');
    r.innerText=nameBuy;
    w.appendChild(r);

    //create size 
    let i=document.createElement("p");
    i.classList.add('Pname1');
    i.innerText=`size-${reset.innerText}`;
    w.appendChild(i);

    //create Pprice
    let y=document.createElement("p");
    y.classList.add('Pprice');
    y.innerText=priceBuy;
    u.appendChild(y);

    //it will increase count of nav cart
    count=count+1;
    document.getElementById('countValue').classList.remove('visibility');
    document.getElementById('countValue').innerText=count;

    //calculate subtotal price
    subTotal=subTotal+priceBuy;
    console.log(subTotal);
    document.getElementById('PriceBuy').innerText=subTotal;

    //it will calculate Total with tax
    tax=subTotal*0.05;
    parseFloat(tax.toFixed(3));
    total=subTotal+tax+50;


    document.getElementById('PriceBuy1').innerText=total;
    document.getElementById('PriceBuy2').innerText=tax;
    //it will reset size variable
})

//whenuser click on cart in nav bar

let cartBuy=document.querySelector('.cartImage');

cartBuy.addEventListener("click" , ()=>{
    if(count!=0){
        //it will swap classes
        document.getElementById('3').classList.remove('buyPageNot');
        document.getElementById('3').classList.add('buyPage');

        document.getElementById('1').classList.add('commonPageNot');
        document.getElementById('1').classList.remove('commonPage');

        document.getElementById('2').classList.remove('productPage');
        document.getElementById('2').classList.add('productPageNot');

        document.getElementById('logo').innerText="X";
        document.getElementById('logo').classList.add('HomeButton');
        }
        else{
            alert("Cart is Empty");
        }
    
})



// COmponent of Buy NOw page


let discountBtn=document.getElementById('discountButton');

let discountValue=0;
let discountCoupon=[
    {coupon:"lmao",value:-200},
    {coupon:"thisbhay",value:-300},
    {coupon:"maulana69",value:-500},
    {coupon:"lmaoded",value:-400},
]
let discountName=document.getElementById('discountPlace').value;
discountBtn.addEventListener('click' ,()=>{
    total=document.getElementById('PriceBuy1').innerText; //total amount variable
    let discountCounter=true;
    discountName=document.getElementById('discountPlace').value;
    if(discountName==""){
        discountCounter=false;
        alert("value cannot be empty");

    }
    for(let val of discountCoupon){
        if(val.coupon===discountName && discountBtn.innerText!="REMOVE"){
        discountCounter=false;
    
        console.log(val.value);
        var discount=document.querySelector('.totalBuy');
        //creating discount element to append
        
        var a=document.createElement("div");
        a.classList.add("summaryBuy");
        discount.appendChild(a);

        var b=document.createElement("span");
        b.classList.add("NAmeBuy");
        b.innerText="Discount"
        a.appendChild(b);

        var c=document.createElement("span");
        c.classList.add("disBuy");
        c.innerText=val.value;
        a.appendChild(c);
        
        //apprending them inside html
        discountBtn.innerText="REMOVE";

        //it wil disable the discount field
        document.getElementById('discountPlace').disabled=true;

        //it will calculate price after discount

        discountValue=val.value;
        console.log(typeof(discountValue));

        total=parseFloat(total)+discountValue; //it will calculate price before or remove discount
        document.getElementById('PriceBuy1').innerText=parseFloat(total); //total amount variable

        console.log(typeof(total));
        console.log(total);
        
        break
        }
    }
    if(discountCounter===true && discountBtn.innerText!="REMOVE"){
        alert("inValid");
        document.getElementById('discountPlace').value="";

    }
    //check if discount is applied or not
    if(discountBtn.innerText==="REMOVE" && discountCounter!=false){
        discountBtn.innerText="APPLY";

        //it wil enable the discount field
        document.getElementById('discountPlace').disabled=false;
        document.getElementById('discountPlace').value="";

        var d=document.getElementsByClassName('summaryBuy');
        d[3].remove();
        console.log(typeof(discountValue));
        total=total-discountValue; //it will calculate price before or remove discount
        document.getElementById('PriceBuy1').innerText=parseFloat(total); //total amount variable
        

        
    }


})

//it will remove product form buy now

let del=document.querySelector('.itemBuy');

del.addEventListener("click",(e)=>{

    if(e.target.src!=null){
        //it will find the price of deleted itemdl
        let delt=e.target.parentElement;
        let priceBuy=delt.parentElement.querySelector('.Pprice').innerText;
        parseFloat(priceBuy);
        console.log(a);
        
        //it will reduce count of nav cart
    count=count-1;
    document.getElementById('countValue').classList.remove('visibility');
    document.getElementById('countValue').innerText=count;

    if(count==0){
        //shiping money
        total=50;
        document.getElementById('PriceBuy1').innerText=total;

        //it will remove discount if applied

        
        //come back to common page
        ComeHome();
        document.getElementById('countValue').classList.add('visibility');
    
    }

    //calculate subtotal price
    subTotal=subTotal-priceBuy;
    console.log(subTotal);
    document.getElementById('PriceBuy').innerText=subTotal;

    //it will calculate Total with tax
    tax=subTotal*0.05;
    parseFloat(tax.toFixed(3));
    total=subTotal+tax+50;
    document.getElementById('PriceBuy1').innerText=total;
    document.getElementById('PriceBuy2').innerText=tax;

    //it will delete the elemment
    console.log(delt);
    delt.parentElement.remove();
    }
console.log(e.target);
})

