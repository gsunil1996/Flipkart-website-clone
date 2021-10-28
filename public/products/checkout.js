let cartcost = parseInt(localStorage.getItem("totalcost"));
let discount = Math.round(cartcost - (cartcost * 5) / 100);

let payment = document.getElementsByClassName("payment")[0];
let paymentt = document.getElementsByClassName("login3")[0];
let ad =  document.getElementsByClassName("ad")[0];
let form = document.getElementsByClassName("main")[0];
let login2 = document.getElementsByClassName("login2")[0];
let B = document.getElementsByClassName("B")[0];
let namee = document.getElementById("fname");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let adr = document.getElementById("adr");
let zip = document.getElementById("zip");
let cname = document.getElementById("cname");
let ccnum = document.getElementById("ccnum");
let expmonth = document.getElementById("expmonth");
let expyear = document.getElementById("expyear");
let cvvNo = document.getElementById("cvvNo");
let headingH3 = document.getElementById("h3");


B.innerHTML = ` <div class="bill" >
          <h3>Price details</h3>
              <hr>
              <div>
                  <div>
                      <div>Total Payable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${cartcost}</div>
                    </div>
                    <hr>
                </div>
              <div class="details">
                <p>Discount applicable <br>
                Enter <span> MASAI5</span> ang grab 5% discount on your total bill.</p>
                <input id="coupon" class="input" type="text" placeholder= "Enter coupon code" />
                <button onclick="getCoupon()" class="apply">Apply</button>
                <p> Your Total Savings on this order</p>
                <hr> <h3 id="h3"> Total Payable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${cartcost}</h3>
              </div>
            </div>
            <div >
               <img class="sticker"
                      src="https://rukminim1.flixcart.com/lockin/736/176/images/promotion_banner_v2_inactive_2.png?q=50"
                      data-tkid="lo_sb:10046c4e-b065-0bb9-26fa-46160759b518.ct:STATIC_BANNER;bn:CCI-InActive-Migrated;"
                    />
                  </div>
            <div class="text" ><b>
                Safe and Secure Payments. Easy returns. 100% Authentic
                products.
           </b> </div>`
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (namee != null || email != null || mobile != null || adr != null || zip != null) {
        payment.style.display = "block";
      paymentt.style.display = "none";
      login2.style.display = "block";

    } 
});
payment.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cname != null || ccnum != null || expmonth != null || expyear != null || cvvNo != null) {
    window.location.href = "finish";
  }
});
  
function getCoupon() {
  let coupon = document.getElementById("coupon").value;
  if (coupon == "MASAI5") {
    h3.innerHTML = ` Total Payable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${discount}`
  }
  else {
    alert("Coupon not apllied!");
    h3.innerHTML= `Total Payable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${cartcost}`
  }
}

function toIndex() {
    window.location.href = "index";
}