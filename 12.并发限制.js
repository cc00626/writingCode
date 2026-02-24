class LimitRequest {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.running = 0;
  }

  push(task) {
    this.queue.push(task);
    this.run();
  }

  run() {
    if (this.running >= this.limit || !this.queue.length) return;

    const task = this.queue.shift();
    this.running++;
    task
      .fn()
      .then((res) => console.log(res))
      .finally(() => {
        this.running--;
        this.run();
      });
  }
}

// 测试
const getData = (i) => new Promise((res) => setTimeout(() => res(i), 1000));
const limiter = new LimitRequest(2);

[1, 2, 3, 4, 5].forEach((i) => limiter.push({ fn: () => getData(i) }));
