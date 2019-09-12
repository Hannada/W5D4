


Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++){
    cb(this[i])
  }
}


Array.prototype.myMap = function (cb) {
  // if typeof cb === 'undefined'  
  const mapped = []
  function callback(el){
    mapped.push(cb(el))
  }
  this.myEach(callback)
  return mapped 
}


Array.prototype.myReduce = function (cb, initialValue) {
  const arr =  this;

  if (typeof initialValue === 'undefined') {
    initialValue = arr[0];
    arr.shift();
  }

  let reduced = initialValue;

  function callback(el){
    reduced = cb(reduced, el);
  }
  arr.myEach(callback);
  return reduced; 
}

u = [1,2,3]; 

function callback(acc, el) {
   return acc + el;
} 