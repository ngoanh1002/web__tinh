import { apiurl, endpoint, fetchdata, formatprice   } from "../components/help.js";

let cart = {} ;

let cartdom = document.querySelectorAll('.cart');
cart = JSON.parse(localStorage.getItem('cart-id'));


let section = document.createElement('section')
section.classList.add('cart-page');
section.innerHTML = `

<section>
<div class="box-information">
    
<div class="cart-box">
<div class="cart-left scroll"></div>
<div class="cart-right">
	<div class="col-5">
		<div>
			<p class="text-cart">Họ và tên </p>
			<input type="text" class="pad-inp name-client">
		</div>
		<div>
			<p class="text-cart">Số điện thoại</p>
			<input type="text" class="pad-inp phone-client">
		</div>
	</div>
	<p class="text-cart">Lưu ý của khách hàng</p>
	<input type="text" class="pad-inp-note note-client">
	<p class="text-cart">Địa chỉ nhận hàng</p>
	<textarea name="" id="" cols="30" rows="10" class="pad-inp-address address-client"></textarea>
	
	
</div>
</div>  

</div>
</div>
</section>

<section>
<div class="cart">
<div class="total-bill"></div>
<h3 class='totalbill'> Thành tiền 0VND</h3>
	<button class="btn buy-end-1">Thanh toán</button>
</div>
</section>
`;
let main = document.querySelector("main")
main.appendChild(section)


    export async function render() {
      cartdom.innerHTML = '';
      for (let [k, v] of Object.entries(cart)) {
        let {name,image, size, quantity, price, totalprice,} = v;
		let formattedPrice = await formatprice(price)
		let formattedtotalprice = await formatprice(totalprice)
        let div = document.createElement("div");
        div.classList.add('cartdom');
		    div.innerHTML = `
  <div class="col-5">
  <div class="slide clother-img" style="background-image: url(${image})"></div>
  <div class="images"></div>
</div>
        <h3 class="name">${name}</h3>
        <h4 class="price">${formattedPrice}</h4>
        <h4>size</h4>
        <div class="size">${size}</div>
        <div class="quantity">
            <div class="buttons_added">
            <button class="btn decrease"><i class="fa-solid fa-minus fa-lg"></i></button>
            <span class="input-qty">${quantity}</span>
            <button class="btn increase"><i class="fa-solid fa-plus fa-lg"></i></button>
            </div>
            <button class="btn delete"><i class="fa-solid fa-trash"></i></button>
  
            <h4>Thành tiền: ${formattedtotalprice}VND</h4>
        </div>
        
    </div>
		`;

		div.querySelector('.delete').addEventListener('click', function() {
			let confirmdelete = confirm('xóa sp khỏi đơn?');
			if (confirmdelete == true) deletecartitem(k, div);

			localStorage.setItem('cart-id', JSON.stringify(cart));
			
		});

		div.querySelector('.increase').addEventListener('click', function() {
			updatecartquantity({
				type: 'increase',
				parentdom: div,
				key: k
				
				
			});
			localStorage.setItem('cart-id', JSON.stringify(cart));
			
		});
		
		div.querySelector('.decrease').addEventListener('click', function() {
			updatecartquantity({
				type: 'decrease',
				parentdom: div,
				key: k
				
			});
			localStorage.setItem('cart-id', JSON.stringify(cart));
			
		});
		
    section.querySelector('.cart').appendChild(div);
	}
	// return section
	updatetotalbill();
	updatatotalquantity()
	
}


async function deletecartitem(k, div) {
	delete cart[k];
	div.remove();
	updatetotalbill(cart);
	updatatotalquantity()
	localStorage.setItem('cart-id', JSON.stringify(cart));
	
}

async function updatecartquantity(params) {
	let {type, key, parentdom} = params;

	if (type == 'increase') {
		cart[key]['quantity'] += 1;
		cart[key]['totalprice'] = cart[key]['price'] * cart[key]['quantity'];
		parentdom.querySelector('.input-qty').innerHTML = cart[key]['quantity'];
		parentdom.querySelector('h4').innerHTML = `Thành tiền: ${await formatprice(cart[key]['totalprice'])}`;
		
		
	}
	
	if (type == 'decrease') {
		cart[key]['quantity'] -= 1;
		if (parseInt(cart[key]['quantity']) < 1) {
			cart[key]['quantity'] = 1;
			alert('SL sp phải >= 1');
		}
		cart[key]['totalprice'] = cart[key]['price'] * cart[key]['quantity'];
		parentdom.querySelector('.input-qty').innerHTML = cart[key]['quantity'];
		parentdom.querySelector('h4').innerHTML = `Thành tiền: ${await formatprice(cart[key]['totalprice'])}`;
		
	}

	updatetotalbill(cart);
	updatatotalquantity()
}

async function updatetotalbill() {
	let total = 0;

	for (let [k, v] of Object.entries(cart)) {
		total += v.totalprice;
	}
	localStorage.setItem('totalbill',total);
section.querySelector('.totalbill').innerHTML = `Thành tiền: ${await formatprice(total)}`;

}

 async function updatatotalquantity() {
	let totalquantity = 0;
	for (let [k, v] of Object.entries(cart)) {
		totalquantity += v.quantity;
	}
	localStorage.setItem('totalquantity', JSON.stringify(totalquantity));
	document.querySelector('.cartquantity').innerHTML = `${totalquantity}`
	if(totalquantity == 0) {
		document.querySelector('.cartquantity').innerHTML = ``
	}
}
