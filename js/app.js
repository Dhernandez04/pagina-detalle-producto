window.onload = ()=>{
    const previewBox = document.querySelector(".preview-box");
    const toggle = document.querySelector(".menu__toggle");
    const previewImg = document.querySelector(".img__product");

    const closeIcon = document.querySelector(".close");
    const images =document.querySelectorAll(".img__product__mini");
    toggle.addEventListener("click",()=>{
        console.log("hola");
        let menu = document.querySelector('.nav__left');
        menu.classList.toggle("show")
        console.log(menu);
    })
    console.log(previewImg);
    previewImg.addEventListener("click",()=>{
        console.log("hola");
        previewBox.classList.add("show");
        document.querySelector(".img__box").src = previewImg.src;
    })
    closeIcon.addEventListener("click",()=>{
        previewBox.classList.remove("show")
    })
    images.forEach((img)=>{
        
        img.addEventListener("click",(e)=>{
            console.log(img);
           let prevItem =  document.querySelector(".active")
             prevItem.classList.remove("active")
            let next = img.src;
            img.classList.toggle("active")
            previewImg.src = next;
            console.log(next);
        })
    })
 
}
