### es5 继承

#### 第一种方式 prototype模式
```
function Animal(){

};
Animal.prototype={
    species:"动物"
}

function Dog(name,color){
    this.name=name;
    this.color=color;
}
Dog.prototype=new Animal();  //Dog.prototype 指向 Animal 实例,并且Dog.prototype.constructor指向的是Animal
Dog.prototype.constructor=Dog;    修改Dog.prototype.constructor指向为Dog

const dog=new Dog('小狗','黄色');
console.log(dog.constructor==Dog.prototype.constructor) //true
console.log(dog.species)  //动物
```
#### 第二种方式，利用空函数中转,空函数占用空间少，性能好
```
function Animal(){};
Animal.prototype={
    species:"动物"
}

function Cat(name,color){
    this.name=name;
    this.color=color;
}
 function extents(child,parent){
    const F=function(){};
    F.prototype=parent.prototype;
    child.prototype=new F();
    child.prototype.constructor=child;
    child.uber=parent.prototype;
 }
 extents(Cat,Animal);

 const a= new Cat('小猫','灰色')
 console.log(a.name);  //小猫
 console.log(a.species); //动物
 console.log(Cat.prototype.constructor==Cat);  //true
 console.log(Cat.uber);  // Animal.prototype
```

### es6 继承方式
- constructor 实例初始执行函数 
- 继承必须要super,super参数传递给父级
- 继承 super 调用前this是 undefined
```
class Fruits {
    constructor(props) {
        this.props = { ...{ icon: true }, ...props };
    }
}

class Banana extends Fruits {
    constructor(props) {
        super(props);
    }
    get name() {
        return this.name;
    }
    set name(value) {
        return this.name=value;
    }
}

const banana = new Banana({ name: '香蕉' });
console.log(banana.name); //香蕉
```

#### prototype(函数) 和_proto_（对象）  区别

##### prototype 
首先说说```prototype```,只有函数才有```prototype```属性,因为js是一等公民，但是js没有类的概念，于是通过函数来模拟类
当你创建函数时候，js会为这个函数添加一个```protopyty```属性，默认有一个```constructor```属性的对象,为当前函数,
当你把这个函数当作构造函数(调用```new```关键字)，那么js就会帮你创建该构造函数实例，实例继承构造函数```prototype```所有属性,并通过```_proto_```访问构造函数```prototype```

##### _proto_
每个对象都有```_proto_```的属性,```Object```最开始是一个构造函数
```
var dog=new Object();

dog.__proto__==Object.prototype   //true

```
<!-- [查阅资料]((https://github.com/creeperyang/blog/issues/9)) -->


#### new 的作用
```
var Vehicle=function(){
    this.price=100;
};
Vehicle();
window.price;//100

使用new 
var v=Vehicle();
v.price; //100
window.price; //undefined;

```
- 创建空对象，作为将要返回实例对象
- 这个对象```__proto__```指向构造函数 ```prototype```
- 将这个对象赋给构造函数内部的```this```
- 执行构造函数内部初始代码

<!-- https://javascript.ruanyifeng.com/oop/basic.html#toc2 -->

##### 检查不是new 构造函数的方法
- !(this instanceof functionName)
- new.target ==functionName

