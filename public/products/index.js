
  // slidebar
  let arr = [
    "https://rukminim1.flixcart.com/flap/3376/560/image/7c5b13aec8c0069c.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/3376/560/image/06b0ba3cd7cb8627.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/3376/560/image/de0e6ec39f956ae8.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/3376/560/image/c7916080f3d4873b.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/3376/560/image/c377c7fc782bb57d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/3376/560/image/c377c7fc782bb57d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/3376/560/image/5cbc6852b9456255.jpg?q=50",
  ];

  let i = 0;

  function slideshow() {
    let div = document.getElementById("slideshow");

    let img = document.createElement("img");

    img.src = arr[0];

    div.append(img);

    setInterval(function () {
      if (i == arr.length) {
        i = 0;
      }
      img.src = arr[i];
      i++;
    }, 2000);
  }

  slideshow();
  var h5 = document.getElementById("h5");
  var drop = document.getElementById("drop");

  h5.onmouseover = function () {
    drop.style.display = "block";
    drop.style.width = `${170}` + "px";
  };

  drop.onmouseover = function () {
    drop.style.display = "block";
  };

  drop.onmouseout = function () {
    drop.style.display = "none";
  };

  var h6 = document.getElementById("h6");
  var dropp = document.getElementById("dropp");

  h6.onmouseover = function () {
    dropp.style.display = "block";
    dropp.style.width = `${170}` + "px";
  };

  dropp.onmouseover = function () {
    dropp.style.display = "block";
  };

  dropp.onmouseout = function () {
    dropp.style.display = "none";
  };

  var h7 = document.getElementById("h7");
  var droppp = document.getElementById("droppp");

  h7.onmouseover = function () {
    droppp.style.display = "block";
    droppp.style.width = `${170}` + "px";
  };

  droppp.onmouseover = function () {
    droppp.style.display = "block";
  };

  droppp.onmouseout = function () {
    droppp.style.display = "none";
  };

  var h8 = document.getElementById("h8");
  var dropppp = document.getElementById("dropppp");

  h8.onmouseover = function () {
    dropppp.style.display = "block";
    dropppp.style.width = `${170}` + "px";
  };

  dropppp.onmouseover = function () {
    dropppp.style.display = "block";
  };

  dropppp.onmouseout = function () {
    dropppp.style.display = "none";
  }; 

// slidebar done

let products = [
     {
      image:
      "https://rukminim1.flixcart.com/image/312/312/kmds4nk0/mobile/2/m/e/note-10-pro-max-mobhqsd1-redmi-original-imagfatnscznx75f.jpeg?q=70",
      name: "REDMI Note 10 Pro Max",
      dsc: "5020mAh Battery",
      price:  21289,
      index: 1,
      pid:1,
      },
   
    {
      image:
      "https://rukminim1.flixcart.com/image/312/312/kfvfwy80/mobile/x/p/b/poco-c3-mzb07rhin-original-imafw8zkfygmfgfr.jpeg?q=70",
      name: "poco C3",
      dsc: "No Cost EMI",
      price:  8499,
      index: 1,
      pid:2,
    },
      {
      image:
      "https://rukminim1.flixcart.com/image/312/312/kmmcrrk0/mobile/y/l/m/a53-cph2127-oppo-original-imagfgzsh5awf364.jpeg?q=70",
      name: "Oppo A53",
      dsc: "10% Offer",
      price:  13990,
      index: 1,
      pid:3,
      },

      {
      image:
      "https://rukminim1.flixcart.com/image/312/312/knrsjgw0/mobile/f/o/w/8-5g-rmx3241-realme-original-imag2d8eksc2szzy.jpeg?q=70",
      name: "realme 8 5G",
      dsc: "New Launch",
      price:  8499,
      index: 1,
      pid:4,
      },

      {
      image:
      "https://rukminim1.flixcart.com/image/416/416/kq43iq80/mobile/b/t/n/s20-fe-5g-sm-g781b-ds-samsung-original-imag47fdfgmg2gnh.jpeg?q=70",
      name: "SAMSUNG S20 FE 5G",
      dsc: "4500mAh Battery",
      price:  56990,
      index: 1,
      pid:5,
      },

      {
      image:
      "https://rukminim1.flixcart.com/image/312/312/kq6yefk0/mobile/b/2/f/11-lite-m2101k9ai-mi-original-imag496egxryygvz.jpeg?q=70",
      name: "Mi 11 Lite",
      dsc: "4250mAh Battery",
      price:  21999,
      index: 1,
      pid:6,
      },

      {
      image:
      "https://rukminim1.flixcart.com/image/312/312/knm2s280/mobile/v/l/u/hot-10-play-x688b-infinix-original-imag29hfaedkgdfe.jpeg?q=70",
      name: "Infinix Hot 10 Play",
      dsc: "6000mAh Battery",
      price:  8999,
      index: 1,
      pid:7,
      },
     
      {
      image:
      "https://rukminim1.flixcart.com/image/612/612/k0vbgy80pkrrdj/speaker/mobile-tablet-speaker/4/n/n/boat-stone-grenade-original-imafg96ffpnpgdv4.jpeg?q=70",
      name: "boAt Stone Grenade 5 W",
      dsc: "Portable Bluetooth Speaker",
      price:  1599,
      index: 1,
      pid:8,
      },

      {
      image:
      "https://rukminim1.flixcart.com/image/612/612/kfpq5jk0-0/speaker/mobile-tablet-speaker/i/g/t/jblgoplusblkeu-jbl-original-imafw3r9a7mmfgkm.jpeg?q=70",
      name: "JBL Go PLUS",
      dsc: "Portable Bluetooth Speaker",
      price:  1691,
      index: 1,
      pid:9,
      },

      {
      image:
      "https://rukminim1.flixcart.com/image/416/416/jl6wjgw0/speaker-refurbished/f/h/q/u-f-203g-f-d-original-imaf8dugy4bbuxkr.jpeg?q=70",
      name: "F&D 203G 11 W",
      dsc: "Portable Laptop/Desktop Speaker",
      price:  1999,
      index: 1,
      pid:10,
      },

      {
      image:
      "https://rukminim1.flixcart.com/image/416/416/kbqu4cw0/headphone/i/t/x/airdopes-381-boat-original-imaftf76nvezbhyk.jpeg?q=70",
      name: "boAt Airdopes with",
      dsc: "ASAP charge Bluetooth Headset",
      price:  1499,
      index: 1,
      pid:11,
      },

      {
      image:
      "https://rukminim1.flixcart.com/image/612/612/kjem3rk0-0/headphone/6/h/l/airbass-combuds-boult-audio-original-imafyz879qaqszu8.jpeg?q=70",
      name: "Boult Audio AirBass",
      dsc: "Combuds Bluetooth Headset",
      price:  2999,
      index: 1,
      pid:12,
      },

      {
      image:
      "https://rukminim1.flixcart.com/image/612/612/k3ncakw0pkrrdj/headphone/g/t/q/jbl-t500bt-original-imafjf6zmfturzd4.jpeg?q=70",
      name: "JBL T500BT",
      dsc: "Limitted offer",
      price:  2979,
      index: 1,
      pid:13,
      },

      {
      image:
      "https://rukminim1.flixcart.com/image/416/416/ki3gknk0/memory-card/microsdhc/v/h/z/sandisk-sdsqua4-032g-gn6mn-original-imafxyzwgscpjxb9.jpeg?q=70",
      name: "SanDisk Ultra 32 GB",
      dsc: "Top deal",
      price:  499,
      index: 1,
      pid:14,
          },
     { image:
        "https://rukminim1.flixcart.com/image/495/594/kl6wx3k0/t-shirt/y/n/i/s-bbt-try-this-original-imagydarhsryeahn.jpeg?q=50",
      name: "T-Shirts",
      dsc: "Up to 40% OF",
      price:  299,
      index: 1,
      pid:15,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/495/594/k44hksw0/t-shirt/m/t/r/m-dv24solidmustard-diversify-original-imafkbzvhcn3vgs7.jpeg?q=50",
      name: "T-Shirts",
      dsc: "Up to 40% OF",
      price:   199,
      index: 1,
      pid:16,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/khdqnbk0/cap/h/v/u/free-luxero-black-beanie-knotyy-original-imafxerwqft8uzmz.jpeg?q=70",
      name: "cap",
      dsc: "Up to 40% OF",
      price:  249,
      index: 1,
      pid:17,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/jxw5g280/cap/v/e/2/free-mercdes-red-001-jannat-fashion-original-imaf4ehf96zwu5qu.jpeg?q=70",
      name: "super cap",
      dsc: "Up to 40% OF",
      price:  269,
      index: 1,
      pid:18,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/495/594/kosxzm80/jean/g/v/3/36-pjdnpskpk94859-peter-england-original-imag35v3dwjn5wks.jpeg?q=50",
      name: "jeans",
      dsc: "Up to 30% OF",
      price:  2199,
      index: 1,
      pid: 19,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/495/594/k3ncakw0pkrrdj/shirt/8/g/u/l-a3-liner-1-sur-t-original-imafmqhfdzp8fxhh.jpeg?q=50",
      name: "shirt",
      dsc: "Up to 30% OF",
      price:  1299,
      index: 1,
      pid:20,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/495/594/kdnf98w0hlty2aw-0/short/x/f/j/xxl-1-fc3017-fastcolors-original-imafuhwg2yfyxjye.jpeg?q=50",
      name: "short",
      dsc: "Up to 30% OF",
      price: 299,
      index: 1,
      pid:21,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/kmkxbww0/hammock-swing/x/a/a/white-hammock-swing-hanging-chair-swingzy-original-imagfg866rvdhsga.jpeg?q=70",
      name: "swing chair",
      dsc: "Furniture Bestsellers",
      price:  1159,
      index: 1,
      pid:22,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/klcmoi80/bean-bag-cover/a/i/1/xl-xl-bean-bag-cover-without-beans-black-shira-24-original-imagyhxg4ynyjfzf.jpeg?q=70",
      name: "bean bag cover",
      dsc: "Furniture Bestseller",
      price:  1593,
      index: 1,
      pid:23,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/kkprmvk0/sofa-sectional/w/b/6/symmetrical-grey-cotton-ga-sf-01-furinno-natural-finish-original-imagyy2jswj7mhyh.jpeg?q=70",
      name: "Sofa",
      dsc: "Furniture Bestsellers",
      price:  5159,
      index: 1,
      pid:24,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/kf4ajrk0/rack-shelf/5/p/7/tv-console-unit-black-brown-furnifry-original-imafvnfkkusenjet.jpeg?q=70",
      name: "Tv Stand",
      dsc: "Furniture Bestsellers",
      price:  3159,
      index: 1,
      pid:25,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/koixwnk0/office-study-chair/c/5/c/1-pp-polypropylene-marcozy-001-savya-home-original-imag2ywzhppcqz6t.jpeg?q=70",
      name: "Chair",
      dsc: "Furniture Bestsellers",
      price:  959,
      index:25,

pid:26,    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/k6jnfrk0/mirror/j/j/z/phwmset0003-flipkart-perfect-homes-original-imafzyu7tt8bwfqy.jpeg?q=70",
      name: "Wall mirrors",
      dsc: "Furniture Bestsellers",
      price:  599,
      index: 1,
      pid:27,
    },
     {
      image:
        "https://rukminim1.flixcart.com/image/612/612/jog2nbk0/bed/9/z/b/queen-columbia-particle-board-kosmo-glenn-queen-bed-with-box-original-imafawjujqrqsefu.jpeg?q=70",
      name: "Bed",
      dsc: "Furniture Bestsellers",
      price:  5559,
      index: 1,
      pid:28,
    },
];
 let redd = document.getElementById("redd");
  
function showmenu() {
 
  localStorage.setItem("products", JSON.stringify(products));

  let data = JSON.parse(localStorage.getItem("products"));
  

  let menu = document.getElementById("menu");
  let r1 = document.getElementById("r1");
  let r2 = document.getElementById("r2");
  let r3 = document.getElementById("r3");
  let r4 = document.getElementById("r4");
 
  for (var i = 0; i < 7; i++) {
    let div = document.createElement("div");
   div.setAttribute("class","sample")
   let count = 4.6;

    let img = document.createElement("img");
    img.src = data[i].image;
  
      img.style.width = `${69}` + "px";
      img.style.height = `${150}` + "px";
  
    let name = document.createElement("h3");
    name.innerHTML = data[i].name;
   
     let rate = document.createElement("div");
    rate.innerHTML = `<div>
   <span>${count}</span><span class="fa fa-star"></span>
    </div>`;
    rate.setAttribute("id", "rating");
  
   
    
   let dsc = document.createElement("p");
    dsc.innerHTML = data[i].dsc;
    dsc.setAttribute("class", "disc");
 
     let price = document.createElement("p");
    price.innerHTML = ` ₹ &nbsp${data[i].price}`;
    price.setAttribute("class", "pprice");

   
    div.append(img, name,rate, dsc, price);
  
   
    r1.appendChild(div);
   
    // menu.appendChild(r1);
    
  }
    for (var i = 7; i < 14; i++) {
    let div = document.createElement("div");
   div.setAttribute("class","sample")
   

 let count = 4.2;
    let img = document.createElement("img");
    img.src = data[i].image;
  
      img.style.width = `${125}` + "px";
      img.style.height = `${120}` + "px";
    
 
    let name = document.createElement("h3");
    name.innerHTML = data[i].name;
    name.setAttribute("class", "pname");
     let rate = document.createElement("div");
    rate.innerHTML = `<div>
   <span>${count}</span><span class="fa fa-star"></span>
    </div>`;
       rate.setAttribute("id", "rating");

   let dsc = document.createElement("p");
    dsc.innerHTML = data[i].dsc;
    dsc.setAttribute("class", "disc");
  


     let price = document.createElement("p");
    price.innerHTML = ` ₹ &nbsp${data[i].price}`;
    price.setAttribute("class", "pprice");



   ;
    div.append(img, name,rate, dsc, price);
   
      r2.appendChild(div);
      // menu.appendChild(r2);
  }


   for (var i = 14; i < 21; i++) {
    let div = document.createElement("div");
   div.setAttribute("class","sample")
 
 let count = 3.9;

    let img = document.createElement("img");
    img.src = data[i].image;

      img.style.width = `${100}` + "px";
      img.style.height = `${150}` + "px";

    let name = document.createElement("h3");
    name.innerHTML = data[i].name;
    name.setAttribute("class", "pname");
     let rate = document.createElement("div");
    rate.innerHTML = `<div>
   <span>${count}</span><span class="fa fa-star"></span>
    </div> `;
      rate.setAttribute("id", "rating");
 
   let dsc = document.createElement("p");
    dsc.innerHTML = data[i].dsc;
    dsc.setAttribute("class", "disc");
  


     let price = document.createElement("p");
    price.innerHTML = ` ₹ &nbsp${data[i].price}`;
    price.setAttribute("class", "pprice");



   
    div.append(img, name,rate, dsc, price);
   
      r3.appendChild(div);
      // menu.appendChild(r3);
  } 
  for (var i = 21; i < 28; i++) {
     
    let div = document.createElement("div");
   div.setAttribute("class","sample")
    
let count = 3.6;
    let img = document.createElement("img");
    img.src = data[i].image;

    img.style.width = `${130}` + "px";
   img.style.height = `${150}` + "px";
   

    let name = document.createElement("h3");
    name.innerHTML = data[i].name;
    name.setAttribute("class", "pname");
     let rate = document.createElement("div");
    rate.innerHTML = `<div>
   <span>${count}</span><span class="fa fa-star"></span>
    </div>`;
     rate.setAttribute("id", "rating");
    count = count + 0.5;
  
   let dsc = document.createElement("p");
    dsc.innerHTML = data[i].dsc;
    dsc.setAttribute("class", "disc");
  


     let price = document.createElement("p");
    price.innerHTML = ` ₹ &nbsp${data[i].price}`;
    price.setAttribute("class", "pprice");

  
    div.append(img, name,rate, dsc, price);
   
      r4.appendChild(div);
      // menu.appendChild(r4);
  }
}
showmenu()

let sample = document.querySelectorAll(".sample");


for (let i = 0; i < sample.length; i++) {
  sample[i].addEventListener("click", () => {
    setitems(products[i]);
    totalcost(products[i]);
  } )
};



function setitems(prod) {
  let isPresent = false;
    
    let items = JSON.parse(localStorage.getItem("productsInCart"));

    if (items == null) {
      items = []
    }

    for (var l = 0; l < items.length; l++){
      if (prod.pid == items[l].pid) {
        items[l].index = items[l].index + 1
        localStorage.setItem("productsInCart", JSON.stringify(items))
        isPresent = true;
      }
  }
  if (!isPresent) {
        items.push(prod);
        localStorage.setItem("productsInCart", JSON.stringify(items));
  }
    cartnos()
}
  

function cartnos() {
  let productnos = localStorage.getItem("cartnos")
  let itemsinCart = JSON.parse(localStorage.getItem("productsInCart"))

  if (itemsinCart.length != 0) {
        redd.style.display = "block";
    document.querySelector("#redd").textContent = itemsinCart.length;
  }
  else {
    redd.style.display = "none"
  }
  console.log("triggered")
}

function totalcost(itm) {
 
 let cartcost = localStorage.getItem("totalcost")

  if (cartcost != null) {
     cartcost = parseInt(cartcost);
    localStorage.setItem("totalcost", cartcost + itm.price);
  } else {
    localStorage.setItem("totalcost", itm.price);
  }
  
}


function displaycart() {
let cartitems = localStorage.getItem("productsInCart") 
  cartitems = JSON.parse(cartitems);
   
    let productcontainer = document.querySelector(".products");
  let cartcost = localStorage.getItem("totalcost");

    if (cartitems && productcontainer) {
        productcontainer.innerHTML = '';
        Object.values(cartitems).map(item => {
            productcontainer.innerHTML +=
                `<div class="product"><i class="fa-solid fa-circle-xmark"></i>
            <img src= "${item.image}">
  <span>${item.name}</span></div>
  <div class="price">₹${item.price}</div>

  <dic class="qty"><i class="fa-solid fa-circle-xmark"></i>
  <span>${item.index}</span>
  <i class="fa-solid fa-circle-xmark"></i>
  </div>

  <div class="total">₹${item.index * item.price}</div>`
        });
        productcontainer.innerHTML += `<div class="baskettotalcontainer"><h4 class="baskettotaltitle">Basket Total</h4><h4 class="baskettotal">₹``${cartcost}</h4></div>`
            ;

    }

}

displaycart();

function showcart() {
  console.log('showcart');
    
    window.location.href = "cart";
  }

  let empty = document.getElementsByClassName("fa-shopping-cart")[0];
  let red = document.getElementById("redd");

  empty.addEventListener("click", function () {
    if ((red.style.display = "none")) {
      console.log('red:', red)
      window.location.href = "emptycart";
    }
  });

function goKurtisPage() {
  window.location.href = "kurtis";
  console.log("Sunil");
}




let sProduct = document.getElementById('sproduct');

    var setTimerId;
    async function searchData() {
        let query = document.getElementById('myInput2').value;
        console.log(query);

        const str2 = query.charAt(0).toUpperCase() + query.slice(1);

        console.log(str2)

        if (str2.length == "") {
            sProduct.style.display = "flex";
            // window.location.reload();
        }
        else{
         let result = await fetch(`http://localhost:9703/prod/search/${str2}`);
         let dataP = await result.json();
          console.log('dataP:', dataP);
        return dataP;
    }
    }

    
// function takeValue() {
//     att.style.backgroundColor = 'white';
//     if (setTimerId) {
//         return false;
//     }
//     setTimerId = setTimeout(() => {
        
//         main();
//         setTimerId = undefined;
//     }, 500);
//     console.log('setTimerId:', setTimerId);

// };

// function appendData(d) {
//     movies_div.innerHTML = null;
//     if (d.length > 0) {
//         newempty.style.display = "block";
//         empty.style.display = "none";
//         movies_div.style.display = "block";
//     } else {
//         movies_div.style.display = "none";
//     }
//     console.log('d:', d)
//     movies_div.style.background = "white";
//     d?.forEach(({img, store_name, address}) => {
//         let div = document.createElement("div")
//         div.setAttribute("class", "p_Div")
//         let img1 = document.createElement("img");
//         img1.src = img;
//         img1.setAttribute("class", "p_img")
//         let p_el = document.createElement('p');
//         p_el.innerHTML = store_name;
//         p_el.setAttribute("class", "p_Att");
//         let p_add = document.createElement('p');
//         p_add.innerHTML = address;
//         p_add.setAttribute("class", "p_Add");
//         div.append(img1, p_el, p_add);
//         console.log(div)
//         movies_div.append(div);
//         store()
//     });
// };

function appendDataP(d) {
    sProduct.innerHTML = null;
    if (d.length > 0) {
        sProduct.style.display = "flex";
    }
    console.log('d:', d)
    sProduct.style.background = "white";
    d?.forEach(({product_image, product_name, product_price}) => {
        let div = document.createElement("div")
        div.setAttribute("class", "p_Div")
        let img1 = document.createElement("img");
        img1.src = product_image;
        img1.setAttribute("class", "p_img")
        let p_el = document.createElement('p');
        p_el.innerHTML = product_name;
      p_el.setAttribute("class", "p_Att");
    
      let p_pricing = document.createElement('p');   
        p_pricing.setAttribute("class", "p_pricing");
        p_pricing.innerHTML = `From ₹ ${product_price}<span style="color: gray"> (7% off)</span>`;
       let divvv = document.createElement("div");
      divvv.setAttribute("id", "rating");
      divvv.innerHTML = `<div>
   <span>4.2</span><span class="fa fa-star" aria-hidden="true"></span>
    </div>`


        let btn = document.createElement('buttton');
        div.append(img1, p_el,divvv, p_pricing, btn);
        console.log(div)
        sProduct.append(div);
        // store()
    });
};

async function main() {
    let data = await searchData();
    appendDataP(data);
};