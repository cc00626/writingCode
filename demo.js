class EventBus {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);

    return this;
  }

  emit(event, ...payload) {
    const callbacks = this.events[event];

    callbacks.forEach((fn) => {
      fn.apply(this, ...payload);
    });

    return this;
  }

  off(event, callback) {
    if (!this.events[event]) {
      return this;
    }

    const callbacks = this.events[event];
    const index = callbacks.indexOf(callback);
    callbacks.splice(index, 1);

    return this;
  }

  once(evt, callback) {
    const proxyCallback = (...payload) => {
      callback.apply(ctx, payload);
      // 回调函数执行完成之后就删除事件订阅
      this.off(evt, proxyCallback);
    };

    this.on(evt, proxyCallback);
  }
}
