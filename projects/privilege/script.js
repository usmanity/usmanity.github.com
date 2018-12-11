var root = document.documentElement;
window.addEventListener('deviceorientation', function(event) {
    root.style.setProperty('--shadow-beta', (event.beta) + 'px');
    root.style.setProperty('--shadow-gamma', (event.gamma) + 'px');
});
