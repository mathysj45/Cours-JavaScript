const users = [
    {firstName: 'Mathys', lastName: 'Jolly', age: 23, city: 'Orléans', job: 'Développeur'},
    {firstName: 'Léa', lastName: 'Dupont', age: 30, city: 'Paris', job: 'Designer'},
    {firstName: 'Lucas', lastName: 'Martin', age: 28, city: 'Lyon', job: 'Chef de projet'},
    {firstName: 'Chloé', lastName: 'Bernard', age: 25, city: 'Marseille', job: 'Marketing'},
]
for (const user of users) {
  for (const property in user) {
      console.log(`${property} : ${user[property]}`);
  }
}