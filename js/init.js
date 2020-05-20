let logoshow = document.querySelector('.brand-logo');


document.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if(scrollPosition > 100){
       // navbar.classList.add('transparentChange');
       // navbar.classList.remove('transparent');
        //logo.style.color = "white";
       // console.log('change');
        //logoText.classList.add('showlogo');
        //imageLogo.classList.add('hidelogo');
        logoshow.textContent = "McLeod Scholarship Foundation";
    }else{
      
     // navbar.classList.add('transparent');
     // navbar.classList.remove('transparentChange');
      //logo.style.color = "black";
      console.log('nope');
     // logoText.classList.remove('showlogo');
     // logoText.classList.add('hidelogo');
     // imageLogo.classList.add('showlogo');
      //imageLogo.classList.remove('hidelogo');
      logoshow.innerHTML = `<img src="images/logo.jpg" alt="McLeod Foundation Logo" class="logo">`;
    }


})
