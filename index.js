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
  const rankedList = document.querySelectorAll(".ranked-list")
  for(var i = 0; i < rankedList.length; i++){
    let children = rankedList[i].children
    for(var j = 0; j < children.length; j++){
      children[i].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}