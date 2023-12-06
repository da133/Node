
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ');

const wordCount = words.length;

// const reactWordCount = words.filter( 
//     (word) => word.toLowerCase().includes('react')
// ).length;

const reactWordCount = content.match(/react/gi ?? []).length;


console.log('Palabras:', wordCount );
console.log('React word count:', reactWordCount );