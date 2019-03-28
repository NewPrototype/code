Object.prototype.toString.call ('1');

Object.toString.call(Object,'1')

Math.max.apply (Math, [1, 2, 7, 3, 1]);
Math.max(...[2,2,3]);
Reflect.apply(Math.max,Math,[2,3,4])
Math.max.call (Math, 1, 2, 7, 3, 1);
Math.max.bind (this, 1, 2, 3, 67) ();
