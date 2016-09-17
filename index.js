function getFirstSelector(selector){
  var element=document.querySelector(selector);
  return element;
}
function nestedTarget(){
return document.querySelector('#nested .target')
//return list.getElementsByCssName('target');

}
function increaseRankBy(n){
    const rankedLists = document.querySelectorAll('.ranked-list')

    for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children

      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }
  }

function deepestChild(){
  let node = document.getElementById('grand-node')
    let nextNode = node.children[0]

    while (nextNode) {
      node = nextNode
      nextNode = node.children[0]
    }

    return node
}
