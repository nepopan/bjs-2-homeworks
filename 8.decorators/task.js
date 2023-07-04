//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({hash: hash, value: result});

    if (cache.length > 5) {
      cache.shift(); // удалить самый старый (первый) элемент кеша
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
  let isFirstCall = false;
  
  function wrapper(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout( () => { 
      func(args);
      wrapper.count++;
      }, delay);

    if (!isFirstCall) {
      func(...args); 
      wrapper.count++;
      isFirstCall = true;
    }
      wrapper.allCount++;
    }
   
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}