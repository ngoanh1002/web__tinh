import { apiurl, endpoint, fetchdata, formatprice  } from "../components/help.js";

let prdstate = [];

let getclother = {
    apiurl: apiurl,
    endpoint: endpoint.clother,
    method: 'GET',
    async callback(params) {
        prdstate = [...params];
        await renderclother({
            arr: prdstate,
            dom: section.querySelector('.products') ,
            start: 0,
            end: 8,

        });
        await renderclother({
            arr: prdstate ,
            dom: section.querySelector('.products1') ,
            start: 8,
            end: prdstate.length,

        });
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

async function renderclother(params) {
    let { arr, dom, start, end } = params
    for (let i = start; i < end; i++) {
        let {name, price, image, id} = arr[i];
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
        dom.appendChild(div);
       
    }
}
fetchdata(getclother) ;

  

let aosScript = document.createElement('script'); 
aosScript.src = '/assets/libs/aos-master/aos.js';
aosScript.async = true;
document.body.appendChild(aosScript);

aosScript.onload = function() {
    AOS.init();
};
