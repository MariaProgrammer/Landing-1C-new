//функция для работы с событием скролла
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  // код будет срабатывать раз в 1 секунду
  // document.addEventListener('scroll', throttle(function() {
  //   return console.log('Hey! It is', new Date().toUTCString())
  // }, 1000))