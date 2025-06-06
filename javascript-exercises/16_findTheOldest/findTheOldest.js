const date = new Date();

const findTheOldest = function(personList) {
    let currOldest = 0;
    let oldestPerson;

    for (let person of personList) {
        let birthYear = person.yearOfBirth;
        let deathYear = person.yearOfDeath;
        if (deathYear === undefined) {
            deathYear = date.getFullYear();
        }
        let lifespan = deathYear - birthYear;

        if (lifespan >= currOldest) {
            currOldest = lifespan;
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
