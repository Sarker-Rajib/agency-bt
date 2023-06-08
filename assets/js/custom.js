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