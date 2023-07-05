export const loading = {
	spinner() {
		let div = document.createElement('div');
		div.classList.add('loader');
		div.innerHTML = `
		<span class="spinner-1"></span>
		`;
		
		return div;
	},
	list() {
		let div = document.createElement('div');
		div.classList.add('loader');
		div.innerHTML = `
		<div class="item">
			<span class="ava loading"></span>
			<div>
				<div class="loading content long mb-6"></div>
				<div class="loading content short mb-6"></div>
				<div class="loading content short"></div>
			</div>
		</div>
		<div class="item">
			<span class="ava loading"></span>
			<div>
				<div class="loading content long mb-6"></div>
				<div class="loading content short mb-6"></div>
				<div class="loading content short"></div>
			</div>
		</div>
		`;
		
		return div;
	}
}