// // for (let i =0; i<10; i++)
// //     document.write( i,`<div>пентагон</div>`);
//


// let i = 0;
// while (i < 20) {
//     console.log( i + ' Пентагон' );
// i++;}




// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// console.log(listOfItems);
//
//     document.write(`<div>`)
//     document.write(`<ul>`)
//     for (const modyl of listOfItems) {
//         document.write(`<li>${modyl}</li>`)
//     }
//     document.write(`</ul>`)
//     document.write(`</div>`)




// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     document.write(
//         `<div>
//                  <h2>${product.title} ${product.price}</h2>
//                  <img src="${product.image}">
//
//         </div>`
// );
//         }


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
for (let user of users) {
    // let user = user[i]
    if(users[1].status===true)
    {
        console.log(user);
    }
}

