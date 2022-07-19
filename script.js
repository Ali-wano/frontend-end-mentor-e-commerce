const cartModal = document.querySelector(".cart-modal")
const cartIcon = document.querySelector(".cart")
const cartInfo = document.querySelector(".cart-info")
const cartValue = document.querySelector(".cart-value")
const addCart = document.querySelector(".plus")
const reduceCart = document.querySelector(".minus")
const addBtn = document.querySelector(".add-cart")
const cartStatus = document.querySelector(".cart-status")
const navCart = document.querySelector(".nav-cart")
const menu = document.querySelector(".menu")
const menuList = document.querySelector(".list")
const products = [
    {
        id: Math.random() * 300,
        productName: "Fall Limited Edition Sneakers",
        productPrice: 125.00,
        value: 0,
        productImg: "./images/image-product-1.jpg"
    }
]

products.map((details) =>{
    const plusCart = () =>{
      cartValue.innerHTML=  details.value++
      navCart.innerHTML = details.value
      console.log("Done");
    };
    
    addCart.addEventListener("click", plusCart)
    reduceCart.addEventListener("click", ()=>{
            if (details.value < 1) {
              details.value = 0
            }else{
              cartValue.innerHTML=  details.value--
            navCart.innerHTML = details.value
            }
      });
      if (addBtn != true) {
        cartStatus.innerHTML = "No Active Cart"
      }
      addBtn.addEventListener("click", () =>{
        cartInfo.classList.add("modal-info")
        cartInfo.innerHTML= `<img src="${details.productImg}" class="productImg">
        <p>${details.productName}</p>
        <div> <span>$${details.productPrice} X ${details.value} <b>$${details.productPrice * details.value}</b></span>
        <span onclick=deleteCart()><img src="./images/icon-delete.svg" class="delete"></span>
        </div>
        <button>Check Out</button>
        `
        cartModal.classList.add("show-modal")
        cartStatus.innerHTML = ""
      })
})

function deleteCart() {
  cartInfo.innerHTML = ""
  cartStatus.innerHTML = "No Active Cart"
}


function openModal() {
    cartModal.classList.toggle("show-modal")
}
cartIcon.addEventListener("click", openModal)
menu.addEventListener("click", ()=>{
  menuList.classList.toggle("open-list")
})

const productImages = document.querySelectorAll(".shoe")
productImages.forEach(info =>{
  let previewBox = document.querySelector(".preview-box")
  let imageBox = document.querySelector(".image-box")
  let closeIcon = document.querySelector(".icon")
info.addEventListener("click", ()=>{
let previewImg = info.src
previewBox.classList.add("show-modal")
imageBox.innerHTML = `<img src="${previewImg}">
 z
`

})
closeIcon.addEventListener("click", ()=>{
  previewBox.classList.remove("show-modal")
})
})
