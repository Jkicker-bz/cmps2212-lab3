const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
    // BUG: this.classList.add('active') throws an error
//     this.classList.add('active');
//     Explanation:
    /* Arrow functions inhnerit 'this' from the surrounding scope or in this scenario the window object.
     So calling this.classList.add('active') throws an error. */
    // Fixed Code:
    event.currentTarget.classList.add('active');
    // Explanation
    /*  event.currentTarget refers to the element, the event listener is attached to.
    This would replace the role of 'this' does in a regular function handler. */
});