class LazyMan {
  constructor(name) {
    this.name = name;
    this.queue = [];
    this.sayName();
    this.run();
  }

  sayName() {
    this.queue.push(() => {
      console.log(this.name);
    });
    return this;
  }

  sleep() {
    this.queue.push(() => this.timeWait(time));
    return this;
  }

  timeWait(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  run() {
    setTimeout(async () => {
      for (const fn of this.queue) {
        await fn();
      }
    }, 0);
  }
}
