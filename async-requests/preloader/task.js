const xhr = new XMLHttpRequest();
const loder = document.getElementById('loader');
const items = document.getElementById('items');

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.responseType = 'json';

xhr.send();
console.log(xhr)
xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        loder.classList.remove('loader_active');
        const objitems = xhr.response;
        console.log(objitems)
        console.log(objitems.response.Valute)

        const Valute = Object.values(objitems.response.Valute)
        console.log(Valute)

        Valute.forEach((elem)=>{
            const item = document.createElement('div');
            item.className = 'item';
            items.append(item);

            const item__code = document.createElement('div');
            item__code.className = 'item__code';
            item.append(item__code);
            item__code.innerHTML = elem.CharCode;

            const item__value = document.createElement('div');
            item__value.className = 'item__value';
            item.append(item__value);
            item__value.innerHTML = elem.Value;

            const item__currency = document.createElement('div');
            item__currency.className = 'item__currency';
            item.append(item__currency);
            item__currency.innerHTML = `руб.`

        })

    }
}
// localStorage.clear()
localStorage.setItem('myKey',xhr );
































