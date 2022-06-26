const input_check = document.querySelectorAll('.interest__check')

for (let inp of input_check){
   inp.checked = false;
}

input_check.forEach((check)=>{ 
    check.addEventListener('change', function(event) {

        parent = event.target.closest('.interest');
        children = Array.from(parent.querySelectorAll('.interest__check'));

        if (children[0].checked) {
            children.forEach((item)=>{item.checked=true})
        }
        else {
            children.forEach((item)=>{item.checked=false})
        } 
        // for (let child of children) {
        //     child.checked = this.checked
        //     console.log(this)
        // }
    })
})
