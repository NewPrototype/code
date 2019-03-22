### 订阅者模式
- on 订阅
- emit 发送消息
- off 取消订阅
- once  一次订阅
  
#### 代码如下：
```
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
  off: function (key, fn) {
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
      this.off (key);
    };
    this.on (key, once);
  },
};
```
#### 运行结果
```
const message = e => {
  console.log (e);
};
// 订阅  
EventHandlers.on ('message', message);
// 发送消息
EventHandlers.emit ('message', '发送消息2');  

// 删除 
EventHandlers.off ('message', message);
// message 已经删除了，所以不会再接收消息
EventHandlers.emit ('message', '发送消息3');
// 一次订阅
EventHandlers.once ('b', e => {
  console.log (e, ':接收消息1---');
});
EventHandlers.emit('b','一次消息传输')
```


