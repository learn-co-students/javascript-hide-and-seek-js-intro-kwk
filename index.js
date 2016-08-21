function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div.target');
}

function deepestChild() {
  var firstDiv = document.querySelector('div');
  var nextDiv = firstDiv.querySelector('div');

  while(nextDiv) {
    firstDiv = nextDiv;
    nextDiv = firstDiv.querySelector('div');
  }

  return firstDiv;
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (n + parseInt(lis[i].innerHTML)).toString();
  }
}
