import {
  apiurl,
  endpoint,
  fetchdata,
  formatprice,
} from "../components/help.js";

let cart = {};
if (localStorage.getItem("cart-id"))
  cart = JSON.parse(localStorage.getItem("cart-id"));
let section = document.createElement("section");
section.classList.add("home_details");
section.innerHTML = `

<div class="container">
    
</div>


`;
let main = document.querySelector("main");
main.appendChild(section);
export async function handleclassactive(div, e) {
  if (div.querySelector(".size span.active")) {
    div.querySelector(".size span.active").classList.remove("active");
  }
  e.currentTarget.classList.add("active");
}

export async function render(params) {
  let { id, name, price, image, quantity, size } = params;
  let div = document.createElement("div");
  div.classList.add("products_details_page");
  let formattedPrice = await formatprice(price);
  div.innerHTML = `
<div class="col-5">
  <div class="slider">
    <div class="slide clother-img" style="background-image: url(${image[0]})"></div>
    <div class="images"></div>
  </div>
  
</div>
<div class="col-5">
      <h3 class="name">${name}</h3>
      <h4 class="price">${formattedPrice}</h4>
      <h4>size</h4>
      <div class="size"></div>
      <div class="quantity">
          <div class="buttons_added">
          <button class="btn increase"><i class="fa-solid fa-minus fa-lg"></i></button>
          <span class="input-qty">${quantity}</span>
          <button class="btn decrease"><i class="fa-solid fa-plus fa-lg"></i></button>
          </div>
          <button class="btn add">thêm vào giỏ hàng</button>
      </div>
      
  </div>
 
	`;

  for (let [k, v] of Object.entries(size)) {
    let span = document.createElement("span");
    span.innerHTML = `${v}`;
    span.setAttribute("data-size", v);
    span.addEventListener("click", function (e) {
      handleclassactive(div, e);
    });
    div.querySelector(".size").appendChild(span);
  }

  let increase = div.querySelector(".increase");
  let decrease = div.querySelector(".decrease");
  let qty = div.querySelector(".input-qty");
  let number = parseInt(qty.innerHTML);

  async function handlecplup(type) {
    if (type == "decrease") {
      decrease.addEventListener("click", function () {
        number += 1;
        qty.innerHTML = number;
      });
    }
    if (type == "increase") {
      increase.addEventListener("click", function () {
        number -= 1;
        if (number < 1) {
          number = 1;
          alert("Lỗi số lượng sản phẩm");
        }
        qty.innerHTML = number;
      });
    }
  }
  handlecplup("increase");
  handlecplup("decrease");

  div.querySelector(".add").addEventListener("click", function () {
    let size_active = div.querySelector(".size span.active");
    let key = name;
    if (!size_active) {
      alert("bạn chưa chọn size");
      return false;
    }
    if (cart[key]) {
      cart[key].quantity += number;
      cart[key].totalprice = cart[key].quantity * cart[key].price;
      localStorage.setItem("cart-id", JSON.stringify(cart));
    } else {
      cart[key] = {
        quantity: number,
        name: name,
        price: price,
        size: size_active.getAttribute("data-size"),
        image: image,
        totalprice: price * number,
      };
    }
    localStorage.setItem("cart-id", JSON.stringify(cart));
    updatatotalquantity(cart);
  });

  section.querySelector(".container").appendChild(div);
  return div;
}

export async function updatatotalquantity() {
  let totalquantity = 0;
  for (let [k, v] of Object.entries(cart)) {
    totalquantity += v.quantity;
  }
  localStorage.setItem("totalquantity", JSON.stringify(totalquantity));
  document.querySelector(".cartquantity").innerHTML = `${totalquantity}`;
  console.log(totalquantity);
  if (totalquantity == 0) {
    document.querySelector(".cartquantity").innerHTML = ``;
  }
}
