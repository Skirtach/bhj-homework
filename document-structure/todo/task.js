const input = document.querySelector('.tasks__input');
const btn = document.getElementById('tasks__add');
const list = document.querySelector('.tasks__list');
console.log(input);


btn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(input.value.trim().length > 0) {
        const task = document.createElement('div');
        task.className = 'task';

        task.innerHTML = `
        <div class="task__title">
        ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        `
        list.append(task);

        const remove_btn = task.querySelector('.task__remove');

        remove_btn.addEventListener('click', (e)=> {
            e.target.closest('.task').remove()
        })

        input.value = '';
    
    } else {
        console.log('Введите пожалуйста текст задачи')
    }
})

