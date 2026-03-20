function Student(name, number) {
  Person.call(this, name);
  this.number = number;
}

Student.prototype = new Student();
