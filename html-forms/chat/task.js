const chat = document.querySelector('.chat-widget') 


function show () {
    chat.classList.add("chat-widget_active");
}

chat.addEventListener("click", show);

const message_bot = [
	'Как вы надоели!',
	'Что вам надо',
	'Не пишите сюда больше',
	'Какие вы не понятливые',
	'Идите далеко и надолго!'
]

const input = document.getElementById('chat-widget__input');
const message = document.querySelector('.chat-widget__messages');
const message_conteiner = document.querySelector('.chat-widget__messages-container')
let date = new Date();

input.addEventListener('keydown', (event) => {
    if(event.code ==="Enter" && input.value != '') {
       let i = Math.floor(Math.random() * message_bot.length);

	   message.innerHTML +=  `
	   <div class="message message_client">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${input.value}</div>
       </div>
	   <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${message_bot[i]}</div>
        </div>
	 `;
	 input.value = '';
	 message_conteiner.scrollTop = message_conteiner.scrollHeight;    
	 
	}
    

})
