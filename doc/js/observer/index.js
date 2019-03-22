const EventHandlers = {
  handlers: {},
  on: function (key, fn) {
    if (!this.handlers[key]) {
      this.handlers[key] = [];
    }
    this.handlers[key].push (fn);
  },
  emit: function (key, ...res) {
    if (this.handlers[key]) {
      this.handlers[key].forEach (fn => {
        fn (...res);
      });
    }
  },
  remove: function (key, fn) {
    const _event = this.handlers[key];
    if (_event) {
      this.handlers[key] = _event.filter (v => {
        return v !== fn;
      });
    }
  },
  once: function (key, fn) {
    const once = (...res) => {
      fn (...res);
      this.remove (key);
    };
    this.on (key, once);
  },
};

const message = e => {
  console.log (e);
};

EventHandlers.on ('message', message);

EventHandlers.emit ('message', '发送消息2');
EventHandlers.remove ('message', message);
EventHandlers.emit ('message', '发送消息3');

// EventHandlers.once ('b', e => {
//   console.log (e, ':接收消息1---');
// });
// EventHandlers.emit ('b', '------------');

console.log (EventHandlers, '----');
