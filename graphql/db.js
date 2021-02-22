export const people = [
    {
        id : "0",
        name : "Nicolas",
        age : 18,
        gender : "female"
    },
    {
        id : "1",
        name : "Nick",
        age : 23,
        gender : "female"
    },
    {
        id : "2",
        name : "Cat",
        age : 31,
        gender : "male"
    },
    {
        id : "3",
        name : "Shit",
        age : 55,
        gender : "male"
    },
    {
        id : "4",
        name : "Fuck",
        age : 71,
        gender : "female"
    },
    {
        id : "5",
        name : "Kim",
        age : 29,
        gender : "male"
    }    
];

export const getById = id => {
    const filteredPeole = people.filter(person => person.id === String(id));
    return filteredPeole[0];
}