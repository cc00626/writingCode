function Person(age, height) {
  this.age = age;
  this.height = height;
}

Person.prototype.say = () => {
  console.log("hello");
};

function Student(age, height, id) {
  this.id = id;
  this.age = age;
}

Student.prototype.work = new Person();
