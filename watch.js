let number=0
let id


document.getElementById('start').addEventListener('click',function(){
    id=setInterval(() => {
    number++
    document.getElementById('time').innerText=number
    console.log(number);
  
}, 1000);
})

document.getElementById('stop').addEventListener('click',function(){
    clearInterval(id)
})

document.getElementById('reset').addEventListener('click',function(){

    document.getElementById('time').innerText='0'
    number=0

})

