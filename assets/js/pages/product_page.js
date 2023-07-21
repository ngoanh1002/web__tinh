import { apiurl, endpoint, fetchdata } from "../components/help.js";

let getclothes = {
    apiurl: apiurl,
    endpoint: endpoint.clothes,
    method: 'GET',
    async callback(params) {
        await renderclothes(params)
    }

}
let getclothes1 = {
    apiurl: apiurl,
    endpoint: endpoint.clothes1,
    method: 'GET',
    async callback(params) {
        await renderclothes1(params)
    }

}

let section = document.createElement('section')
section.classList.add('home')
section.innerHTML = `

<section>
<div class="products">
    
</div>
</section>

<section>
<div class="products1">

</div>
</section>
`;
let main = document.querySelector("main")
main.appendChild(section)

async function renderclothes(params) {
    for (let clothes of params){
        let {name, price, image, id} = clothes;
        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
           <div class="image" style="background-image: url(${image});"></div>
           <div class="text-box">
           <a href="/product_detail/${id}">
           <p class="name">${name}</p>
           <p class="price">${price}</p>
           </div>
        `;
        document.querySelector('.products').appendChild(div);
       
    }
}
async function renderclothes1(params) {
    for (let clothes1 of params){
        let {name, price, image, id} = clothes1;
        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
           <div class="image" style="background-image: url(${image});"></div>
           <div class="sud-box">
           <p class="name">${name}</p>
           <p class="price">${price}</p>
           </div>
        `;
        document.querySelector('.products1').appendChild(div);
       
    }
}

  

let aosScript = document.createElement('script'); 
aosScript.src = '/assets/libs/aos-master/aos.js';
aosScript.async = true;
document.body.appendChild(aosScript);

aosScript.onload = function() {
    AOS.init();
};
await fetchdata(getclothes);
await fetchdata(getclothes1);

export async function render() {
    let template = document.createElement('div');
    template.classList.add('about-page');
    template.innerHTML = '';

    return template;
}