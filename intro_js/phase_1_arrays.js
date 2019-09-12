Array.prototype.uniq = function () {
  let u = [] 
  for (let i = 0; i < this.length; i++){
    // console.log(u)
    if (!u.includes(this[i])) {
      u.push(this[i])
    }
  }
    return u;
}

Array.prototype.twoSum = function () {
  let u = []
  for (let i = 0; i < this.length; i++){
    if ((this[i] + this[i+1]) === 0){
      u.push([this[i], this[i+1]])
    }
  }
  return u; 
}

Array.prototype.transpose = function () {
  const u = []
  
  for (let i = 0; i < this[0].length; i++){
    const subArr = [] 
    for (let y = 0; y < this.length; y++){
      subArr.push(this[y][i])
    }
    u.push(subArr)
  }
  return u; 
}

myArr = [[1,2], [3,4], [5,6]]
// [[1, 3, 5], [2, 4, 6]]
myArr.transpose()