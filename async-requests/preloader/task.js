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

































// const xhr = new XMLHttpRequest();
// const loader = document.getElementById('loader');
// const itemsContainer = document.getElementById('items');


// xhr.open('GET', ' https://netology-slow-rest.herokuapp.com')

// xhr.responseType = 'json';

// xhr.send();


// xhr.onload = function() {
//    if (xhr.status != 200) {
//        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`)
//    } else {
//        loader.classList.remove('loader_active')
//         let itemsObj = xhr.response;
//             console.log(itemsObj.response.Valute);
//         let itemsArr = Object.values(itemsObj.response.Valute);

//         console.log(itemsArr);
//             itemsArr.forEach(elem => {
//             let itemElem = document.createElement('div');
//             itemElem.className = 'item';
//             itemsContainer.append(itemElem);

//             let itemCode = document.createElement('div');
//             itemCode.className = 'item__code';
//             itemElem.append(itemCode);

//             let itemValue = document.createElement('div');
//             itemValue.className = 'item__value';
//             itemElem.append(itemValue);

//             let itemCurr = document.createElement('div');
//             itemCurr.className = 'item__currency';
//             itemCurr.innerHTML = 'руб.'
//             itemElem.append(itemCurr);

//             itemCode.innerHTML = elem.CharCode;
//             itemValue.innerHTML = elem.Value;
//         });

//    }
// }