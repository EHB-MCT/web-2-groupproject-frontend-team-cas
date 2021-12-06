/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


let challengesList;
let challengesHTML = "";

window.onload = function() {

    console.log(challengesList)


    const insertForm = document.getElementById("uploadForm")

    async function createChallenge() {
        let challengeId = document.getElementById('id').value;
        let challengeName = document.getElementById('name').value;
        let challengePts = document.getElementById('points').value;
        let challengeCourse = document.getElementById('course').value;    
        let challengeSession = document.getElementById('session').value;

        fetch(`https://web2-groupbackend-teamcas.herokuapp.com/saveChallenge`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: challengeId,
                    name: challengeName,
                    points: challengePts,
                    course: challengeCourse,
                    session: challengeSession
                })

            }).then(response => {
                return response.json()
            }).then(data => {
                console.log('Success:', data);
            })
    }

    insertForm.addEventListener('submit', event => {
        event.preventDefault(); 

        createChallenge();
        


    });

    async function renderChallenges(){
        console.log('Loaded my guy');

        await fetch('https://web2-groupbackend-teamcas.herokuapp.com/challenges').then(response => {
        return response.json();
    }).then(data => {
        challengesList = data;
        console.log("Fetch this: ", data);
    })

        challengesList.forEach(challenge => {
            challengesHTML += `<article id="card">
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

        document.getElementById("challengeList").innerHTML = challengesHTML;
    }

renderChallenges();


}
/******/ })()
;