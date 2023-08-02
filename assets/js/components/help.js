export const apiurl = 'https://648704afbeba6297278facba.mockapi.io/';


export const endpoint = {
    clother: 'clother',
    clother1: 'clother1',
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