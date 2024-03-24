/*async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  typeSentence("About Me")
let startX = 0;
let endX = 0;
const circle = document.getElementById('circle');

circle.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

circle.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

circle.addEventListener('touchend', () => {
    const diff = endX - startX;
    if (diff > 50) {
        rotateElem();
    }
})


function rotateElem() {
    document.querySelector('.circle').style.transform = 'rotate(90deg)';
}
setTimeout(function() {
    document.querySelector('.home .profession-container .profession-box .profession ').classList.add('segment1');
}, 0); // Start the second transition after 0 seconds

setTimeout(function() {
    document.querySelector('.home .profession-container .profession-box .profession').classList.add('segment2');
}, 2000); // Start the third transition after 2 seconds

setTimeout(function() {
    document.querySelector('.home .profession-container .profession-box .profession').classList.add('segment3');
}, 4000);

setTimeout(function() {
    document.querySelector('.home .profession-container .profession-box .profession').classList.add('segment4');
}, 8000);*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };

    });
};