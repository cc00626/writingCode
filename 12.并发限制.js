class QueueLimit {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.activeCount = 0;
  }

  add(fn) {
    return new Promise((resolve, reject) => {
      const task = async () => {
        try {
          const result = await fn();
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          this.activeCount--;
          this.next();
        }
      };

      this.queue.push(task);
      this.next();
    });
  }

  next() {
    while (this.activeCount < this.limit && this.queue.length > 0) {
      const task = this.queue.shift();
      this.activeCount++;
      task();
    }
  }
}
