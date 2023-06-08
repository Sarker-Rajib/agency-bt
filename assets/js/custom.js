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



// thumbs
const thumb1 = document.getElementById("thumb-1");
const thumb2 = document.getElementById("thumb-2");
const thumb3 = document.getElementById("thumb-3");
const thumb4 = document.getElementById("thumb-4");
const thumb5 = document.getElementById("thumb-5");
const thumb6 = document.getElementById("thumb-6");

// cards
const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const card4 = document.getElementById("card-4");
const card5 = document.getElementById("card-5");
const card6 = document.getElementById("card-6");

// thumb1 event
thumb1.addEventListener('click', () => {
    // thumbs
    thumb1.classList.add('active');
    thumb2.classList.remove('active');
    thumb3.classList.remove('active');
    thumb4.classList.remove('active');
    thumb5.classList.remove('active');
    thumb6.classList.remove('active');

    // cards
    card1.classList.remove('d-none');
    card2.classList.add('d-none');
    card3.classList.add('d-none');
    card4.classList.add('d-none');
    card5.classList.add('d-none');
    card6.classList.add('d-none');
});

// thumb2 event
thumb2.addEventListener('click', () => {
    // thumbs
    thumb1.classList.remove('active');
    thumb2.classList.add('active');
    thumb3.classList.remove('active');
    thumb4.classList.remove('active');
    thumb5.classList.remove('active');
    thumb6.classList.remove('active');

    // cards
    card1.classList.add('d-none');
    card2.classList.remove('d-none');
    card3.classList.add('d-none');
    card4.classList.add('d-none');
    card5.classList.add('d-none');
    card6.classList.add('d-none');
});

// thumb3 event
thumb3.addEventListener('click', () => {
    // thumbs
    thumb1.classList.remove('active');
    thumb2.classList.remove('active');
    thumb3.classList.add('active');
    thumb4.classList.remove('active');
    thumb5.classList.remove('active');
    thumb6.classList.remove('active');

    // cards
    card1.classList.add('d-none');
    card2.classList.add('d-none');
    card3.classList.remove('d-none');
    card4.classList.add('d-none');
    card5.classList.add('d-none');
    card6.classList.add('d-none');
});

// thumb4 event
thumb4.addEventListener('click', () => {
    // thumbs
    thumb1.classList.remove('active');
    thumb2.classList.remove('active');
    thumb3.classList.remove('active');
    thumb4.classList.add('active');
    thumb5.classList.remove('active');
    thumb6.classList.remove('active');

    // cards
    card1.classList.add('d-none');
    card2.classList.add('d-none');
    card3.classList.add('d-none');
    card4.classList.remove('d-none');
    card5.classList.add('d-none');
    card6.classList.add('d-none');
});

// thumb5 event
thumb5.addEventListener('click', () => {
    // thumbs
    thumb1.classList.remove('active');
    thumb2.classList.remove('active');
    thumb3.classList.remove('active');
    thumb4.classList.remove('active');
    thumb5.classList.add('active');
    thumb6.classList.remove('active');

    // cards
    card1.classList.add('d-none');
    card2.classList.add('d-none');
    card3.classList.add('d-none');
    card4.classList.add('d-none');
    card5.classList.remove('d-none');
    card6.classList.add('d-none');
});

// thumb6 event
thumb6.addEventListener('click', () => {
    // thumbs
    thumb1.classList.remove('active');
    thumb2.classList.remove('active');
    thumb3.classList.remove('active');
    thumb4.classList.remove('active');
    thumb5.classList.remove('active');
    thumb6.classList.add('active');

    // cards
    card1.classList.add('d-none');
    card2.classList.add('d-none');
    card3.classList.add('d-none');
    card4.classList.add('d-none');
    card5.classList.add('d-none');
    card6.classList.remove('d-none');
});