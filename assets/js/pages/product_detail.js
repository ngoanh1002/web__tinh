import { apiurl, endpoint, fetchdata, formatprice } from "../components/help.js";

let section = document.createElement('section')
section.classList.add('home_details')
section.innerHTML = `


<div class="container">
    
</div>


`;
let main = document.querySelector("main")
main.appendChild(section)

export async function render(params) {
  let {id, name, price, image} = params;
  let div = document.createElement("div");
  div.classList.add("products_details_page");
  let formattedPrice = await formatprice(price);
  div.innerHTML = `
  <div class="content">
      <h3>${name}</h3>
      <h4 class="price">${formattedPrice}</h4>
  </div>
</div>
 
	`;

  document.querySelector('.container').appendChild(div);
  };
 



