// JAVASCRIPT

const sinterklaasIsGul = false;   // true or false


// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)

const krijgIkEenNieuweiPhone = new Promise(
    (resolve, reject) => {
        if (sinterklaasIsGul) {
            const smartphone = {
                merk: 'Apple',
                type: 'iPhone 11'
            };
            resolve(smartphone);
        } else {
            const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
            reject(metWelkeReden);
        }

    }
);

// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)

const vraagAanSinterklaas = () => {
    krijgIkEenNieuweiPhone
        .then(function (resolved) {
            // yay, je hebt een nieuwe smartphone
            console.log(resolved);
        })
        

        .catch(function (error) {
            // oeps, geen Sinterklaas cadeau dit jaar
            console.log(error.message);
        });
       
        
}

vraagAanSinterklaas();


// Oefening 1

// Make Promise

const testNum = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + " is greater than 10");
        } else {
            reject(num + " is less than 10");
        }
    });
};

// Call Promise

testNum(15) 
.then((result) => console.log(result));

testNum (5) 
.catch ((error) => console.log (error));

// Oefening 2

// Make Promises

const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (
            words.every((word) => {
                return typeof word === "string";
            })
        ) {
            resolve(
                words.map((word) => {
                    return word.toUpperCase();
                })
            );
        } else {
            reject("Expected array of strings");
        }
    });
};

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(words.sort());
        } else {
            reject("Expected array of strings");
        }
    });
};

const arrayOfWords = ["cucumber", "tomato", "zucchini", "avocado", "orange"];
const incorrectArray = ["cucumber", 44, true];

// Call Promises

makeAllCaps(arrayOfWords)
    .then((capitalizedWords) => sortWords(capitalizedWords))
    .then((sortedWords) => console.log(sortedWords))
    .catch((error) => console.log(error));

// makeAllCaps(incorrectArray)
//     .then((capitalizedWords) => sortWords(capitalizedWords))
//     .then((sortedWords) => console.log(sortedWords))
//     .catch((error) => console.log(error));


