let wpm=document.querySelector('.wpm')
let acc=document.querySelector('.acc')
let speed=document.querySelector('.speed')


let clear=document.getElementById('clear')
clear.addEventListener('click',function(){
    localStorage.removeItem('words')
    localStorage.removeItem('wrong')
})
let wordCount=JSON.parse(localStorage.getItem('words')||'[]')
let length = parseInt(localStorage.getItem('length') || '1')
let wrongCount=JSON.parse(localStorage.getItem('wrong')||'[]')
console.log(wordCount[wordCount.length-1],length)
wpm.innerHTML=wordCount[wordCount.length-1]*(60/length)
acc.innerHTML=`${Math.round((length-wrongCount)/length*100)}%`
// acc.innerHTML=localStorage.getItem('wrong')[localStorage.getItem('wrong').length-1]
console.log(wpm.innerHTML,acc,speed)
console.log(localStorage.getItem('words'))
console.log(localStorage.getItem('wrong'))
