class TaskQueue {
  constructor() {
    this.queue = [];
  }

  add(fn, time) {
    this.queue.push({ fn, time });
    return this;
  }

  async start() {
    while (this.queue.length > 0) {
      const { fn, time } = this.queue.shift();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, time);
      });

      await fn();
    }
  }
}
new TaskQueue()
  .add(1000, () => console.log(1))
  .add(2000, () => console.log(2))
  .add(3000, () => console.log(3))
  .start();
