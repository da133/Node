
// console.log( process.env );

const { OS, USERNAME } = process.env;

// console.table({ OS, USERNAME });

const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [ , , , batman] = characters;

// console.log(batman);