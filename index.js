//Code your solution here
function getFirstSelector(selection){
  return document.querySelector(selection)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  var array = document.querySelectorAll(".ranked-list")
  for(var i = 0; i < array.length; i++){
    array[i] = parseInt(array[i]) + parseInt(n)
  }
}