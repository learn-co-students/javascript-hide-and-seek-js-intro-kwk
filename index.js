function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var deep = document.querySelectorAll('#grand-node div');
  return deep[deep.length-1];
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list li');
  for(var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

deepestChild();
