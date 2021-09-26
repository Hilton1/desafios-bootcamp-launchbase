const users = [
    { name: "Carlos", technologies: ["HTML", "CSS"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Tuane", technologies: ["HTML", "Node.js"] }
];

for (let list of users) {
    console.log(`${list.name} works with ${list.technologies.join(', ')}`);
}

function checkIfUseCSS(user) {
    for ( let technology of user.technologies ) {
        if ( technology === 'CSS' ) {
            return true;
        }
    }
    return false;
}

console.log('==========================');

for (let i = 0; i < users.length; i++) {
    const userWorksWithCSS = checkIfUseCSS(users[i]);
  
    if (userWorksWithCSS) {
        console.log(`${users[i].name} works with CSS`);
    }
}