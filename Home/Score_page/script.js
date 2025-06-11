let wpm=document.querySelector('.wpm')
let acc=document.querySelector('.acc')
let speed=document.querySelector('.speed')

// let clear=document.getElementById('clear')
// clear.addEventListener('click',function(){
//     localStorage.removeItem('words')
//     localStorage.removeItem('wrong')
// })
let wordCount=JSON.parse(localStorage.getItem('words')||'[]')

let amount=wordCount.length
let length = parseInt(localStorage.getItem('length') || '1')

let wrongCount=JSON.parse(localStorage.getItem('wrong')||'[]')
let charCount=JSON.parse(localStorage.getItem('totalChar')||'[]')
let charLength=charCount.length

console.log(wordCount[wordCount.length-1],length)

// let innerwpm=wordCount[wordCount.length-1]*(60/length)
// wpm.innerHTML=innerwpm
// console.log(wordCount[amount-1]-wrongCount[amount-1])
// let inneracc=Math.round((wordCount[amount-1]-wrongCount[amount-1])/wordCount[amount-1]*100)
// acc.innerHTML=`${inneracc}%`
// console.log(wpm.innerHTML,acc.innerHTML)
// speed.innerHTML=`${Math.floor(innerwpm*inneracc/100)}`


let innerwpm=Math.floor(charCount[charLength-1]*(60/length)/4.7)
wpm.innerHTML=innerwpm

let inneracc=Math.round((charCount[charLength-1]-wrongCount[amount-1])/charCount[charLength-1]*100)

acc.innerHTML=`${inneracc}%`
speed.innerHTML=`${Math.floor(innerwpm*inneracc/100)}`



console.log((wordCount),24234)
// acc.innerHTML=localStorage.getItem('wrong')[localStorage.getItem('wrong').length-1]
console.log(wpm.innerHTML,acc,speed)
console.log(localStorage.getItem('words'))
console.log(localStorage.getItem('wrong'))

const button = document.querySelector('.back');

button.addEventListener('click', function () {
  window.location.href = '../Home/Test_page/index.html';
})