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
    div.querySelector('.size span.active').classList.remove('active');
  }
  e.currentTarget.classList.add('active');
}

export async function render(params) {
  let {id, name, price, image, quantity, size} = params;
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
 for (let[k, v] of Object.entries(size)) {
    let span = document.createElement('span');
    span.innerHTML = `${v}`;
    span.setAttribute('data-size', v);
    span.addEventListener('click', function (e) {
      handleclassactive(div, e);
    });
    div.querySelector('.size').appendChild(span);}
    
  
  

  let number = 1;
  let span = div.querySelector('.products_details_page .input-qty');
  let increase = document.querySelector(".products_details_page .increase");
  let decrease = document.querySelector(".products_details_page .decrease");
  
  
  if(increase){
    increase.addEventListener('click', function(){
          number -= 1;
          span.innerHTML = number;
      });
      if(number < 1){ number = 1; }
  }
 
  
  
  if(decrease){
    decrease.addEventListener('click', function(){
          number += 1;
          span.innerHTML = number;
      });
  }



  document.querySelector('.container').appendChild(div);