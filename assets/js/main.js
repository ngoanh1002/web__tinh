



const app = document.querySelector('main');

import { apiurl, endpoint, fetchdata, } from "/assets/js/components/help.js";


// app.appendChild(await render());
async function initapp() {
    if (location.pathname == '/') {
        let page = await import('./pages/home_page.js');
        let render = await page.render();
        app.appendChild(await render)
    }

    if (location.pathname.includes('shop')) {
        let page = await import('./pages/product_page.js');
        let render = await page.render();
        app.appendChild(await render)
    }
    if (location.pathname.includes('about')) {
        let page = await import('./pages/about_page.js');
        let render = await pag.e.render();
        app.appendChild(await render)
    }
    if (location.pathname.includes("product_detail")) {
        let pathname = location.pathname;
        pathname = pathname.split('/')[2];
        let getproductsbyid = {
          apiurl: apiurl,
          endpoint: endpoint.clother + '/' + pathname,
          method: "GET",
          async callback(params) {
            let page = await import("./pages/product_detail.js");
            let render = await page.render(params);
            app.appendChild(await render);
         
            
           
          }
        };
        let getproductsbyid1 = {
          apiurl: apiurl,
          endpoint: endpoint.clother1 + '/' + pathname,
          method: "GET",
          async callback(params) {
            let page = await import("./pages/product_detail.js");
            let render = await page.render(params);
            app.appendChild(await render);
    
            
           
          }
        };
        
  
        
        await fetchdata(getproductsbyid)
        await fetchdata(getproductsbyid1)
      }
}
initapp();