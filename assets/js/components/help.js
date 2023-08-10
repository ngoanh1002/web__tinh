export const apiurl = 'https://648704afbeba6297278facba.mockapi.io/';


export const endpoint = {
    clother: 'clother',
}



export async function fetchdata(params) {
    if (!params) {
        alert('không tồn tại request');
    return false ;
    }
    let {apiurl, endpoint, method, callback} = params;
    try {
        let res = await fetch(apiurl + endpoint, {
            method: method
        });

        let data = await res.json();
                await callback(data)

    }
    catch (error) {
        console.log(error)
    }
    
}



export async function removeloader() {
    document.querySelector('.loader').forEech(loader => {
        loader.remmove()
    });
}
export async function formatprice(params) {
    return params.toLocaleString("vi-VN") + "VND";
  }
  let cart = {} ;
  
 export async function updatatotalquantity() {
   const cart = JSON.parse(localStorage.getItem('cart-id'));
	let totalquantity = 0;
	for (let [k, v] of Object.entries(cart)) {
		totalquantity += v.quantity;
	}
	localStorage.setItem('totalquantity',totalquantity);
	document.querySelector('.cartquantity').innerHTML = `${totalquantity}`
	if(totalquantity == 0) {
		document.querySelector('.cartquantity').innerHTML = ``
	}
}