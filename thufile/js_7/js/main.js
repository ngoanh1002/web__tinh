let app = document.querySelector('#app');

async function init_app() {
	let page = await import('./pages/students_page.js');
	let render = await page.student_page();
	app.appendChild(await render);
}
init_app();