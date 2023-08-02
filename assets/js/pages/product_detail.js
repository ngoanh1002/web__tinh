import { apiurl, endpoint, fetchdata, formatprice } from "../components/help.js";



let section = document.createElement('section')
section.classList.add('home_details')
section.innerHTML = `


<div class="container">
    
</div>


`;
let main = document.querySelector("main")
main.appendChild(section)
export async function handleclassactive(div, e) {
  if (div.querySelector('.size span.active')) {
    div.querySelector('size span.active').classList.remove('active');
  }
  e.currentTarget.classList.add('active');
}

export async function render(params) {
  let {id, name, price, image} = params;
  let div = document.createElement("div");
  div.classList.add("products_details_page");
  let formattedPrice = await formatprice(price);
  div.innerHTML = `
  <div class="col-7">
  <div class="slider">
    <div class="slide cake-img" style="background-image: url(${image[0]})"></div>
    <div class="images"></div>
  </div>
  <div class="col-5">
      <h3 class="name">${name}</h3>
      <h4>size</h4>
      <div class="size"></div>
      <div class="quantity">
          <div class="buttons_added">
              <button class="minus is-form"><i class="fa-solid fa-minus fa-lg"></i></button>
              <span class="input-qty">${quantity}</span>
              <button class="plus is-form"><i class="fa-solid fa-plus fa-lg"></i></button>
          </div>
          <button class="btn-add">thêm vào giỏ hàng</button>
      </div>
      <h4 class="price">${formattedPrice}</h4>
  </div>
</div>
 
	`;
 
    let span = document.createElement('span');
    span.innerHTML = `${size}`;
    span.setAttribute('data-size', size);
    span.addEventListener('click', function (e) {
      handleclassactive(div, e);
    });
    document.querySelector('.size').appendChild(span);

  

  document.querySelector('.container').appendChild(div);
  };
 



