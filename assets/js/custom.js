// play s1
const vt1 = document.getElementById("imv1");
const video1 = document.getElementById("video1");
const playbtn1 = document.getElementById("play1");
const pausebtn1 = document.getElementById("pause1");

playbtn1.addEventListener('click', () => {
    vt1.classList.add('d-none');
    video1.classList.remove('d-none');
    video1.play();
    playbtn1.classList.add('d-none');
    pausebtn1.classList.remove('d-none');
});

pausebtn1.addEventListener('click', () => {
    video1.pause();
    video1.classList.add('d-none');
    vt1.classList.remove('d-none');
    playbtn1.classList.remove('d-none');
    pausebtn1.classList.add('d-none');
});

// play s2
const vt2 = document.getElementById("imv2");
const video2 = document.getElementById("video2");
const playbtn2 = document.getElementById("play2");
const pausebtn2 = document.getElementById("pause2");

playbtn2.addEventListener('click', () => {
    vt2.classList.add('d-none');
    video2.classList.remove('d-none');
    video2.play();
    playbtn2.classList.add('d-none');
    pausebtn2.classList.remove('d-none');
});

pausebtn2.addEventListener('click', () => {
    video2.pause();
    video2.classList.add('d-none');
    vt2.classList.remove('d-none');
    playbtn2.classList.remove('d-none');
    pausebtn2.classList.add('d-none');
});

// play s3
const vt3 = document.getElementById("imv3");
const video3 = document.getElementById("video3");
const playbtn3 = document.getElementById("play3");
const pausebtn3 = document.getElementById("pause3");

playbtn3.addEventListener('click', () => {
    vt3.classList.add('d-none');
    video3.classList.remove('d-none');
    video3.play();
    playbtn3.classList.add('d-none');
    pausebtn3.classList.remove('d-none');
});

pausebtn3.addEventListener('click', () => {
    video3.pause();
    video3.classList.add('d-none');
    vt3.classList.remove('d-none');
    playbtn3.classList.remove('d-none');
    pausebtn3.classList.add('d-none');
});

// play s4
const vt4 = document.getElementById("imv4");
const video4 = document.getElementById("video4");
const playbtn4 = document.getElementById("play4");
const pausebtn4 = document.getElementById("pause4");

playbtn4.addEventListener('click', () => {
    vt4.classList.add('d-none');
    video4.classList.remove('d-none');
    video4.play();
    playbtn4.classList.add('d-none');
    pausebtn4.classList.remove('d-none');
});

pausebtn4.addEventListener('click', () => {
    video4.pause();
    video4.classList.add('d-none');
    vt4.classList.remove('d-none');
    playbtn4.classList.remove('d-none');
    pausebtn4.classList.add('d-none');
});


{
    const showcaseToggler1 = () => {
        const buttons = document.querySelectorAll('.thumb-sec-0');
        const divs = document.querySelectorAll('.dispay-cards-0');

        [...buttons].forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                [...buttons].forEach(btn => {
                    btn.classList.remove('active');
                })
                buttons[index].classList.add('active');

                [...divs].forEach(btn => {
                    btn.classList.add('d-none');
                })
                divs[index].classList.remove('d-none');
            })
        })
    }

    showcaseToggler1();
}

{
    const showcaseToggler2 = () => {
        const buttons = document.querySelectorAll('.thumb-sec-1');
        const divs = document.querySelectorAll('.dispay-cards-1');

        [...buttons].forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                [...buttons].forEach(btn => {
                    btn.classList.remove('active');
                })
                buttons[index].classList.add('active');

                [...divs].forEach(btn => {
                    btn.classList.add('d-none');
                })
                divs[index].classList.remove('d-none');
            })
        })
    }

    showcaseToggler2();
}

{
    const showcaseToggler3 = () => {
        const buttons = document.querySelectorAll('.thumb-sec-2');
        const divs = document.querySelectorAll('.dispay-cards-2');

        [...buttons].forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                [...buttons].forEach(btn => {
                    btn.classList.remove('active');
                })
                buttons[index].classList.add('active');

                [...divs].forEach(btn => {
                    btn.classList.add('d-none');
                })
                divs[index].classList.remove('d-none');
            })
        })
    }

    showcaseToggler3();
}