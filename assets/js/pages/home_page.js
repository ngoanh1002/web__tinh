import { apiurl, endpoint, fetchdata, formatprice } from "../components/help.js";

let getclother = {
    apiurl: apiurl,
    endpoint: endpoint.clother,
    method: 'GET',
    async callback(params) {
        await renderclother(params)
    }

}
let getclother1 = {
    apiurl: apiurl,
    endpoint: endpoint.clother1,
    method: 'GET',
    async callback(params) {
        await renderclother1(params)
    }

}

let section = document.createElement('section')
section.classList.add('home')
section.innerHTML = `
<section>
<div class='over' data-aos="fade-up">
 <div><img src="/assets/images/Dekstop-1-Black-1.png" alt=""></div>
</div>
</section>


<section>
<div data-aos="fade-up">
<h2 class="sec-title">SẢN PHẨM NỔI BẬT CỦA NNA® </h2>
<div class="products">

</div>

    
</div>
</section>
<section>

    <h2 class="sec-title">THỂ HIỆN CÁ TÍNH CÙNG NNA®  TRONG MÙA HÈ NÀY</h2>
 <video class="video" autoplay loop muted src="/assets/images/Mia_framengang_18.5.mp4" type="video/mp4"></video>
</section>


<section>
<div data-aos="fade-left">

<h2 class="sec-title">BỘ PHỐI CỦA NNA® </h2>
<div class="products1">
</div>

</div>
</section>
`;
let main = document.querySelector("main")
main.appendChild(section)

async function renderclother(params) {
    for (let clother of params){
        let {name, price, image, id} = clother;
        let div = document.createElement('div');
        div.classList.add('item');
        let formattedPrice = await formatprice(price);
        div.innerHTML = `
        <a href="/product_detail/${id}">
        <div>
       <div class="image" style="background-image: url(${image[0]});"></div>
       <div class="text-box">
       <p class="name">${name}</p>
       <p class="price">${formattedPrice}</p>
       </div>
       </div>

           
        `;
        document.querySelector('.products').appendChild(div);
       
    }
}
async function renderclother1(params) {
    for (let clother1 of params){
        let {name, price, image, id} = clother1;
        let div = document.createElement('div');
        div.classList.add('item');
        let formattedPrice = await formatprice(price);
        div.innerHTML = `
        <a href="/product_detail/${id}">
        <div>
           <div class="image" style="background-image: url(${image});"></div>
           <div class="sud-box">
           <p class="name">${name}</p>
           <p class="price">${formattedPrice}</p>
           
           </div>
           </div>
        `;
        document.querySelector('.products1').appendChild(div);
       
    }
}

fetchdata(getclother);
fetchdata(getclother1);  

let aosScript = document.createElement('script'); 
aosScript.src = '/assets/libs/aos-master/aos.js';
aosScript.async = true;
document.body.appendChild(aosScript);

aosScript.onload = function() {
    AOS.init();
};


export async function render() {
    let template = document.createElement('div');
    template.classList.add('home-page');
    template.innerHTML = '';

    return template;
}