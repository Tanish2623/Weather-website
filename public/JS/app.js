

/*console.log('client side javascript is added')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) =>{
        console.log(data)
    })
})*/




const weatherform = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')
//messageOne.textContent = 'from javascript'

weatherform.addEventListener('submit',(e) => {
    e.preventDefault();

    const location = searchElement.value;
    messageOne.textContent='loading...'
    messagetwo.textContent=''
    fetch('http://localhost:3000/viewWeather?address='+location).then((response) => {
    response.json().then((data) =>{
        if(data.error){
            //console.log(data.error)
            messageOne.textContent=data.error
        }else{
        console.log(data.location)
        console.log(data.forecast)
            messageOne.textContent=data.location
            messagetwo.textContent=data.forecast
        }
    })
})
})
