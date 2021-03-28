const programmer = {
    name: "Hilton",
    age: 18,
    technologies: [
        { name: 'C++', specialty: 'Desktop' },
        { name: 'Python', specialty: 'Data Science' },
        { name: 'JavaScript', specialty: 'Web/Mobile' }
    ]
};

console.log(`${programmer.name} is ${programmer.age} years old and uses ${programmer.technologies[0].name} with specialty in ${programmer.technologies[0].specialty}`);