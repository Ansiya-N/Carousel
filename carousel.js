let currentIndex=0;
document.querySelectorAll('.icon1').forEach((item)=>{
    item.addEventListener("click",()=>{
        const index=parseInt(item.getAttribute('data-index'))-1;
        currentIndex=index;
        change(index)
    })
})
function change(index){
    document.querySelectorAll(".icon1").forEach((item)=>{
        item.classList.remove("active");
    })
    const cont=document.querySelector('.container');
    const value=index*100;
    cont.style.transform=`translateX(-${value}%) `;
     document.querySelector(`.icon1[data-index="${index+1}"]`).classList.add("active");
    
}


