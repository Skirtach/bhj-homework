const product = document.querySelector('.cart__products');
const product_list = document.querySelectorAll('.product')
console.log(product);

let arr = [...product_list].map((item)=> item.getAttribute('data-id'))

getproduct = (item) => {
  const product_controls = item.querySelector('.product__controls');
  const value = product_controls.querySelector('.product__quantity-value');
  const product__quantity = item.querySelectorAll('.product__quantity-control');
  const img_product = item.querySelector('.product__image').src;
  const dataId = item.getAttribute('data-id')
  product__quantity.forEach(item=>{
    item.addEventListener('click', (e)=>{
      if (e.target.classList.contains('product__quantity-control_dec')) {
        if(value.textContent >1) {
          value.innerHTML = value.textContent - 1;
        }        
      } else {
        value.innerHTML = +value.textContent + 1;
      }        
      
  })
})

  const button = product_controls.querySelector('.product__add');
  console.log(button)

  button.addEventListener('click', ()=>{
    const div = document.createElement('div')
    div.setAttribute('id', dataId);
    div.classList.add('cart__product');

    div.innerHTML = `
    <img class="cart__product-image" src=${img_product}>
    <div class="cart__product-count">${value.textContent}</div>
    `
    const idElement = arr.find((item)=> item === dataId);
    if (document.getElementById(idElement)) {
      const foundElement = document.getElementById(idElement);
      const cout = foundElement.querySelector('.cart__product-count').textContent;
      foundElement.querySelector('.cart__product-count').innerHTML = +value.textContent + +cout;
    }
    else {
      product.appendChild(div);
    }
  })

}

product_list.forEach ((el)=> {
  getproduct(el);
});





