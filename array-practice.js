
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

console.log(personsNames)
