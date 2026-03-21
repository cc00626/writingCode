//原型链继承
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype = function say() {
//   console.log("hello");
// };

// function Student(id) {
//   this.id = id;
// }

// Student.prototype = new Person();

//使用构造函数继承
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype = function say() {
//   console.log("hello");
// };

// function Student(name, age, id) {
//   Person.call(this, name, age);
//   this.id = id;
// }

// Student.prototype = new Person();

//构造函数继承
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.running = function () {
  console.log("我会跑");
};

function Student(name, age, number) {
  // 1. 继承属性 (相当于 super)
  Person.call(this, name, age);
  this.number = number;
}

// 2. 继承方法 (核心：建立原型连接)
// 不要用 new Person()，因为会多运行一次构造函数
Student.prototype = Object.create(Person.prototype);

// 3. 修复 constructor 指向
Student.prototype.constructor = Student;

// 4. (可选) 继承静态方法
Object.setPrototypeOf(Student, Person);
