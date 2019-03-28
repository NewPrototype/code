#### call、bind、apply

##### call 
```
  Math.max.call (Math, 1, 2, 7, 3, 1);  
  Math.max(...[2,2,3]);
```
##### apply
```
Math.max.apply (Math, [1, 2, 7, 3, 1]);
Reflect.apply(Math.max,Math,[2,3,4])
```

##### bind
```
Math.max.bind (this, 1, 2, 3, 67) ();

```


#### 检查类型

```
Object.prototype.toString.call ('1');

```
#### 问题？为什么不能用下面代码
```
Object.toString.call(Object,'1');
```
#### 原因
```
typeof Object 是函数类型;

Object.toString调用的是函数本身的构造函数

函数是继承于object的方法

Object.prototype.toString.call ('1')
使用的是object对象原始toString()

```