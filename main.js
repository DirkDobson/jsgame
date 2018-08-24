/* There is an array and each element of it represents postiions of play
user click on one of the squares it puts a x on the position and removes it from the array
 a random number is then generated to tell the function which avalible postiions of the array to put a circle
There is then a compare function that compare if the user or computer has selected a possiblity to win
*/
var table = [a,b,c,d,e,f,g,h,i]

var aa = document.getElementById('aa')
var bb = document.getElementById('bb')
var cc = document.getElementById('cc')
var dd = document.getElementById('dd')
var ee = document.getElementById('ee')
var ff = document.getElementById('ff')
var gg = document.getElementById('gg')
var hh = document.getElementById('hh')
var ii = document.getElementById('ii')


aa.addEventListener('click',function(){
check(aa,a)
console.log(table)
})

function check(button, array,) {
  table.forEach(function() {
    if (button = array) 
    table.delete[array]
  })
// when button is pressed remove the corrisponding array element
}





