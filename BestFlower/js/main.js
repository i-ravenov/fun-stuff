function getRandomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) +
    ',' +
    (Math.floor(Math.random() * 256)) +
    ',' +
    (Math.floor(Math.random() * 256)) + ')';
};

function setColor(collection, color) {
  [].forEach.call(collection, function(el) {
    el.style.backgroundColor = color;
  });
};

document.addEventListener('DOMContentLoaded', function() {
  var firstLeaf = document.querySelectorAll('.head li:nth-child(1)');
  var secondLeaf = document.querySelectorAll('.head li:nth-child(2)');
  var thirdLeaf = document.querySelectorAll('.head li:nth-child(3)');
  var fourthLeaf = document.querySelectorAll('.head li:nth-child(4)');
  var fifthLeaf = document.querySelectorAll('.head li:nth-child(5)');
  var sixthLeaf = document.querySelectorAll('.head li:nth-child(6)');
  var seventhLeaf = document.querySelectorAll('.head li:nth-child(7)');
  var eighthLeaf = document.querySelectorAll('.head li:nth-child(8)');
  
  setInterval(function() {
    setColor(firstLeaf, getRandomColor());
	setColor(secondLeaf, getRandomColor());
	setColor(thirdLeaf, getRandomColor());
	setColor(fourthLeaf, getRandomColor());
	setColor(fifthLeaf, getRandomColor());
	setColor(sixthLeaf, getRandomColor());
	setColor(seventhLeaf, getRandomColor());
	setColor(eighthLeaf, getRandomColor());
  }, 750);
});