
//array and objects

let persons = [
    {
        name: "Doğukan",
        surname: "Ateş",
    },
    {
        name: "Berna",
        surname: "Yıldırm",
    },
    {
        name: "Ahmet",
        surname: "Hacı",
    },
    {
        name: "Hüseyin",
        surname: "Demir",
    }
];

let personsNames = persons.map(  item => item.surname);

console.log(personsNames);

// for, while and do while 

//let numbersFor = [];

//for (numbersFor = 0; numbersFor<50; numbersFor++){
//    console.log(numbersFor);
//}

//let whileNum = 16;

//while(whileNum <= 21){
//    console.log(whileNum);
//    whileNum++;
//}

// let numbersDw = 11

// do {
//     console.log(`şuandki x değeri ${numbersDw}`)
//     numbersDw++;
// }

// while(numbersDw<1);



let numbersss = "a";
if(numbersss > 20 ){
    console.log( "sayınız 20'den büyük.");
}else if(numbersss < 20){
    console.log( "sayınız 20'den küçük.");
}else if(numbersss != 20){
    function typeChecker(){
        let tpyew = typeof(numbersss);
        if(tpyew  == String){
            console.log("bu sayı değil ama da")
        }
    }
    typeChecker();
}else{
    console.log( "Hata");
}



/*
if (numbersss != Number ){
        console.log( "Degeriniz bir sayı değildir");

    }else if(numbersss == undefined){
        console.log("Değer bulunamadı.");

    }else{
        console.log( "Sayınız geçersizdir");
    }
*/ 