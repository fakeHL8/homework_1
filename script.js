const student = "Ромашов Владимир Владимирович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

let a = +prompt('Введите реальный счёт первой команды', 1) // Ввод реал1
let b = +prompt('Введите реальный счёт второй команды', 2) // Ввод реал2
let c = +prompt('Введите предпологаемый счёт первой команды', 1) // Ввод преда1
let d = +prompt('Введите предпологаемый счёт второй команды', 2) // Ввод преда2

let ab = [a, b];
let cd = [c, d];

if (a > b) {ab = 0}
else if (a == b) {ab = 1}
else ab = 2

if (c > d) {cd = 0}
else if (c == d) {cd = 1}

else cd = 2 
if (b == d, a == c) 
{
    console.log('Счёт и исход были угаданы верно!');
 }  
else if (ab == cd)
{
    console.log('Счёт не угадали, но исход угадали');
}
else
{ 
    console.log('Ни счёта, ни исхода не угадали')
}