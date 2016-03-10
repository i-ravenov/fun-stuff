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

function getNextColor(i, order)
{
	var frequency = 0.01;
    var center = 128;
    var amplitude = 127;
	var r = Math.sin(frequency*i - 2*Math.PI*order/8) * amplitude + center;
	r = parseInt(r);
	var g = Math.sin(frequency*i + 2*Math.PI/3 - 2*Math.PI*order/8) * amplitude + center;
	g = parseInt(g);
	var b = Math.sin(frequency*i + 4*Math.PI/3 - 2*Math.PI*order/8) * amplitude + center;
	b = parseInt(b);
	var color = 'rgb(' +  r + ',' + g + ',' + b + ')';
	return color;
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
  
  var i = 0;
  
  setInterval(function() {
	i = i + 1;
    setColor(firstLeaf, getNextColor(i,3));
	setColor(secondLeaf, getNextColor(i,7));
	setColor(thirdLeaf, getNextColor(i,6));
	setColor(fourthLeaf, getNextColor(i,4));
	setColor(fifthLeaf, getNextColor(i,5));
	setColor(sixthLeaf, getNextColor(i,2));
	setColor(seventhLeaf, getNextColor(i,8));
	setColor(eighthLeaf, getNextColor(i,1));
  }, 7);
});