



const app = document.querySelector('main');

import { apiurl, endpoint, fetchdata } from "/assets/js/components/help.js";


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
        let render = await page.render();
        app.appendChild(await render)
    }
}
initapp();