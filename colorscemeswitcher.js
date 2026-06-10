const buttons =document.querySelectorAll('.button')

const body= document.querySelector("body")
const heading1 = document.querySelector("h1")
const heading2 = document.querySelector("h2")

buttons.forEach(function(button){
    console.log(button);
    
button.addEventListener('click',function(e){
console.log(e)
console.log(e.target)
if(e.target.id === 'pink'){
    body.style.backgroundColor="pink";
    heading1.style.color="rgb(139, 23, 123)"
    heading2.style.color="rgb(153, 34, 143)"

}
else if(e.target.id === 'white'){
    body.style.backgroundColor="white";
    heading1.style.color="rgb(54, 8, 45)"
    heading2.style.color="rgb(54, 8, 45)"

}
else if(e.target.id === 'cyan'){
    body.style.backgroundColor="cyan";
    heading1.style.color="rgb(40, 72, 168)"
    heading2.style.color="rgb(54, 45, 235)"
}
else if(e.target.id === 'yellow'){
    body.style.backgroundColor="yellow";
    heading1.style.color="rgb(58, 65, 30)"
    heading2.style.color="rgb(69, 74, 33)"
}
})
});