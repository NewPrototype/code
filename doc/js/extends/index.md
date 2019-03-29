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
