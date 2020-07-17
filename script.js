"use strict";//строгий режим

let numberOfFilms; 

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while(numberOfFilms == '' || numberOfFilms == null ||  isNaN(numberOfFilms )){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

start();

const personalMovieDB ={
    count: numberOfFilms,
    movies:{},
    actor:{},
    genres:[],
    privat:false
};

// const answer = prompt('Один из последних просмотреных фильмов ?',''),
//      answer2 = prompt('На сколько оценить его?',''),
//      answer3 = prompt('Один из последних просмотреных фильмов ?',''),
//      answer4 = prompt('На сколько оценить его?','');

// personalMovieDB.movies[answer] = answer2;
// personalMovieDB.movies[answer3] = answer4;


function rememberMyFilms(){
    for(let i = 0; i < 3 ; i++){
        let a = prompt('Один из последних просмотреных фильмов ?',''),
            b = prompt('На сколько оценить его?','');
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log("Done");
            }else{
                i--;
                console.log("Erorr");
            }
    }
}
rememberMyFilms();



//Циклы и Условия
// let i = 0;
// while (i < 2){
//     let a = prompt('Один из последних просмотреных фильмов ?',''),
//         b = prompt('На сколько оценить его?','');
//         if(a != null && b != null && a != '' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log("Done");
//         }else{
//             i--;
//             console.log("Erorr");
//         }
//         i++;
// }

function detectPersonalLevel(){
    if(personalMovieDB.count === 0){
        alert("Произошла ошибка");
    }else if (personalMovieDB.count < 10){
        alert("Просмотренно довольно мало фильмов");
    } else if(personalMovieDB.count <= 30){
        alert("Вы классический зритель");
    }else if(personalMovieDB.count >= 31) {
        alert("Вы кономан");
    }
}
detectPersonalLevel();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        let c = prompt(`Ваш любимый жанр под номером ${i}?`);
        personalMovieDB.genres[i - 1] = c;
        console.log(c[i]);
    }
}

writeYourGenres();

function showMyDB(){
    if(personalMovieDB.privat !== false){
        console.log(personalMovieDB);
    }
}
showMyDB();

console.log(personalMovieDB);