export async function render() {
    let template = document.createElement('header');
    template.innerHTML = `
    <div class="header">
        
        <a href="/"><p><span style="color: black;">NNA</span></p></a>
        <div class="options">
            <a style="color: #000;" href="/">Trang chủ</a>
            <a style="color: #000;" href="shop">Sản phẩm</a>
            <a style="color: #000;" href="Product">Về chúng tôi</a>
        </div>
        <div class="others">
            <button><i class="fa-solid fa-magnifying-glass" style="color: ;"></i></button>
            <button><i class="fa-solid fa-cart-shopping" style="color: ;"></i></button>             
        </div>
    </div>
    `;
    return template;
}