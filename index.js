function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const rankLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankLists.length; i++) {
    let children = rankLists[i].children
  for (let m = 0; m < children.length; m++) {
    children[m].innerHTML = parseInt(children[m].innerHTML) + n;
    }
  }
}

function deepestChild() {
  return document.querySelector("div#grand-node div div div div")
}
