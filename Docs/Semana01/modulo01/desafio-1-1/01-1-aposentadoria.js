const name = "Hilton";
const sex = "M";
const age = 18;
const contribution = 0;

const calculationContribution = age + contribution;

const menRetire = sex === 'M' && contribution >= 35 && calculationContribution >= 95;
const womanRetire = sex === 'F' && contribution >= 30 && calculationContribution >= 85;

if (menRetire || womanRetire) {
    console.log(`${name}, you can retire!`);
} else {
    console.log(`${name}, you still can't retire!`);
}