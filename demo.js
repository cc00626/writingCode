class QueueLimit {
  constructor(number) {
    this.limit = number;
    this.queue = [];
  }

  add(task, time) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        task();
      }, time);
    });

    
  }
}
