
'use strict';

console.log('Hello World!');

document.querySelectorAll('.edit').forEach(editButton => {
    editButton.addEventListener('click', event=> {
        console.log(event.target.id);
    })
});