console.log('app start');
const app = document.querySelector('main');

import {render} from './components/header.js';

app.appendChild(await render());
async function initapp() {
    if (location.pathname == '/') {
        let page = await import('./pages/home_page.js');
        let render = await page.render();
        app.appendChild(await render)
    }

    if (location.pathname.includes('shop')) {
        let page = await import('./pages/about_page.js');
        let render = await page.render();
        app.appendChild(await render)
    }
}
initapp();