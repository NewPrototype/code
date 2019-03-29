function Animal() { }
Animal.prototype = {
    species: '动物',
};

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

function Dog(name, color) {
    this.name = name;
    this.color = color;
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

const dog = new Dog('小狗', '黄色');
const animal = new Animal();
console.log(dog.constructor == Dog.prototype.constructor);
console.log(dog.species);

dog.species = '动物1';
console.log(dog.species);
console.log(animal.species);

// function extents(child,parent){
//     const F=function(){};
//     F.prototype=parent.prototype;
//     child.prototype=new F();
//     child.prototype.constructor=child;
//     child.uber=parent.prototype;
// }
// extents(Cat,Animal);

// const a= new Cat('小猫','灰色')
// console.log(a.name);
// console.log(a.species);
// console.log(Cat.prototype.constructor==Cat);

// console.log(Cat.uber);

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
        return '1';
    }
}

const banana = new Banana({ name: '香蕉' });

console.log(banana.name, '--');
