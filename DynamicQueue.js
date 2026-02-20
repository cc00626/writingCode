class DynamicQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }
  add(fn, time) {
    this.queue.push({ fn, time });
    if (!this.running) run();
    return this;
  }
  async run() {
    this.running = true;
    while (this.queue.length > 0) {
      const { fn, time } = this.queue.shift();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, time);
      });

      await fn();
    }
    this.running = true;
  }
}
