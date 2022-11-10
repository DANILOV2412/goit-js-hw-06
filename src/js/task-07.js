const select = document.querySelector('#font-size-control');
const textOut = document.querySelector('#text');
textOut.classList.add('font-size');
select.addEventListener('input', setOut);

function setOut(event) {
textOut.style.fontSize = `${event.currentTarget.value}px`;
}



