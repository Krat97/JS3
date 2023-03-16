// // - Знайти та вивести довижину настипних стрінгових значень
// // - Перевести до великого регістру наступні стрінгові значення
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// ['hello world', 'lorem ipsum', 'javascript is cool'].forEach((item) => console.log(item.length))
let str = 'hello world, lorem ipsum, javascript is cool';        //  Результат:
console.log(str.toUpperCase());                                  // HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL
console.log(str.toLowerCase());                                  // 0 hello world, lorem ipsum, javascript is cool
console.log(str.startsWith(`he`));                               // 1 true
console.log(str.endsWith(`is`));                                 // 2 false
console.log(str.substring(4, 10));                               // 3 o worl
console.log(str.indexOf(`w`));                                   // 4 6
console.log(str.indexOf(`l`, 4));                                // 5 9
console.log(str.charAt(8));                                      // 6 r
console.log(str.replace(`l`, `L`));                              // 7 heLlo world, lorem ipsum, javascript is cool
console.log(str.replaceAll('el', 'A'));                          // 8 hAlo world, lorem ipsum, javascript is cool
console.log(str.split(','&&' '));                                // 9 (7) ['hello', 'world,', 'lorem', 'ipsum,', 'javascript', 'is', 'cool']

let arr = str.split(',')
console.log(arr);

arr.push('kava');
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift('Nastia')
console.log(arr);

arr.shift()
console.log(arr);

let st = '';
for (const Element of arr) {
    st+=Element +'; '
}
console.log(st);

console.log(arr.join(';;;'));

let a = ['Nactia','Oleh']
let CONCAT = arr.concat(a)
console.log(CONCAT);


console.log(CONCAT.slice(2,5));

let B = CONCAT.splice(3,2,'We')
console.log(B);
console.log(CONCAT);

console.log(CONCAT.includes('he'));

let Arr1 =  [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4, id: 44 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
Arr1.forEach(value => console.log(value))

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];
console.log(users.filter(value => value.age > 30 || value.status===false));

let UM = users.map(function (value,index) {
    return{...value, ageP: (60 - value.age)}
})
console.log(UM);

let aaa =users.sort((z,x) =>{
    return z.age-x.age
})
console.log(aaa);

let bbb = users.sort((z,x)=>{
    if (z.name>x.name){
        return 1
    }
    if (z.name<x.name){
        return -1
    }
    if (z.name===x.name){
        return 0
    }
})
console.log(bbb);


console.log(users.reduce((acb, user) => {
    if (user.status === true) {
        acb.statusT.push (user);
    } else {
        acb.statusF.push (user);
    }
    return acb;
}, {statusT: [], statusF: []}));


// Рекурсія!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let ar = [22,11,[45,35]];
let P =[];
function recyrs (arr) {
    for (const arrElement of arr) {
        if (Array.isArray(arrElement)) {
            recyrs(arrElement)
        } else {
            P.push(arrElement)
        }
    }
}
recyrs(ar);
console.log(P);

//Конструктор --- Шаблон
function User (name,age, wifename,wifeage){
    this.neme = name;
    this.age = age;
    this.wife = {name:wifename, age:wifeage}
}
let N1 = new User(`Oleh`,25,`Anastasia`,23);
console.log(N1);


// Насліування Функції
function Userr(namm,age){
    this.namm = namm;
    this.age = age;
}
function  sonUserr (namm,age,pas){
    Userr.apply(this,arguments);
    this.pas=pas;
}

let T = new sonUserr(`Oleh`,24,2222);
console.log(T);


// Конструктор клас
class constructor  {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
greeting(){
return `hi, I am ${this.name}`
}
}
let Q = new constructor('Oleh', 25)
console.log(Q);




// Розширення конструктора
class RRR extends constructor {
// pas
    constructor(name, age, pas) {
        super(name, age);
        this.pas = pas;
    }
}
let  E = new RRR ('Anastasia',23,'LOVE')
console.log(E);

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// // let str = ' dirty       string   ';
// // console.log(str.trim());
// // console.log(str.trimStart());
// // console.log(str.trimEnd());
// // console.log(str.split(' ').filter((w) => w.length).join(' '));

// let str = ' dirty string   ';
// // console.log(str.trim());
// // console.log(str.trimStart());
// // console.log(str.trimEnd());
// console.log(str.split(' ').filter(
//     (w) => w.length).join(' '));


//
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// // let str = 'Ревуть воли як ясла повні';
// // const stringToarray = (string) => string.split(' ');
// // let arr = stringToarray(str);
// // console.log(arr);
//

// let str = 'Ревуть воли як ясла повні';
// let stringToarray = (string) => string.split(' ');
// let arr = stringToarray(str);
// console.log(arr);
// __________________________________________________

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// // const arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// // console.log(arr.map((num) => num.toString()));


//
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(arr.map((num)=>num.toString()));
//



// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// // let nums = [11, 21, 3];
// // const sortNums = (arr, order) => {
// //   switch (order) {
// //     case 'ascending':
// //       return arr.sort((a, b) => a - b);
// //     case 'descending':
// //       return arr.sort((a, b) => b - a);
// //   }
// // }
// // console.log(sortNums(nums, 'ascending')); // [3,11,21]
// // console.log(sortNums(nums, 'descending')); // [21,11,3]
//
// let nums = [5,6,8,9,3,2,1];
// let sortNums = (arr,order) => {
//     switch (order){
//         case '>':
//             return arr.sort((a,b) => a-b);
//         case  '<' :
//             return arr.sort((a,b) => b-a);
//         }
//     }
// console.log(sortNums(nums, '>'));
// console.log(sortNums(nums, '<'));


// // ==========================
// // - є масив
// let coursesAndDurationArray = [
//     { title: 'JavaScript Complex', monthDuration: 5 },
//     { title: 'Java Complex', monthDuration: 6 },
//     { title: 'Python Complex', monthDuration: 6 },
//     { title: 'QA Complex', monthDuration: 4, id: 44 },
//     { title: 'FullStack', monthDuration: 7 },
//     { title: 'Frontend', monthDuration: 4 }
// ];
// // -- відсортувати його за спаданням за monthDuration
// // console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// let coursesAndDurationArray = [
//     { title: 'JavaScript Complex', monthDuration: 5 },
//     { title: 'Java Complex', monthDuration: 6 },
//     { title: 'Python Complex', monthDuration: 6 },
//     { title: 'QA Complex', monthDuration: 4, id: 44 },
//     { title: 'FullStack', monthDuration: 7 },
//     { title: 'Frontend', monthDuration: 4 }
// ];
// // console.log(coursesAndDurationArray.sort((a,b) => b.monthDuration-a.monthDuration));
//
// // // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// // // console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5));
//
// // console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 4));
// // // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// // // console.log(coursesAndDurationArray.map((item, index) => {
// // //   return {
// // //     id:index + 1,
// // //     title: item.title,
// // //     monthDuration: item.monthDuration,
// // //   }
// // // }));
// // //
// // // console.log(coursesAndDurationArray)
// //
//
// console.log(coursesAndDurationArray.map((item,index) => {
//     return{
//         id:index+1,
//         title: item.title,
//         monthDuration: item.monthDuration
//     }
// }))
// console.log(coursesAndDurationArray);






// // =========================
// //     описати колоду карт (від 6 до туза без джокерів)
// let cards = [
// //spade black
//     { cardSuit: 'spade', value: '6', color: 'black' },
//     { cardSuit: 'spade', value: '7', color: 'black' },
//     { cardSuit: 'spade', value: '8', color: 'black' },
//     { cardSuit: 'spade', value: '9', color: 'black' },
//     { cardSuit: 'spade', value: '10', color: 'black' },
//     { cardSuit: 'spade', value: 'jack', color: 'black' },
//     { cardSuit: 'spade', value: 'queen', color: 'black' },
//     { cardSuit: 'spade', value: 'king', color: 'black' },
//     { cardSuit: 'spade', value: 'ace', color: 'black' },
// //diamond red
//     { cardSuit: 'diamond', value: '6', color: 'red' },
//     { cardSuit: 'diamond', value: '7', color: 'red' },
//     { cardSuit: 'diamond', value: '8', color: 'red' },
//     { cardSuit: 'diamond', value: '9', color: 'red' },
//     { cardSuit: 'diamond', value: '10', color: 'red' },
//     { cardSuit: 'diamond', value: 'jack', color: 'red' },
//     { cardSuit: 'diamond', value: 'queen', color: 'red' },
//     { cardSuit: 'diamond', value: 'king', color: 'red' },
//     { cardSuit: 'diamond', value: 'ace', color: 'red' },
// //heart red
//     { cardSuit: 'heart', value: '6', color: 'red' },
//     { cardSuit: 'heart', value: '7', color: 'red' },
//     { cardSuit: 'heart', value: '8', color: 'red' },
//     { cardSuit: 'heart', value: '9', color: 'red' },
//     { cardSuit: 'heart', value: '10', color: 'red' },
//     { cardSuit: 'heart', value: 'jack', color: 'red' },
//     { cardSuit: 'heart', value: 'queen', color: 'red' },
//     { cardSuit: 'heart', value: 'king', color: 'red' },
//     { cardSuit: 'heart', value: 'ace', color: 'red' },
// //clubs black
//     { cardSuit: 'clubs', value: '6', color: 'black' },
//     { cardSuit: 'clubs', value: '7', color: 'black' },
//     { cardSuit: 'clubs', value: '8', color: 'black' },
//     { cardSuit: 'clubs', value: '9', color: 'black' },
//     { cardSuit: 'clubs', value: '10', color: 'black' },
//     { cardSuit: 'clubs', value: 'jack', color: 'black' },
//     { cardSuit: 'clubs', value: 'queen', color: 'black' },
//     { cardSuit: 'clubs', value: 'king', color: 'black' },
//     { cardSuit: 'clubs', value: 'ace', color: 'black' },
// ]
// // - знайти піковий туз


// // - всі шістки
// // console.log(cards.filter((card) => card.value === '6'));
// // - всі червоні карти
// // console.log(cards.filter((card) => card.color === 'red'));
// // - всі буби
// // console.log(cards.filter((card) => card.cardSuit === 'diamond'));
// // - всі трефи від 9 та більше
// // console.log(cards.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value)));
//
// //
// // {
// //   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //       value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }
// //
// // =========================
// //
// //     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// // const box = cards.reduce((acc, current) => {
// //   acc[current.cardSuit].push(current);
// //   return acc;
// // }, { spade:[], diamond:[], heart:[], clubs:[] });
// // console.log(box)
//
// // V2
// // const box = cards.reduce((acc, current) => {
// //   switch (current.cardSuit) {
// //     case 'spade':
// //       acc.spades.push(current);
// //       break;
// //     case 'diamond':
// //       acc.diamonds.push(current);
// //       break;
// //     case 'heart':
// //       acc.hearts.push(current);
// //       break;
// //     case 'clubs':
// //       acc.clubs.push(current);
// //       break;
// //   }
// //   return acc;
// // }, { spades:[], diamonds:[], hearts:[], clubs:[] });
// // console.log(box);
//
// // =========================
// //     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // --написати пошук всіх об'єктів, в який в modules є sass
// console.log(coursesArray.filter((item) => item.modules.includes('sass')));
// // --написати пошук всіх об'єктів, в який в modules є docker
// console.log(coursesArray.filter((item) => item.modules.includes('docker')));
//
//
// // let booksArr = [{
// //   title: "Around the world in 350 days",
// //   pageCount: 538,
// //   authors: [{
// //     name: "Zhul Vern",
// //     age: 47
// //   }, {
// //     name: "Felisity Smoak",
// //     age: 22
// //   }, {
// //     name: "Frank Bartinelli",
// //     age: 22
// //   }]
// //
// // },{
// //   title: "Harry Potter",
// //   pageCount: 280,
// //   authors: [{
// //     name: "Joan Roalling",
// //     age: 38
// //   }, {
// //     name: "Oliver Queen",
// //     age: 33
// //   }, {
// //     name: "John Diggle",
// //     age: 40
// //   }]
// // },
// //   {
// //   title: "Angel Empire",
// //   pageCount: 340,
// //   authors: [
// //     { name: "Bernar Verber", age: 60 }, { name: "Amanda Waller", age: 60 }
// //   ]
// // }];
// //
// // const a = booksArr.filter(book => book.pageCount > 280);
//
// // console.log(booksArr.sort((a,b) => a.pageCount - b.pageCount));