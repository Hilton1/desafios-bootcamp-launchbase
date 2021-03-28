const name = 'Hilton';
const weight = 76;
const height = 1.87;
const sex = 'M';

const imc = weight / (height * height);

if ( imc >= 30 ) {
    console.log(`${name}, are you overweight.`);
} else {
    console.log(`${name}, you are not overweight.`);
}