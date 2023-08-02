module.exports = {
  html() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
      <title>NNA</title>
      <link rel="shortcut icon" href="./assets/images/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <link rel="stylesheet" href="/assets/css/main.css">
    </head>
    <body>
    <header>
    <div class="header">
        
        <a href="/"><p><span style="color: black;">NNA</span></p></a>
        <div class="options">
            <a style="color: #000;" href="/">Trang chủ</a>
            <a style="color: #000;" href="shop">Sản phẩm</a>
            <a style="color: #000;" href="about">Về chúng tôi</a>
        </div>
        <div class="others">
            <button><i class="fa-solid fa-cart-shopping" style="color: ;"></i></button>             
        </div>
    </div>
    </header>
    <main>
    
    </main>
    <hr>

  <footer>
      <div class="footer">
          <div>
              <h3>ĐỊA CHỈ CỬA HÀNG</h3>
              <ul>
                  <li><i class="fa-solid fa-location-dot" style="color: #adadad;"></i><b>NNA</b>: Số 7 Thiền Quang - Nguyễn Du - Hai Bà Trưng - Hà Nội</li>
                  <li><i class="fa-solid fa-location-dot" style="color: #adadad;"></i><b>NNA</b>: 47 Phạm Văn Đồng - Mai Dịch - Hà Nội</li>

              </ul>
          </div>
          <div class="contact">
              <h3>Liên hệ</h3>
              <ul>
                  
                  <li><i class="fa-solid fa-phone" style="color: #adadad;"></i>069 234 3647</li>
                  <li><i class="fa-regular fa-envelope" style="color: #adadad;"></i>NNAstore@gmail.com</li>
              </ul>
          </div>
          <div class="information">
              <h3>Thông tin</h3>
              <ul>
                  <li><a href="">Chính sách bảo hành</a></li>
                  <li><a href="">Hình thức vận chuyển</a></li>
                  <li><a href="">Hình thức thanh toán</a></li>
                  <li><a href="">Đổi trả sản phẩm</a></li>
              </ul>
          </div>
          <div class="link">
              <h3>Theo dõi</h3>
              <ul>
                  <a href="https://www.facebook.com/" target="_blank"><li><i style="font-size:16px" class="fa">&#xf09a;</i></i>Facebook</li></a>
                  <a href="https://www.instagram.com/" target="_blank"><li><i style="font-size:16px" class="fa">&#xf16d;</i>Instagram</li></a>
                  <a href="https://www.youtube.com/" target="_blank"><li><i style="font-size:16px" class="fa">&#xf16a;</i>Youtube</li></a>
              </ul>
          </div>
      </div>
  </footer>
      <script type="module" src="/assets/js/main.js"></script>
    </body>
    </html>
    `;
  }
}