const user = {
    name: "Hilton",
    company: {
      name: "Rocketseat",
      color: "Roxo",
      focus: "Programação",
      address: {
          street: "Street Guilherme Gembala",
          number: 260
      }
    }
};

console.log(`${user.company.name} is located in ${user.company.address.street}, ${user.company.address.number}`)