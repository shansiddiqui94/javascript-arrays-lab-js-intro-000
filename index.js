// var kittens = [ 'Milo', 'Otis', 'Garfield'] //define your array here
//
// function destructivelyAppendKitten(name){
//   kittens.push('Ralph')
//   }
//
// function destructivelyPrependKitten(name){
//   kittens.unshift('Bob')
// }
//
// function destructivelyRemoveLastKitten(){
//   kittens.pop()
// }
//
// function destructivelyRemoveFirstKitten(){
//   kittens.shift()
// }
//
// function appendKitten(name){ // append will push the element to the end of the array... While Prepend will push the element to begenning of the array
//  var copied_array = [...kittens, name]
//  return copied_array
// }
//
// function prependKitten(name){
//   var newArr = [name, ...kittens]
//   return newArr
// }
//
// function removeLastKitten(){
//   var kit1 = [...kittens]
//   return kit1.slice(0, kittens.length-1)   // We do this because we are targeting only the last element in the Array. but why start at 0
// }
//
// function removeFistKitten(){
//   var kit2 = kittens.slice(1)
//   return kit2
// }





var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var copiedArr = [...kittens, name]
  return copiedArr
}

function prependKitten(name){
  var kit1 = [name, ...kittens]
  return kit1
}

function removeLastKitten(){
  return kittens.slice(0,2)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
