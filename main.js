/* There is an array and each element of it represents postiions of play
user click on one of the squares it puts a x on the position and removes it from the array
 a random number is then generated to tell the function which avalible postiions of the array to put a circle
There is then a compare function that compare if the user or computer has selected a possiblity to win
*/
var table = [a,b,c,d,e,f,g,h,i]
var cp = undefined
var user=[]
var aa = document.getElementById('aa')
var bb = document.getElementById('bb')
var cc = document.getElementById('cc')
var dd = document.getElementById('dd')
var ee = document.getElementById('ee')
var ff = document.getElementById('ff')
var gg = document.getElementById('gg')
var hh = document.getElementById('hh')
var ii = document.getElementById('ii')
var h1 = 0
var h2 = 0
var h3 = 0
var v1 = 0
var v2 = 0
var v3 = 0
var d1 = 0
var d2 = 0

aa.addEventListener('click',function() {
check2(a)
table.sort()
table.pop()
cp = cpchoice(cp)
cp = undefined
table.sort()
table.pop()
table.sort()
++h1
++d1
++v1
if (h1 === 3){
alert("Win")}
if (d1 ===3) {
  alert("Win")
}
if (v1 === 3) {
  alert("Win")
}
})

bb.addEventListener('click', function() {
  check2(b)
  table.sort()
  table.pop()
  cp = cpchoice(cp)
  cp = undefined
  table.sort()
  table.pop()
  table.sort()
  ++h1
  ++v2
  if (h1===3){
    alert("Win")
  }
  if (v2 === 3) {
    alert("Win")
  }
})

cc.addEventListener('click', function() {
  check2(c)
  table.sort()
  table.pop()
  cp = cpchoice(cp)
  cp = undefined
  table.sort()
  table.pop()
  table.sort()
  ++h1
  ++v3
  ++d2
  if (h1 === 3) {
    alert("Win")
  }
  if (v3 === 3) {
    alert("Win")
  }
  if (d2 === 3) {
    alert("Win")
  }
})

dd.addEventListener('click', function() {
  check2(d)
  table.sort()
  table.pop()
  cp = cpchoice(cp)
  cp = undefined
  table.sort()
  table.pop()
  table.sort()
  ++v1
  ++h2
  if (v1 === 3){
    alert("Win")
  }
  if (h2 === 3) {
    alert("Win")
  }
})

ee.addEventListener('click', function() {
  check2(e)
  table.sort()
  table.pop()
  cp = cpchoice(cp)
  cp = undefined
  table.sort()
  table.pop()
  table.sort()
  ++h2
  ++v2
  ++d1
  ++d2
  if (h2 === 3) {
    alert("Win")
  }
  if (v2 ===3) {
    alert("Win")
  }
  if (d1 ===3) {
    alert("Win")
  }
  if (d2 ===3) {
    alert("Win")
  }
})

ff.addEventListener('click', function() {
  check2(f)
  table.sort()
  table.pop()
  cp = cpchoice(cp)
  cp = undefined
  table.sort()
  table.pop()
  table.sort()
  ++h2
  ++v3
  if (h2 === 3) {
    alert("Win")
  }
  if (v3 === 3) {
    alert("Win")
  }
})
gg.addEventListener('click', function() {
  check2(g)
  table.sort()
  table.pop()
  cp = cpchoice(cp)
  cp = undefined
  table.sort()
  table.pop()
  table.sort()
  ++h3
  ++v1
  ++d2
  if (h3 === 3) {
    alert("Win")
  }
  if (v1 ===3) {
    alert("Win")
  }
  if (d2 ===3) {
    alert("Win")
  }
})
hh.addEventListener('click', function() {
  check2(h)
  table.sort()
  table.pop()
  cp = cpchoice(cp)
  cp = undefined
  table.sort()
  table.pop()
  table.sort()
  ++h3
  ++v2
  if(h3 ===3) {
    alert("Win")
  }
  if(v2 ===3) {
    alert("Win")
  }
})
ii.addEventListener('click', function() {
  check2(i)
  table.sort()
  table.pop()
  cp = cpchoice(cp)
  cp = undefined
  table.sort()
  table.pop()
  table.sort()
  ++h3
  ++v3
  ++d1
  if (h3 === 3) {
  alert("Win")
  }
  if (v3 === 3) {
    alert("Win")
  }
  if (d1 === 3) {
    alert("Win")
  }
})


// function check(button, array, num) {
//   table.forEach(function() {
//     if (button === array) 
//     user.push(array)
//     array.innerHTML = 'X'
//     delete table[num]
//   })
// }
// when button is pressed remove the corrisponding array element

function cpchoice(cp) {
  cp = [Math.floor(Math.random() * table.length)]
  table[cp].innerHTML = "O"
  delete table[cp]
   return cp
   
}

// function dontbreak() {
//   while (cp === undefined)
//   return table[Math.floor(Math.random() * table.length)] 
// }


function check2(array) {
  for(u = 0; u < table.length; u++)
  if (array == table[u]) {
  delete table[u]
  array.innerHTML = "X"
 }
}

