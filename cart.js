let cartdata = JSON.parse(localStorage.getItem("cartItem")) || [];


displayData(cartdata);

function displayData(cartdata){
    let itm = 0;
    document.querySelector(".left_img").innerHTML="";
    cartdata.forEach(function (ele,index) {
        let item=document.querySelector(".total_items>h2");
        item.innerText= (++itm)+" "+"Items in Your cart";
        // left_img div starts
        let left_img = document.createElement("div");
        left_img.setAttribute("class", "left");//main div to append all child div (append one and two)
        // 1st div
        let img_div = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", ele.img)
        // img_div.append(image);//(one)
    
                               
        // class right info
        let right_info = document.createElement("div");
        right_info.setAttribute("class", "right_info")//(append 1to n div) (two)
        // class_first
        let class_first = document.createElement("div");
        class_first.setAttribute("class", "first");//1
    
        let product_name = document.createElement("h3");
        product_name.innerText = ele.name;
        let delete_btn = document.createElement("div");
        let desp_img = document.createElement("img");
        desp_img.setAttribute("src", "https://assets.pharmeasy.in/web-assets/dist/9bb4e1e1.svg")
        let del_img = document.createElement("img");
        del_img.setAttribute("src", "https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg")
        del_img.addEventListener("click",function(){
             deletItem(ele,index)
        })
    
        let company_name = document.createElement("div");
        company_name.setAttribute("class", "company_name");
        company_name.innerText = ele.company_name;//2
    
        let tb_strip = document.createElement("div");
        tb_strip.setAttribute("class", "tb_strip");
        tb_strip.innerText = ele.tb_name;//3
    
        let price_qty = document.createElement("div");
        price_qty.setAttribute("class", "price_qty");
    
        let qty = document.createElement("select");
        qty.setAttribute("class", "qty");
        qty.innerHTML = `<option value="" disabled selected hidden>Oty 1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>;`
        qty.addEventListener("change",function(){
            changefun(ele,qty)
        })


        let price_div=document.createElement("div");
        price_div.setAttribute("class","price");
        price_div.innerText=("₹"+" "+ele.price);
        price_qty.append(qty,price_div);//4
        
        let deliverytime=document.createElement("div");//5
        deliverytime.innerText="Delivey:Tommorow,before 10 pm";

        img_div.append(image);//(one)
        
        delete_btn.append(desp_img, del_img);
        class_first.append( product_name,delete_btn);
        right_info.append(class_first,company_name,tb_strip,price_qty,deliverytime);
        left_img.append(img_div,right_info)
        document.querySelector(".left_img").append(left_img);

        document.querySelector(".total").innerText=("₹"+ele.price);
        document.querySelector(".total2").innerText=("₹"+ele.price);

        //cartdata.push(data);
        localStorage.setItem("cartItem",JSON.stringify(cartdata));
        
    });
}

function changefun(ele,qty){
    //console.log(typeof(qty.value));
    let totalprice=Number(qty.value)*Number(ele.price);
    console.log(typeof(qty.value));
    let total1=document.querySelector(".price")
    total1.innerText=("₹"+" "+totalprice);
    // displayData(datacart)
    document.querySelector(".total").innerText=("₹"+totalprice);
    document.querySelector(".total2").innerText=("₹"+totalprice);
    
}
function deletItem(ele,index){
    console.log(ele,index);
    cartdata.splice(index,1);
    localStorage.setItem("cartItrem",JSON.stringify(cartdata));
    displayData(cartdata);
    
}