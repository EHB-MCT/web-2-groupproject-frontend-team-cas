'use strict';

window.onload = function(){
    console.log('Window loaded!');
    
    getData();
}

async function getData() {
    let response = await fetch('https://web2-groupbackend-teamcas.herokuapp.com/challenges');
    console.log(response);
    return await response.json();
}


