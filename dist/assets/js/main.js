/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


window.onload = function() {
    console.log('window loaded');
    
    function displayChallenges(){
        getData('https://web2-groupbackend-teamcas.herokuapp.com/challenges')
        .then(function (data) {
            let challenge = document.getElementById('challengeList')
            let htmlString;

            //displaying all data
            data.forEach(challenge => {
                htmlString +=
                    `<article id="card">
                        <div>
                            <h3>${challenge.name}</h3>
                        </div>
                        <div id="info">
                            <p>${challenge.course}</p>
                            <p>${challenge.points}</p>
                            <p>${challenge.session}</p>
                        </div>
                    </article>`
            })
            challenge.innerHTML = htmlString
        });
    }

    displayChallenges();







    let uploadForm = document.getElementById('uploadForm');

    uploadForm.addEventListener('submit', event => {
        event.preventDefault();

        console.log('clicked')
    });
}

async function getData(url){
    let response = await fetch(url);
    return await response.json();
}

/******/ })()
;