// Updated script.js to include gacha animation effects and spinning rotation

function gachaAnimation() {
    // Add gacha animation effects
    console.log('Gacha animation started!');
    // Implement animation logic here
}

function spinRotation(element) {
    // Add spinning rotation effect to the given element
    element.style.transition = 'transform 0.5s';
    element.style.transform = 'rotate(360deg)';
}

// Example usage:
const gachaButton = document.getElementById('gachaButton');

gachaButton.addEventListener('click', function() {
    gachaAnimation();
    spinRotation(gachaButton);
});