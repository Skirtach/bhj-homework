
document.querySelectorAll(`.has-tooltip`).forEach(item => {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    item.after(tooltip); 
   
 
   item.addEventListener('click',(event)=>{ 
        const posistion = item.getBoundingClientRect();
        console.log(posistion)
        item.setAttribute('data-posistion', 'bottom')
        item.nextSibling.setAttribute('style', `left:${posistion.left}px; top:${posistion.top + 20}px`)
        item.nextSibling.innerHTML = item.title;

    if (item.nextSibling.classList.contains('tooltip_active')) {
    item.nextSibling.classList.remove('tooltip_active')
    }
    else if (document.querySelector('.tooltip_active')) {
    document.querySelector('.tooltip_active').classList.remove('tooltip_active')
    item.nextSibling.classList.add('tooltip_active')
    }
    else {
    item.nextSibling.classList.add('tooltip_active')
    }
    event.preventDefault()
  })

})



