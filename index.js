document.addEventListener('DOMContentLoaded', function () {

    window.onscroll = function () {
        let lastScrollTop = 0;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const aboutDiv = document.querySelector('#about');

        const work1Text = document.querySelector('.section-content--work-1--content-text');
        const work2Text = document.querySelector('.section-content--work-2--content-text');
        const work1Div = document.querySelector('.section-content--work-1--content');
        const work2Div = document.querySelector('.section-content--work-2--content');
        const work3Div = document.querySelector('.work-3');
        const work4Div = document.querySelector('.work-4');
        const work5Div = document.querySelector('.work-5');
        const work5Text = document.querySelector('.work-5 .section-content--work-2--content-text');
        const work3Text = document.querySelector('.section-content--work-2--content-text:nth-child(2)');
        const work4Text = document.querySelector('.section-content--work-2--content .work-4:first-child');

        const divs = [work1Div, work2Div, work3Div, work4Div, work5Div];
        const texts = [work1Text, work2Text, work3Text, work4Text, work5Text];

        //Scroll to bottom
        if (scrollTop > 0 && lastScrollTop <= scrollTop) {
            lastScrollTop = scrollTop;
            if (aboutDiv.getBoundingClientRect().bottom <= 0) {
                work1Text.classList.remove('hidden');
                work1Text.classList.add('tracking-in-contract');
            }
            for (let i = 0; i < 4; i++) {
                if (divs[i].getBoundingClientRect().bottom <= 0) {
                    texts[i + 1].classList.remove('hidden');
                    texts[i + 1].classList.add('tracking-in-contract');
                }
            }

        } else {
            lastScrollTop = scrollTop;
            work1Text.classList.add('hidden');
            work1Text.classList.remove('tracking-in-contract');
            //Scroll to top
            for (let i = 0; i < 4; i++) {

                texts[i + 1].classList.add('hidden');
                texts[i + 1].classList.remove('tracking-in-contract');

            }
        }
    }
});
