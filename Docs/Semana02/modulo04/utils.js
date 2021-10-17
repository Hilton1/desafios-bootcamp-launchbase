module.exports = {
  age: function(timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);

    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || month == today.getDate() < birthDate.getDate()) {
      age -= 1;
    }

    return age;
  },
  date: function(timestamp) {
    const date = new Date(timestamp);

    const year = date.getFullYear();

    const month = `0${date.getMonth() + 1}`.slice(-2);

    const day = `0${date.getDate()}`.slice(-2);

    return `${year}-${month}-${day}`;
  }
}