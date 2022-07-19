const xhr = new XMLHttpRequest();
const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.responseType = 'json';

xhr.send();


console.log(xhr)
xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        const Object = xhr.response;
        title.innerHTML = Object.data.title;
        const arr = Object.data.answers;
        console.log(arr)
        for (let i=0; i<arr.length; i++) {
            const button = document.createElement('button');
            button.innerHTML = arr[i];
            button.className = 'poll__answer'
            answers.append(button); 
            button.onclick = function () {
                alert('Спасибо! Ваш голос засчитан')
            } 
                     
        }
    }
}



