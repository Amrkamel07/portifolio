
//menuuuu mobile
let menuicon =document.querySelector('#menuicon')
let navbar=document.querySelector('.navbar')
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
//read more
let readmore=document.getElementById('btn2')
readmore.onclick=(change)=>{if(readmore.innerHTML==="Read More")
    {readmore.innerHTML="show less"}
    else if(readmore.innerHTML==="show less"){
        readmore.innerHTML="Read More"
    } 
}
//slider
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let webs = document.querySelectorAll('.web')
    document.querySelector('.slide').appendChild(webs[0])
})

prev.addEventListener('click', function(){
    let webs = document.querySelectorAll('.web')
    document.querySelector('.slide').prepend(webs[webs.length - 1]) // here the length of webs = 6
})
//scrolltransaction
let section=document.querySelectorAll('section')
let navlink=document.querySelectorAll('header nav ul li a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=sec.scrolly
        let offset=sec.offsetTop-150
        let hieght=sec.offsetHeight
        let id=sec.getAttribute('id')
        if( top>offset && top<offset + hieght){
            navlink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav ul li a[href*='+id+']').classList.add('active')
                
            });
        }
    })
}
//contact form
const form=document.querySelector('form')

function sendemail(){

}
function checkinputs(){
    const items=document.querySelectorAll('.item')
    items.forEach(function (item){
        if(item.value===''){
            item.classList.add('error')
            item.parentElement.classList.add('error')
        }
        item.onkeyup=()=>{
            if(item.value!=''){
             item.classList.remove('error')
            item.parentElement.classList.remove('error')   
            }else{
                item.classList.add('error')
            item.parentElement.classList.add('error')
            }
        }
            
    })

}


form.addEventListener('submit', (e)=>{
  (e).preventDefault();
  checkinputs()
  //sendemail() 
})

//scroll arrow
let scrollarrow= document.getElementById('scrollarrow')
window.onscroll= ()=>

{
            let currentscroll=window.scrollY

    if(currentscroll >=400)
    {

        scrollarrow.style.display="block"
    }else
    {

         scrollarrow.style.display="none"
       
    }
}
scrollarrow.onclick=()=>{
    scroll({
    left:0,
    top:0,
    behavior:"smooth"  
    })
}

