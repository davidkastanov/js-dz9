


// Завдання 1 Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].


const logItem = function(array) {
    for (let i = 0; i < array.length; i += 1){
        console.log(` ${i + 1} - ${ array[i]}`);
    }
    return array;
}
console.log(logItem(['Mango', 'Poly', 'Ajax']));





// Завдання 2 Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.


const calculateEngravingPrice = function(message, pricePerWord) {
    const result = message.split(" ");
    const totalPrice = result.length * pricePerWord;
    return totalPrice;
}

const stringMessage = "Напиши скрипт підрахунку вартості гравіювання прикрас";
const price = 7000;

const newMessage = "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore tempore facilis minus cumque asperiores corporis reprehenderit exercitationem debitis Numquam iusto blanditiis fuga adipisci voluptatibus assumenda modi harum mollitia velit animi sadam?";
const newPrice = 10000;

console.log(calculateEngravingPrice(stringMessage, price));
console.log(calculateEngravingPrice(newMessage, newPrice));




// Завдання 3 Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.



const findLongestWord = function(string) {
  const words = string.split(" ");
  let longestWord = "";
  for (const i of words) {
    if (i.length  > longestWord.length) {
      longestWord = i;
    }
  }
  console.log(words);
  console.log(longestWord);
  return longestWord;
}
findLongestWord("ahhhhhhhhhfuerufhj fjejrfioerhjf fekjfeioreirjfeoifjsdbdcsnm");




// Завдання 4 Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

const formatString = function(stringTwo) {
  if (stringTwo.length < 40) {
    console.log(stringTwo);
  } else {
    console.log(stringTwo.slice(0 , 40) + '...' );
  }
}
formatString("ferfefioerfjeakvnkdahgiefeurfghsjbcssdfwefds");
formatString("feriwdjkflasbfns");
 
// Завдання 5 Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.
const checkForSpam = function(message) {
  const normalized = message.toLowerCase();
  if (normalized.includes('spam')) {
    return true;
  } else if (normalized.includes('sale')) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam(""));
console.log(checkForSpam("sale"));
console.log(checkForSpam("spam"));







// Завдання 6 Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.


let input;
const numbers = [];
let total = 0;

input = prompt('Введіть числа через кому наприклад: 1, 2, 3');

if (input) {
  const parts = input.split(',');

  for (const part of parts) {
    numbers.push(Number(part));
  }

  for (const num of numbers) {
    total += num;
  }

  console.log(`Загальна сума  всіх чисел дорівнює ${total}`);
} else {
  console.log('Користувач нічого не ввводив або натиснув cancel');
}




