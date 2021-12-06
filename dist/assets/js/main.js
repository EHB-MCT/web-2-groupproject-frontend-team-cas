/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


window.onload = function() {
    console.log('window loaded');
    
    const uploadForm = document.getElementById('uploadForm');

        let id = document.getElementById('id');
        let name = document.getElementById('name');
        let points = document.getElementById('points');
        let course = document.getElementById('course');
        let session = document.getElementById('sesssion');
        
        fetch("https://web2-groupbackend-teamcas.herokuapp.com/saveChallenge", {
            method: "POST",
            body:JSON.stringify({
                id:id,
                name: name,
                points: points,
                course: course,
                session: session
            }),
        }).then(function(response) {
            return response.json()
        }).then(function(data){
            console.log(data)
        })
        
            
}


/******/ })()
;