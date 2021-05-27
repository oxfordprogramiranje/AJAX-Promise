const clickTok = rxjs.fromEvent(document, 'mousemove');

clickTok.subscribe(event => {
    document.getElementById('mis').textContent = `Kursor se nalazi na poziciji (${event.clientX}, ${event.clientY})`;
});