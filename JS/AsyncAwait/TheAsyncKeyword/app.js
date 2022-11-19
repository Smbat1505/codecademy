// АСИНХРОННОЕ ОЖИДАНИЕ
// Асинхронное ключевое слово
// Ключевое asyncслово используется для написания функций, обрабатывающих асинхронные действия. Мы заключаем нашу асинхронную логику в функцию, перед которой стоит asyncключевое слово. Затем мы вызываем эту функцию.
//
// async function myFunc() {
//   // Function body here
// };
//
// myFunc();
// asyncВ этом уроке мы будем использовать объявления функций, но мы также можем создавать asyncвыражения функций:
//
// const myFunc = async () => {
//   // Function body here
// };
//
// myFunc();
// asyncфункции всегда возвращают обещание. Это означает, что мы можем использовать традиционный синтаксис промисов, как .then()и .catchс нашими asyncфункциями. Функция asyncвернется одним из трех способов:
//
// Если функция ничего не возвращает, она вернет обещание с разрешенным значением undefined.
// Если функция возвращает значение, отличное от обещания, она вернет обещание, преобразованное в это значение.
// Если обещание возвращается из функции, она просто вернет это обещание.
// async function fivePromise() {
//   return 5;
// }
//
// fivePromise()
// .then(resolvedValue => {
//     console.log(resolvedValue);
//   })  // Prints 5
// В приведенном выше примере, несмотря на то, что мы возвращаем 5значение внутри тела функции, на самом деле при вызове возвращается fivePromise()обещание с разрешенным значением 5.
//
// Напишем asyncфункцию!
//
// инструкции
// 1.
// Мы предоставили функцию, withConstructor()которая принимает число. Если число равно 0, возвращается обещание, которое преобразуется в строку 'zero'. Если число не равно 0, возвращается обещание, которое преобразуется в строку 'not zero'. Найдите минутку, чтобы понять эту функцию и код, который следует за ней. Когда вы будете готовы запустить его, введите node app.jsв терминал и нажмите enter.
//
// 2.
// Напишите asyncфункцию, withAsync()воспроизводящую функциональность withConstructor(). Хотя ваша функция вернет обещание, она не должна создавать обещание с использованием newключевого слова. Вместо этого он должен полагаться на тот факт, что asyncфункция автоматически возвращает обещание.
//
// Когда будете готовы, проверьте свою работу, чтобы перейти к следующему шагу.
//
//
// Hint
// Remember that an async function returns a promise with a resolved value equal to the return value of that function. The function:
//
// function nativePromise(){
//   return new Promise((resolve, reject) => {
//       resolve('yay!');
//   })
// }
// Could be written:
//
// async function asyncPromise(){
//   return 'yay!';
// }
// 3.
// Теперь проверьте свой код! Раскомментируйте тестовый код, который мы написали внизу app.js. В терминале введите node app.jsи нажмите enter, чтобы выполнить код.
//



function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
});

async  function withAsync (num) => {
return num === 0 ? "zero" : "not zero"
}
// Write your code below:

// Leave this commented out until step 3:

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})
