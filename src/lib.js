class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export default {

  make_person: (name, age) => {
    return new Person(name, age);
  }
}
