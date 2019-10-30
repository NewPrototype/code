// 已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
// 1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
// 2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
// 3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
// 4、调用 c 之后，返回的结果与调用 fn 的返回值一致
// 5、fn 的参数依次为函数 a, b, c 的调用参数


// var fn = function (a, b, c) {return a + b + c}; curryIt(fn)(1)(2)(3); //6


var fn = function (a, b, c) {
  return a + b + c
};

function curryIt(fn) {
  var len = fn.length;
  var args = [];
  var result = function (arg) {
    len--;
    args.push(arg);
    while (len <= 0) {
      return fn.apply(null, args)
    }
    return result
  }
  return result



}


console.log(curryIt(fn)(1)(2)(3))

// 完成函数 createModule，调用之后满足如下要求：
// 1、返回一个对象
// 2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
// 3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值


function createModule(str1, str2) {
  return {
    greeting: str1,
    name: str2,
    sayIt: function () {
      return this.greeting + ',' + this.name
    }
  }
}
console.log(createModule(1, 2).sayIt())


// 获取数字 num 二进制形式第 bit 位的值。注意：
// 1、bit 从 1 开始
// 2、返回 0 或 1
// 3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1

var x = 2;
console.log(x.toString(2).split(''));


function valueAtBit(num, bit) {

  Number.parseInt(10, 10)

}

function base10(str) {

  return parseInt(str, 2);
}


console.log(base10("11000000"))

console.log(valueAtBit(128, 8), '-')


function convertToBinary(num) {
  var value = num.toString(2).split('');
  while (value.length < 8) {
    value.unshift(0)
  }
  return value.join('')

}

console.log(convertToBinary(2))  //3, 0.0001  //0.0003


// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
function multiply(a, b) {
  var a1 = (a.toString().split('.')[1] || '').length;
  var b1 = (b.toString().split('.')[1] || '').length;
  var count = Math.pow(10, Math.max(a1, b1))
  return ((a * count) * (b * count)) / Math.pow(count, 2)
}

console.log(multiply(3, 0.0001), '--')

//将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
//alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' })
// Yo, Rebecca!

function alterContext(fn, obj) {
  console.log('--1')
  return fn.apply(obj)
}

console.log(alterContext(function () {
  return this.greeting + ', ' + this.name + '!';
}, { name: 'Rebecca', greeting: 'Yo' }))


// 给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。

var C = function (name) { this.name = name; return this; };
var obj1 = new C('Rebecca');
alterObjects(C, 'What\'s up'); //obj1.greeting;

function alterObjects(constructor, greeting) {
  constructor.prototype.greeting = greeting;
  return constructor.prototype.greeting
}
console.log(obj1.greeting, '-')

//What's up

//给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false


function containsRepeatingLetter(str) {
  var reg = /[a-zA-Z]/;
  for (var i = 0; i < str.length; i++) {
    if (reg.test(str[i]) && str[i + 1] && str[i] === str[i + 1]) {
      return true
    }
  }
  return false
}





console.log(containsRepeatingLetter('rattler'))

function containsNumber(str) {
  for (var i = 0; i < str.length; i++) {
    var n = Number(str[i]);
    if (n === n) {
      return true
    }
  }
  return false
}

console.log(containsNumber('abc123'))

// 给定字符串 str，检查其是否包含 连续3个数字 
// 1、如果包含，返回最新出现的 3 个数字的字符串
// 2、如果不包含，返回 false


//9876543   //987

function captureThreeNumbers(str) {

}


var list = [[1, [2], [2, 3, [1, [2, [3]]]], [3, 4]]];




const deepFlatten = (arr) => {
  let args = [];
  arr.forEach(v => {
    if (Array.isArray(v)) {
      args.push(...deepFlatten(v))
    } else {
      args.push(v)
    }
  })
  return args
}

console.log(deepFlatten(list))




const B = function () { this.foo = 'bar'; this.baz = 'bim'; };
B.prototype.bop = 'bip';
console.error('--------------')




// 给定字符串 str，检查其是否以元音字母结尾
// 1、元音字母包括 a，e，i，o，u，以及对应的大写
// 2、包含返回 true，否则返回 false

function endsWithVowel(str) {
  var arr = "aeiouAEIOU";
  return arr.indexOf(str[str.length - 1].toLocaleLowerCase()) > -1
}

console.log(endsWithVowel("gorilla"))



// const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))




function currying(...res) {
  let args = [...res];
  const result = (...res2) => {
    args = [...args, ...res2];
    return result
  }
  result.toString = () => {
    return args.reduce((a1, a2) => {
      return a1 + a2;
    })
  }
  return result
}


console.log(currying(1)(2, 7)(3).toString())


console.log(process.argv, '--')



function AC() {

  return c = (a = (1, 2), b = 3, 4), 5
}


console.log(AC())


// return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))),_this),
//    _this.state = {match: _this.computeMatch(_this.props, _this.context.router)},_temp),
//     _possibleConstructorReturn(_this, _ret);





// 以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：






// // 转换后的结果如下
// let result = [
//   {
//     id: 1,
//     name: '部门A',
//     parentId: 0,
//     children: [
//       {
//         id: 3,
//         name: '部门C',
//         parentId: 1,
//         children: [
//           {
//             id: 6,
//             name: '部门F',
//             parentId: 3
//           }, {
//             id: 16,
//             name: '部门L',
//             parentId: 3
//           }
//         ]
//       },
//       {
//         id: 4,
//         name: '部门D',
//         parentId: 1,
//         children: [
//           {
//             id: 8,
//             name: '部门H',
//             parentId: 4
//           }
//         ]
//       }
//     ]
//   },
// ···
// ];

/**
 * 检查当前元素在集合中是否存在，
 * 如果存在则加入该元素的子集合
 * 如果没有则push到集合中
 * 
 */


const _list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
];


const convert = (list) => {
  if (!Array.isArray(list)) {
    return []
  }
  list.forEach((v) => {
    const index = list.findIndex((_l) => {
      return v.parentId == _l.id
    });
    if (index == -1) {
      return
    }
    list[index].child = list[index].child || [];
    list[index].child.push(v);
    v.hide = true;
  });
  return list.filter(v => { return !v.hide });
}

console.log(JSON.stringify(convert(_list)))