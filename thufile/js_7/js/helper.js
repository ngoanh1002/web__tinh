//
// evn <=> enviroment
//
export const api_url = 'https://648704a4beba6297278fac79.mockapi.io/';

export const end_point = {
	student: 'student'
}

export async function fetch_data(params) {
	if (!params) {
		alert('không tồn tại request');
		return false;
	}
	let {api_url, end_point, method, callback} = params;
	
	try {
		let res = await fetch(api_url + end_point, {
			method: method
		});

		let data = await res.json();
		await callback(data);
	}
	catch(error) {
		console.log(error)
	}
}

export async function remove_loader() {
	document.querySelectorAll('.loader').forEach(loader => {
		loader.remove();
	})
}