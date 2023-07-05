import {
	api_url,
	end_point,
	fetch_data,
	remove_loader
} from '../helper.js';

export async function student_page(params) {
	let get_student = {
		api_url: api_url,
		end_point: end_point.student,
		method: 'GET',
		async callback(params) {
			await remove_loader();
			await render_student(params);
		}
	}

	let remove_student = {
		api_url: api_url,
		end_point: '',
		method: 'DELETE',
		async callback(params) {
			await remove_loader();
			await fetch_data(get_student);
		}
	}
	
	let template = document.createElement('div');
	template.classList.add('student-page');
	template.innerHTML = `
	<div class="container"></div>
	`;
	
	async function render_student(params) {
		template.querySelector('.container').innerHTML = '';
		for(let student of params) {
			let {avatar, name, age, createdAt, id} = student;

			let div = document.createElement('div');
			div.classList.add('item');
			div.innerHTML = `
			<span class="ava" style="background-image: url(${avatar})"></span>
			<span>
				<span class="text-secondary d-block mb-6">Name</span>
				<b>${name}</b>
			</span>
			<span>
				<span class="text-secondary d-block mb-6">Age</span>
				<b>${age}</b>
			</span>
			<span>
				<span class="text-secondary d-block mb-6">Created at</span>
				<b>${createdAt}</b>
			</span>
			<div class="options">
				<button class="delete"><i class="fa-regular fa-trash-can"></i></button>
			</div>
			`;

			div.querySelector('.delete').addEventListener('click', async function() {
				let confirm_val = confirm('delete this student?');
				//
				// delete func
				//
				if (confirm_val == true) {
					document.body.appendChild(loading.spinner());
					await delete_student(id);
				}
			});

			template.querySelector('.container').appendChild(div);
		}
	}

	async function delete_student(id) {
		remove_student.end_point = end_point.student + '/' + id;
		await fetch_data(remove_student);
	}
	
	await fetch_data(get_student);
	
	return template;
}