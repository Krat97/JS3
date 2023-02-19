// /*
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function item (a,b){
//     return recylt = (a * b);
// }
// let Z = item (2,3);
//     console.log(Z);

// let S = (a,b) => a*b;
// console.log(S(5, 2));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function S (r){
//     return S1 = 3.14 *(r*r);
// }
// let SS = S(5);
// console.log(SS);


// let S = (r)=> 3.14*(r*r);
// console.log(S(10));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function S (h,r){
//     return rezult = 2*3.14*r*(h+r);
// }
// let Z = S(5,8);
// console.log(Z);

// let S = (h,r)=>2*3.14*r*(h+r);
// console.log(S(10, 3));


// - створити функцію яка приймає масив та виводить кожен його елемент
// function mac (arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// let user = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// mac(user);


// let Ar = (arr)=> {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// Ar([5,4,2])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf (text){
//     document.write(`<p>${text}</p>`)
// }
// paragraf (`hello`);


// let P = (text)=>{
//     document.write(`<p>${text}</p>`)
// }
// P(`hhh`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function spisok(text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// };
// spisok(`asd`);


// let spisok = (text)=>{
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// spisok(`axa`)

// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function spisok (text,n){
//     document.write(`<ul>`)
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
// }
//     document.write(`</ul>`)}
// spisok(`asd`,6);

// let spisok =(text,n)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>_______</li>`)
// }
//     document.write(`</ul>`)
// }
// spisok(`yyy`,5)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function sss(arr){
//     document.write(`<ul>`)
//     for (const A of arr) {
//         document.write(`<li>${A}</li>`)
//     }
//     document.write(`</ul>`)
// }
// sss([1,5,6,`hhh`,true]);

// let AR =(arr)=>{
//     document.write(`<ul>`)
//     for (const A of arr) {
//         document.write(`<li>${A}</li>`)
//     }
//     document.write(`</ul>`)
// }
//     AR([5,8,6,`jkj`])


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function sss(Objects){
//     for (let item of Objects) {
//
//     document.write(`<div> ${item.id} ${item.name} ${item.age}</div>`)
//     }
// }
// let AR = (arr)=>{
//     for (let item of arr){
//         document.write(`<hr/>`)
//         document.write(`<div> ${item.id} ${item.name} ${item.age}</div>`)
//     }
// }
// AR({id:5,
//     name:`oleh`,
//     age:25})

// // - створити функцію яка повертає найменьше число з масиву
// function minnum (numbers){
//     let min = numbers[0];
//     for (let number of numbers) {
//         if (min>number){
//             min=number
//         }
//     }
//     return min;
// }
// console.log(minnum([11, 22, -13]));

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function summ (arr){
//     let min=0;
//     for (let item of arr) {
//         min+=item;
//         // або min=min+item;
//     }
//     return min
// }
// console.log(summ([11,12,3]));

// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap (arr,index1,index2){
//     let r1 = arr[index1];
//     let r2 = arr[index2];
//     arr[index1]=r2;
//     arr[index2]=r1;
//     return arr
// }
// console.log(swap([22, 11, 44, 55, 24], 0, 3));

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
// function exchange(UAH,Values,eCurrency){
//     for (const Element of Values) {
//         if (Element.currency===eCurrency){
//             console.log(UAH / Element.value);
//             return UAH/ Element.value;
//         }
//
//     }
// }
// exchange(5000,[
//     {currency:'USD',value:40},
//     {currency:'EUR',value:42}],
//     'USD')

