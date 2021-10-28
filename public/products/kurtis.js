let allKurtis = [
  {
    image:
      "https://rukminim1.flixcart.com/image/580/696/kpzt7680/kurta/p/z/o/l-lc005-leaf-creation-original-imag44ypb9wtybpa.jpeg?q=50",
    comanyName: "LIBA",
    name: "Women Printed Crepe Frontslit Kurta ",
    color: "black",
    price: 2100,
    index: 1,
    pid: 29,
  },

  {
    image:
      "https://rukminim1.flixcart.com/image/580/696/kpinwy80/kurta/r/z/0/xl-fd014-black-fashion-depth-original-imag3qcwpvhgehs5.jpeg?q=50",
    comanyName: "W",
    name: "Women Printed Rayon Flared Kurta  ",
    color: "black",
    price: 499,
    index: 1,
    pid: 30,
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/580/696/khtghow0-0/kurta/z/q/f/m-black-jacket-asha-fashions-original-imafxr8tjzrgcxz7.jpeg?q=50",
    comanyName: "COLOR PLUS",
    name: "Women Embroidered Straight Kurta",
    color: "black",
    price: 3999,
    index: 1,
    pid: 31,
  },

  {
    image:
      "https://rukminim1.flixcart.com/image/580/696/ksoz53k0/kurta/d/w/0/l-royal-dharm-original-imag67fjzmvapfkh.jpeg?q=50",
    comanyName: "LIBA",
    name: "Women Embroidered Anarkali Kurta ",
    color: "maroon",
    price: 499,
    index: 1,
    pid: 32,
  },

  {
    image:
      "https://rukminim1.flixcart.com/image/580/696/kkyc9zk0/kurta/e/u/z/s-a-j-001-pink-yesly-original-imagy6j2et3pxa4h.jpeg?q=50",
    comanyName: "COLOR PLUS",
    name: "Women Printed Poly Crepe Kurta ",
    color: "pink",
    price: 599,
    index: 1,
    pid: 33,
  },

  {
    image:
      "https://rukminim1.flixcart.com/image/580/696/kdoup3k0-0/kurta/p/j/w/xl-smart-pink-arvicreation-original-imafujd6uxzcbtbh.jpeg?q=50",
    comanyName: "HETSA",
    name: "Women Printed Frontslit Kurta",
    color: "pink",
    price: 999,
    index: 1,
    pid: 34,
  },

  {
    image:
      "https://rukminim1.flixcart.com/image/580/696/krme93k0/kurta/i/0/h/l-anarkali-doisa-original-imag5ddx85ypgrqa.jpeg?q=50",
    comanyName: "HETSA",
    name: "Women printed Rayon Anarkali Kurta",
    color: "yellow",
    price: 1999,
    index: 1,
    pid: 35,
  },

  {
    image:
      "https://rukminim1.flixcart.com/image/580/696/kkr72q80/kurta/t/e/u/xxl-kurti-111-jixpox-original-imagyfegmacpqx9k.jpeg?q=50",
    companyName: "HETSA",
    name: "Women printed solid straight kurta",
    color: "yellow",
    price: 1499,
    index: 1,
    pid: 36,
  },
];
localStorage.setItem("kurtis", JSON.stringify(allKurtis));

// function goKurtisPage() {
//   window.location.href = "index";
//   console.log("Sunil");
// }

function kurtiproduct() {
  window.location.href = "kurtis";
}

let kurtiData = JSON.parse(localStorage.getItem("kurtis"));
console.log("kurtiData:", kurtiData);

let c1 = document.getElementById("c1");
c1.addEventListener("change", LIBA);

function LIBA() {
  let kurtiData = JSON.parse(localStorage.getItem("kurtis"));

  kurtiData = kurtiData.filter((el) => {
    return el.comanyName == "LIBA";
  });
  displayItems(kurtiData);
}

let c2 = document.getElementById("c2");
c2.addEventListener("change", W);
function W() {
  let kurtiData = JSON.parse(localStorage.getItem("kurtis"));

  kurtiData = kurtiData.filter((el) => {
    return el.comanyName == "W";
  });
  displayItems(kurtiData);
}

let c3 = document.getElementById("c3");
c3.addEventListener("change", HETSA);
function HETSA() {
  let kurtiData = JSON.parse(localStorage.getItem("kurtis"));

  kurtiData = kurtiData.filter((el) => {
    return el.comanyName == "HETSA";
   
  });
  displayItems(kurtiData);
}
let c4 = document.getElementById("c4");
c4.addEventListener("change", COLORPLUS);
function COLORPLUS() {
  let kurtiData = JSON.parse(localStorage.getItem("kurtis"));

  kurtiData = kurtiData.filter((el) => {
    return el.comanyName == "COLOR PLUS";
  });
  displayItems(kurtiData);
}
let c5 = document.getElementById("c5");
c5.addEventListener("change", sort500);

function sort500() {
  let kurtiData = JSON.parse(localStorage.getItem("kurtis"));

  kurtiData = kurtiData.filter((el) => {
    return el.price <= 500;
  });
  displayItems(kurtiData);
}
let c6 = document.getElementById("c6");
c6.addEventListener("change", sort1500);
function sort1500(el) {
  let kurtiData = JSON.parse(localStorage.getItem("kurtis"));

  kurtiData = kurtiData.filter((el) => {
    return el.price >= 500 && el.price <= 1500;
  });
  displayItems(kurtiData);
}
let c7 = document.getElementById("c7");
c7.addEventListener("change", sortabove);
function sortabove(el) {
  let kurtiData = JSON.parse(localStorage.getItem("kurtis"));

  kurtiData = kurtiData.filter((el) => {
    return el.price >= 1500;
  });
  displayItems(kurtiData);
}

let c8 = document.getElementById("c8");
c8.addEventListener("change", black);
function black() {
  let kurtiData = JSON.parse(localStorage.getItem("kurtis"));

  kurtiData = kurtiData.filter((el) => {
    return el.color == "black";
   
  });
  displayItems(kurtiData);
}
let c9 = document.getElementById("c9");
c9.addEventListener("change", yellow);
function yellow() {
  let kurtiData = JSON.parse(localStorage.getItem("kurtis"));

  kurtiData = kurtiData.filter((el) => {
    return el.color == "yellow";
   
  });
  displayItems(kurtiData);
}
let c10 = document.getElementById("c10");
c10.addEventListener("change", pink);
function pink() {
  let kurtiData = JSON.parse(localStorage.getItem("kurtis"));

  kurtiData = kurtiData.filter((el) => {
    return el.color == "pink";
   
  });
    displayItems(kurtiData);
      console.log('kurtiData:', kurtiData)

}

let c11 = document.getElementById("c11");
c11.addEventListener("change", sorted);

function sorted() {
  kurtiData = kurtiData.sort((a, b) => {
    return a.price - b.price;
  });
  displayItems(kurtiData);
}

function displayItems(kurtiData) {
  let productPage = document.getElementById("productPage");
  productPage.innerHTML = null;

  for (let a = 0; a < kurtiData.length; a++) {
    let div = document.createElement("div");
    div.setAttribute("class", "itmsData");

    let imges = document.createElement("img");
    imges.src = kurtiData[a].image;

    let comanyname = document.createElement("h4");
    comanyname.innerHTML = kurtiData[a].comanyName;
    comanyname.style.lineHeight = "10px";

    let name = document.createElement("p");
    name.innerHTML = kurtiData[a].name;

    let colorr = document.createElement("p");
    colorr.innerHTML = `Color:   ${kurtiData[a].color}`;

    let prize = document.createElement("p");
    prize.innerHTML = `Price: ${kurtiData[a].price}`;

    div.append(imges, comanyname, name, colorr, prize);
    productPage.appendChild(div);
  }
}
displayItems(kurtiData);

let itmsData = document.querySelectorAll(".itmsData");

function showcart() {
  console.log('showcart');
    
    window.location.href = "cart";
  }

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

for (let ii = 0; ii < itmsData.length; ii++) {
  itmsData[ii].addEventListener("click", () => {
    setitems(allKurtis[ii]);
    totalcost(allKurtis[ii]);
  });
}

let empty1 = document.getElementsByClassName("fa-shopping-cart")[0];

empty1.addEventListener("click", function () {
  console.log("showcart2");
  let redd = document.getElementById("redd");
  if ((redd.style.display = "none")) {
    console.log("showcart3");
    window.location.href = "empty_cart";
  }
});
