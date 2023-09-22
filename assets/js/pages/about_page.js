
let section = document.createElement("section");
section.classList.add('about_page');
section.innerHTML = `

   <h1>Welcome To A$AP Rocky's World Of Fashion</h1>
  
  <h2 class="credit"><a href="https://www.github.com/E-Benny/" target="_blank">Made by E-BENNY</a></h2>


<!-- Pictures below -->
<div class="gallery">
  <div class="col">
    <div class="images">
    <img src="https://i.pinimg.com/564x/e9/cf/bd/e9cfbd4744b358aab92e3f8b1fa76541.jpg" alt="A$AP Rocky">
  </div>
  <div class="images">
    <img src="https://i.pinimg.com/564x/c5/ca/8e/c5ca8e25f9ba91a061d49aea89bd74ee.jpg" alt="A$AP Rocky">
  </div>
  <div class="images">
    <img src="https://i.pinimg.com/564x/0a/d5/bd/0ad5bdf3733ebeaf64cdc70e4d9c6722.jpg" alt="A$AP Rocky">
  </div>
  </div>
<div class="col">
  <div class="images">
    <img src="https://i.pinimg.com/564x/be/c3/01/bec3010b412918e25edb985da8c3b23d.jpg" alt="A$AP Rocky">
  </div>
  <div class="images">
    <img src="https://i.pinimg.com/564x/fc/82/50/fc82502730c9ab38debaf697ebc30ec7.jpg" alt="A$AP Rocky">
  </div>
  <div class="images">
    <img src="https://i.pinimg.com/564x/06/5a/bf/065abfdd2e6468c5446f4c7295081f54.jpg" alt="A$AP Rocky">
  </div>
</div>
<div class="col">
  <div class="images">
    <img src="https://i.pinimg.com/564x/ee/06/f2/ee06f2f9fb11c412e53b3ab6cf48308e.jpg" alt="A$AP Rocky">
  </div>
  <div class="images">
    <img src="https://i.pinimg.com/564x/14/d2/4a/14d24a4c3a0f4dbe6d1154c5ac7206e0.jpg" alt="A$AP Rocky">
  </div>
  <div class="images">
    <img src="https://i.pinimg.com/564x/18/f7/71/18f771cf2e75e4b38f0fd8b161ce83bc.jpg" alt="A$AP Rocky">
  </div>
</div>
</div>
`
let main = document.querySelector("main")
main.appendChild(section)
console.clear();

gsap.registerPlugin(ScrollTrigger);

const additionalY = { val: 0 };
let additionalYAnim;
let offset = 0;
const cols = gsap.utils.toArray(".col");

cols.forEach((col, i) => {
  const images = col.childNodes;

  // DUPLICATE IMAGES FOR LOOP
  images.forEach((image) => {
    var clone = image.cloneNode(true);
    col.appendChild(clone);
  });

  // SET ANIMATION
  images.forEach((item) => {
    let columnHeight = item.parentElement.clientHeight;
    let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

    gsap.to(item, {
      y: direction + Number(columnHeight / 2),
      duration: 20,
      repeat: -1,
      ease: "none",
      modifiers: {
        y: gsap.utils.unitize((y) => {
          if (direction == "+=") {
            offset += additionalY.val;
            y = (parseFloat(y) - offset) % (columnHeight * 0.5);
          } else {
            offset += additionalY.val;
            y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
          }

          return y;
        })
      }
    });
  });
});

const imagesScrollerTrigger = ScrollTrigger.create({
  trigger: "section",
  start: "top 50%",
  end: "bottom 50%",
  onUpdate: function (self) {
    const velocity = self.getVelocity();
    if (velocity > 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 2000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
    if (velocity < 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 3000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
  }
});
