document.addEventListener('DOMContentLoaded', function(){

    window.onscroll = function(){
        let lastScrollTop = 0;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        const aboutDiv = document.querySelector('#about');
        const workOneText = document.querySelector('.section-content--work-1--content-text');
        const workTwoText = document.querySelector('.section-content--work-2--content-text');
        const workOneDiv = document.querySelector('.section-content--work-1--content');
        const workTwoDiv = document.querySelector('.section-content--work-2--content');
        const workThreeDiv = document.querySelector('.work-3');
        const workFourDiv = document.querySelector('.work-4');
        const workFiveDiv = document.querySelector('.work-5');
        const workFiveText = document.querySelector('.work-5 .section-content--work-2--content-text');
        const workThreeText = document.querySelector('.section-content--work-2--content-text:nth-child(2)');
        const workFourText = document.querySelector('.section-content--work-2--content .work-4:first-child');
    
        //Scroll to bottom
        if(scrollTop > 0 && lastScrollTop <= scrollTop) {
            lastScrollTop = scrollTop;
        if(aboutDiv.getBoundingClientRect().bottom <= 0){
            workOneText.classList.remove('hidden');
            workOneText.classList.add('tracking-in-contract');
        }
        if(workOneDiv.getBoundingClientRect().bottom <= 0){
            workTwoText.classList.remove('hidden');
            workTwoText.classList.add('tracking-in-contract');
        }
        if(workTwoDiv.getBoundingClientRect().bottom <= 0){
            workThreeText.classList.remove('hidden');
            workThreeText.classList.add('tracking-in-contract');
        }
        if(workThreeDiv.getBoundingClientRect().bottom <= 0){
            workFourText.classList.remove('hidden');
            workFourText.classList.add('tracking-in-contract');
        }
        if(workFourDiv.getBoundingClientRect().bottom <= 0){
            workFiveText.classList.remove('hidden');
            workFiveText.classList.add('tracking-in-contract');
        }
    } else {
        lastScrollTop = scrollTop;
        //Scroll to top
        workOneText.classList.add('hidden');
        workTwoText.classList.add('hidden');
        workThreeText.classList.add('hidden');
        workFourText.classList.add('hidden');
        workFiveText.classList.add('hidden');
        workOneText.classList.remove('tracking-in-contract');
        workTwoText.classList.remove('tracking-in-contract');
        workThreeText.classList.remove('tracking-in-contract');
        workFourText.classList.remove('tracking-in-contract');
        workFiveText.classList.remove('tracking-in-contract');
    }
    }
});

