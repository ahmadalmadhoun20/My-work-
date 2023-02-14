var top1 = document.querySelector('.top1');


window.onscroll = () => {
    
    if (window.scrollY >100) {
        top1.classList.add('show');
    }else {
        top1.classList.remove('show');
    }
}
top1.onclick = () => {
    window.scrollTo({
        top : 0,
        behavior: 'smooth',
    })
}
