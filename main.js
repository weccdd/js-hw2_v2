// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr =["lorem ipsum", 1544545, true, 16444454, undefined, null, "lorem ipsum", 444878, false, 47877];
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let bookHarryPotter=
    {
        title: "Harry Potter",
        pageCount: 245,
        genre: "Fantasy"
    };
let book1984=
    {
        title: "1984",
        pageCount: 188,
        genre: "Roman"
    };
let bookSherlockHolmes =
    {
        title:"Sherlock Holmes",
        pageCount: 200,
        genre:"Detective"
    };


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let bookHarryPotterAut=
    {
        title: "Harry Potter",
        pageCount: 245,
        genre: "Fantasy",
        authors:[
            {name:"J. K. Rowling",
                age: 50
            }
        ]
    };
let book1984Aut=
    {
        title: "1984",
        pageCount: 188,
        genre: "Roman",
        authors:[
            {name:"George Orwell",
                age: 46
            }
        ]
    };
let bookSherlockHolmesAut =
    {
        title:"Sherlock Holmes",
        pageCount: 200,
        genre:"Detective",
        authors:[
            {name:"Arthur Ignatius Conan Doyle",
                age: 71
            }
        ]

    };
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    { name: "Іван Петров", username: "ivan123", password: "qwerty123" },
    { name: "Марія Сидорова", username: "maria456", password: "abc123" },
    { name: "Олександр Коваль", username: "alex789", password: "password123" },
    { name: "Анна Іванова", username: "anna321", password: "secret456" },
    { name: "Петро Семенов", username: "peter", password: "securepwd" },
    { name: "Наталія Лисенко", username: "nata567", password: "myp@ssword" },
    { name: "Володимир Жуков", username: "volodya", password: "passw0rd" },
    { name: "Олена Кузьмінська", username: "olena99", password: "letmein" },
    { name: "Євгенія Грищенко", username: "evgenia", password: "p@ssw0rd" },
    { name: "Максим Савченко", username: "max123", password: "maxpass" }
];
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
//
// Логічні розгалуження:
//Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
if (x !== 0){
    console.log("Вірно!")
}else {
    console.log("Не вірно!")
}
a = 1;
if (a !== 0){
    console.log("Вірно!")
}else {
    console.log("Не вірно!")
}
a = 0;
if (a !== 0){
    console.log("Вірно!")
}else {
    console.log("Не вірно!")
}
a = -3;
if (a !== 0){
    console.log("Вірно!")
}else {
    console.log("Не вірно!")
}
//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).\
let time = 31;
if (time >= 0 && time <= 15){
    console.log(1)
}else if(time >= 16 && time <= 30){
    console.log(2)
}else if(time >= 31 && time <= 45){
    console.log(3)
}else if(time >= 46 && time <= 60){
    console.log(4)
}
//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 18;
if (day >= 0 && day <= 10){
    console.log(1)
}else if(day >= 11 && day<= 21){
    console.log(2)
}else if(day >= 22 && day <= 31){
    console.log(3)
}
//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfTheWeek = +prompt("Введіть порядковий номер дня.")
switch (dayOfTheWeek){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Saturday");
    default:
        console.log("Введіть дійсний порядковий номер")
}
//Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
let oneNum = +prompt("Введіть перше число");
let twoNum = +prompt("Введіть друге число");
if (oneNum < twoNum){
    console.log(twoNum)
}else if(oneNum > twoNum){
    console.log(oneNum)
}else if(oneNum === twoNum){
    console.log("Числа рівні.")
}else {
    console.log("Введіть дійсні числа")
}

//
//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
x = x || "default"
console.log(x)
//
//з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log("Супер!!!")
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log("Супер!!!")
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log("Супер!!!")
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log("Супер!!!")
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log("Супер!!!")
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log("Супер!!!")
}
