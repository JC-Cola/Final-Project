// Ai generated words
const words = `ability able about above accept according account across act action activity actually add address administration admit adult affect after again against age agency agent ago agree agreement ahead air all allow almost alone along already also although always American among amount analysis and animal
   another answer any anyone anything appear apply approach area argue arm around arrive art article artist
   as ask assume at attack attention attorney audience author authority available avoid away baby back bad bag
   ball bank bar base be beat beautiful because become bed before begin behavior behind believe benefit best
   better between beyond big bill billion bit black blood blue board body book born both box boy break bring
   brother budget build building business but buy by call camera campaign can cancer candidate capital car card
   care career carry case catch cause cell center central century certain certainly chair challenge chance change
   character charge check child choice choose church citizen city civil claim class clear clearly close coach
   cold collection college color come commercial common community company compare computer concern condition
   conference Congress consider consumer contain continue control cost could country couple course court cover
   create crime cultural culture cup current customer cut dark data daughter day dead deal death debate decade
   decide decision deep defense degree Democrat democratic describe design despite detail determine develop
   development die difference different difficult dinner direction director discover discuss discussion disease
   do doctor dog door down draw dream drive drop drug during each early east easy eat economic economy edge
   education effect effort eight either election else employee end energy enjoy enough enter entire environment
   especially establish even evening event ever every everybody everyone everything evidence exactly example
   executive exist expect experience expert explain eye face fact factor fail fall family far fast father fear
   federal feel feeling few field fight figure fill film final finally financial find fine finger finish fire
   firm first fish five floor fly focus follow food foot for force foreign forget form former forward four free
   friend from front full fund future game garden gas general generation get girl give glass go goal good
   government great green ground group grow growth guess gun guy hair half hand hang happen happy hard have he
   head health hear heart heat heavy help her here herself high him himself his history hit hold home hope
   hospital hot hotel hour house how however huge human hundred husband I idea identify if image imagine impact
   important improve in include including increase indeed indicate individual industry information inside
   instead institution interest interesting international interview into investment involve issue it item its
   itself job join just keep key kid kill kind kitchen know knowledge land language large last late later laugh
   law lawyer lay lead leader learn least leave left leg legal less let letter level lie life light like likely
   line list listen little live local long look lose loss lot love low machine magazine main maintain major
   majority make man manage management manager many market marriage material matter may maybe me mean meaning
   measure media medical meet meeting member memory mention message method middle might military million mind
   minute miss mission model modern moment money month more morning most mother mouth move movement movie Mr
   Mrs much music must my myself name nation national natural nature near nearly necessary need network never
   new news newspaper next nice night no none nor north not note nothing notice now number occur of off offer
   office officer official often oh oil ok old on once one only onto open operation opportunity option or order
   organization other others our out outside over own owner page pain painting paper parent part participant
   particular particularly partner party pass past patient pattern pay peace people per perform performance
   perhaps period person personal phone physical pick picture piece place plan plant play player PM point police
   policy political politics poor popular population position positive possible power practice prepare present
   president pressure pretty prevent price private probably problem process produce product production
   professional professor program project property protect prove provide public pull purpose push put quality
   question quickly quite race radio raise range rate rather reach read ready real reality realize really reason
   receive recent recently recognize record red reduce reflect region relate relationship religious remain
   remember remove report represent Republican require research resource respond response responsibility rest
   result return reveal rich right rise risk road rock role room rule run safe same save say scene school
   science scientist score sea season seat second section security see seek seem sell send senior sense series
   serious serve service set seven several shake share she shoot short shot should shoulder show side
   sign significant similar simple simply since sing single sister sit site situation six size skill skin small
   smile so social society soldier some somebody someone something sometimes son song soon sort sound source
   south southern space speak special specific speech spend sport spring staff stage stand standard star start
   state statement station stay step still stock stop store story strategy street strong structure student study
   stuff style subject success successful such suddenly suffer suggest summer support sure surface system table
   take talk task tax teach teacher team technology television tell ten tend term test than thank that the
   their them themselves then theory there these they thing think third this those though thought thousand
   threat three through throughout throw thus time to today together tonight too top total tough toward town
   trade traditional training travel treat treatment tree trial trip trouble true truth try turn TV two type
   under understand unit until up upon us use usually value various very victim view violence visit voice vote
   wait walk wall want war watch water way we weapon wear week weight well west western what whatever when
   where whether which while white who whole whom whose why wide wife will win wind window wish with within
   without woman wonder word work worker world worry would write writer wrong yard yeah year yes yet you young
   your yourself`.split(/\s+/);


const num = document.querySelector('.numbers')
const punc = document.querySelector('.punc')
const time = document.querySelector('.times')

let title=document.querySelector('.title')
let selected=localStorage.getItem('length')
title.innerHTML=`${selected} Second Typing Test`

let countdownElement=document.getElementById("countdown")
countdownElement.innerHTML=`${selected}`

console.log(countdown,"234")
// 45 charachters per line

let wordCount=0

let startTimer=0

// let timeLeft = timelength;
// const countdownElement = document.getElementById('countdown');
// // const select=document.querySelector('.timer')
// select.addEventListener('change', function () {
//     const selected = select.value;
//     timeLeft=selected
//     title.innerHTML=`${selected} Second Typing Test`

//     countdown.innerHTML=selected
    
//   });

// AI generated function to adjust for max width
function isOverflowing(element) {
   return element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight;
 }




const element1 = document.querySelector(".one")
let writing1=element1.textContent
const element2 = document.querySelector(".two")
let writing2=element2.textContent
const element3 = document.querySelector(".three")
let writing3=element3.textContent
const element4 = document.querySelector(".four")
let writing4=element4.textContent
const element5 = document.querySelector(".five")
let writing5=element5.textContent

let yesnum=false
let yespunc=false
let yestime=false
let puncexample=`.,;!:?`

console.log(words)
let numpunc=0
let cap=true
function generate(element,writing){
   //isOverflowing function is AI
   let position=0
   
    while (!isOverflowing(element)){
        
        place=Math.floor(Math.random() * (words.length-1)) + 1
        if (yesnum==true && Math.floor(Math.random()*(5)+1)==1 && position!=0){
            
            writing+=Math.floor(Math.random() * (10 - 1 + 1) + 1).toString()
            writing+=" "
        }
        numpunc+=1
        if (yespunc==true && Math.floor(Math.random()*(2)+1)==1 && numpunc>=5 && position!=0){
            cap=true
            numpunc=0
            writing=writing.slice(0,writing.length-1)
            writing+=puncexample[Math.floor(Math.random() * (puncexample.length - 1 ) + 1).toString()]
            writing+=" "
        }
        position+=1
    //console.log(words[place])  
        if (cap){
            cap=false
            writing+=words[place][0].toUpperCase()+words[place].slice(1)
        }
        else{
            writing+=words[place]
        }
        a=words[place].length
        
        writing+=" "
        element.textContent=writing
    }
    element.textContent=writing.substring(0,writing.length-2-a)
}


generate(element1,writing1)
element1.innerHTML=`<span class="custom-caret"></span>${element1.innerHTML}`
console.log(element1)
generate(element2,writing2)
generate(element3,writing3)
generate(element4,writing4)
generate(element5,writing5)
num.addEventListener("click",function(){
    element1.innerHTML=""
    writing1=""
    element2.innerHTML=""
    writing2=""
    element3.innerHTML=""
    writing3=""
    element4.innerHTML=""
    writing4=""
    element5.innerHTML=""
    writing5=""
    if (yesnum==true){
     yesnum=false
    }
    else{
     yesnum=true
     //console.log(yesnum)
     
    }
    generate(element1,writing1)
    generate(element2,writing2)
    generate(element3,writing3)
    generate(element4,writing4)
    generate(element5,writing5)
    wordCount=0
   
    title.innerHTML=`${selected} Second Typing Test`

    countdown.innerHTML=selected
    writing1=element1.textContent
    first=``
    numpunc=0
    cap=true
    second=writing1
    element1.innerHTML=`<span class="custom-caret"></span>${element1.innerHTML}`
    cur=0
    start=0
 })

 punc.addEventListener("click",function(){
    element1.innerHTML=""
    writing1=""
    element2.innerHTML=""
    writing2=""
    element3.innerHTML=""
    writing3=""
    element4.innerHTML=""
    writing4=""
    element5.innerHTML=""
    writing5=""
    if (yespunc==true){
     yespunc=false
    }
    else{
     yespunc=true
     //console.log(yesnum)
     
    }
    generate(element1,writing1)
    generate(element2,writing2)
    generate(element3,writing3)
    generate(element4,writing4)
    generate(element5,writing5)
    writing1=element1.textContent
    
    title.innerHTML=`${selected} Second Typing Test`

    countdown.innerHTML=selected
    element1.innerHTML=`<span class="custom-caret"></span>${element1.innerHTML}`
    first=``
    second=writing1
    cur=0
    start=0
    wordCount=0
    numpunc=0
    cap=true
 })

writing1=element1.textContent
let first=``
let second=writing1
let cur=0
// setInterval(function() {
//     writing1=element1.textContent
    //console.log(writing1)
    // if (turn==1){
    //     if (writing1[cur+1]===" "){
    //         element1.innerHTML = `${writing1.slice(0,cur)}<span style="color:white">${`${writing1[cur]}&nbsp`}</span>${writing1.slice(cur+1)}`;
    //     }else if(writing1[cur]===" " ||writing1[cur-1]===" "){
    //      element1.innerHTML = `${writing1.slice(0,cur)}<span style="color:white">${`&nbsp${writing1[cur]}`}</span>${writing1.slice(cur+1)}`;
    //     }
    //     else{
    //         element1.innerHTML = `${writing1.slice(0,cur)}<span style="color:white">${writing1[cur]}</span>${writing1.slice(cur+1)}`;
    //     }
    //     turn=0
    // }else{
    //     if (writing1[cur+1]===" "){
    //         element1.innerHTML = `${writing1.slice(0,cur)}<span style="color:#4fc3f7">${`${writing1[cur]}&nbsp`}</span>${writing1.slice(cur+1)}`;
    //     }else if(writing1[cur]===" " ||writing1[cur-1]===" "){
    //      element1.innerHTML = `${writing1.slice(0,cur)}<span style="color:#4fc3f7">${`&nbsp${writing1[cur]}`}</span>${writing1.slice(cur+1)}`;
    //     }
    //     else{
    //         element1.innerHTML = `${writing1.slice(0,cur)}<span style="color:#4fc3f7">${writing1[cur]}</span>${writing1.slice(cur+1)}`;
    //     }
    //     turn=1i


    // }
    // //4fc3f7
  
//    }, 500);






// document.addEventListener('keydown',function(e){
//     if(e.key==" "){
//         e.preventDefault()
//     }
   
//     if (e.key.length===1){
//         if (e.key.toLowerCase()===writing1[cur].toLowerCase()){
//             if (writing1[cur]==" "){
//                 console.log("@34q")
//                 element1.innerHTML = `<span style="color:#ffffff;">${writing1.slice(0,cur)}</span><span style="color:green;">&nbsp</span><span style="color:grey">${writing1.slice(cur+1)}</span>`
//             }else if(writing1[cur+1]==" "){
//                 element1.innerHTML = `<span style="color:#ffffff;">${writing1.slice(0,cur)}</span><span style="color:green;">${writing1[cur]}&nbsp</span><span style="color:grey">${writing1.slice(cur+2)}</span>`
//             }
//             else{
//                 element1.innerHTML = `<span style="color:#ffffff;">${writing1.slice(0,cur)}</span><span style="color:green;">${writing1[cur]}</span><span style="color:grey">${writing1.slice(cur+1)}</span>`
//             }
//         }
//         else{
//             if (writing1[cur]==" "){
//                 console.log("@34q")
//                 element1.innerHTML = `<span style="color:#ffffff;">${writing1.slice(0,cur)}</span><span style="color:red;">&nbsp</span><span style="color:grey">${writing1.slice(cur+1)}</span>`
//             }else if(writing1[cur+1]==" "){
//                 element1.innerHTML = `<span style="color:#ffffff;">${writing1.slice(0,cur)}</span><span style="color:red;">${writing1[cur]}&nbsp</span><span style="color:grey">${writing1.slice(cur+2)}</span>`
//             }
//             else{
//                 element1.innerHTML = `<span style="color:#ffffff;">${writing1.slice(0,cur)}</span><span style="color:red;">${writing1[cur]}</span><span style="color:grey">${writing1.slice(cur+1)}</span>`
//             }
//         }
//         cur+=1
//     }
//  })
let start=0
document.addEventListener('keydown',function(e){
    if (startTimer==0){
        TimerStart()
    }
    if (cur>=writing1.length && start==0 || cur>=writing2.length&&start==1){
        wordCount+=1
            //space=true
        if (start==1){
            
            e.preventDefault()
            element1.innerHTML=element2.innerHTML
            element2.innerHTML=`${element3.innerHTML}`
            element3.innerHTML=element4.innerHTML
            element4.innerHTML=element5.innerHTML
            element5.innerHTML=""
            //caretEl=element1.querySelector("cust")
            element1.querySelector(".custom-caret").style.display="none"
            writing5=""
            generate(element5,writing5)
            cur=0
            first=``
            
            // writing1=element1.innerHTML
            // second=writing1
            writing2=element2.innerHTML
            element2.innerHTML=`<span class="custom-caret"></span>${element2.innerHTML}`

            second=writing2
           
                
            //console.log("end of string")
        }
        else{
            e.preventDefault()
            cur=0
            first=``
            element1.querySelector(".custom-caret").style.display="none"

            writing2=element2.innerHTML
            element2.innerHTML=`<span class="custom-caret"></span>${element2.innerHTML}`

            second=writing2
            start=1
        }
    
        

        
    }
    else{
        if(e.key==" "){
            e.preventDefault()
            wordCount+=1
        }
        if (start==0){

            typing(writing1,element1,e)
        }
        else{
            typing(writing2,element2,e)
        }

        
        
    }
})


function typing(writing1,element1,e){
    if (e.key.length===1){
        if (e.key===writing1[cur]){
            if (writing1[cur]==" "){
                first+=`<span style="color:#ffffff;">&nbsp</span>`
                //console.log("########")'
                
                //element1.innerHTML = `<span style="color:#ffffff;">${writing1.slice(0,cur)}</span><span style="color:green;">&nbsp</span><span style="color:grey">${writing1.slice(cur+1)}</span>`
            }
            // else if(writing1[cur+1]==" "){
                
            //     first+=`<span style="color:#ffffff;">${writing1[cur]}</span>`
            // }
            else{
                first+=`<span style="color:#ffffff;">${writing1[cur]}</span>`
                //element1.innerHTML = `<span style="color:#ffffff;">${writing1.slice(0,cur)}</span><span style="color:green;">${writing1[cur]}</span><span style="color:grey">${writing1.slice(cur+1)}</span>`
            }
        }
        else{
            if (writing1[cur]==" "){
                //console.log("######")
                first+=`<span style="color:red;">&nbsp</span>`
                //element1.innerHTML = `<span style="color:#ffffff;">${writing1.slice(0,cur)}</span><span style="color:red;">&nbsp</span><span style="color:grey">${writing1.slice(cur+1)}</span>`
            }
            // else if(writing1[cur+1]==" "){
                
            //     first+=`<span style="color:red;">${writing1[cur]}&nbsp</span>`
            // }
            else{
                first+=`<span style="color:red;">${writing1[cur]}</span>`
                //element1.innerHTML = `<span style="color:#ffffff;">${writing1.slice(0,cur)}</span><span style="color:red;">${writing1[cur]}</span><span style="color:grey">${writing1.slice(cur+1)}</span>`
            }
        }
        
        second=second.slice(1)
        if(second[0]==" "){
            element1.innerHTML=`${first}<span class="custom-caret"></span>&nbsp${second.slice(1)}`
        }
        else{
            element1.innerHTML=`${first}<span class="custom-caret"></span>${second}`
        }
        //console.log(first,cur,second,writing1)
        //element1.innerHTML=`${first}${second}`
        cur+=1
    }

    
    if (wordCount%2==0){
        console.log(wordCount)
    }
    
}    



// timer

let timer = null;

function TimerStart(){
    // ai timer
  // Prevent multiple timers
  if (timer !== null) return;


  timer = setInterval(() => {
    selected--;
    countdownElement.textContent = selected;
    if (selected <= 0) {
        clearInterval(timer);
        window.location.href = '../../../Home/Score_page/index.html';
        //ai json.parse,stringify
        let storedWords = JSON.parse(localStorage.getItem('words') || '[]');
        storedWords.push(wordCount);
        localStorage.setItem('words', JSON.stringify(storedWords));
        


      

        console.log('done',wordCount)
    }
  }, 1000);
  console.log(window.location.href,localStorage.getItem('words'))
}

console.log(localStorage.getItem('length'))

// Selected
const numbersBtn = document.querySelector('.numbers');
const puncBtn = document.querySelector('.punc');

numbersBtn.addEventListener('click', function () {
    this.classList.toggle('selected');
});

puncBtn.addEventListener('click', function () {
    this.classList.toggle('selected');
});


const select=document.querySelector('.timer')
select.addEventListener('change', function () {
    const selected = select.value;
    
    title.innerHTML=`${selected} Second Typing Test`

    countdown.innerHTML=selected
    
  });