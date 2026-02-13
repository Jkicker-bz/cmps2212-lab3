const swatches = document.querySelectorAll('.swatch');

function applyColor() {
    const color = this.dataset.color;
    this.style.backgroundColor = color;
}

swatches.forEach(swatch => {
    swatch.addEventListener('click', applyColor);
});