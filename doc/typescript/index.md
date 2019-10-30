### typescript 

#### 基础类型

##### 布尔值
```
 let isShow:boolean=false;
```
##### 数字
```
const count:number=1024;
```
##### 字符串
```
const name:string='tom';
```
##### 数组
```
const list:number[]=[1,2,3];
const list1:Array<number>=[1,2,3];

```

##### 对象
```
const x:{[kee:string]:number}={key:1};


```

##### 元组
```
const x:[string,number]=['hello',10];
```

##### 枚举
```
enum Color {Red,Green,Blue}
const c:Color=Color.Green;  //c==1;//获取是下标
let g:Color=Color[1];  //c=='Green';获取的是字符串

```

##### any  任意值
```
const not:any=4;

```
##### void 没有任何值
```
let unusable:void=undefined;
function warn():void{
    //没有return 
}

```
##### null 和 undefined
```
let u:undefined=undefined;
let n:null=null;
```
##### never 永不存在的值的
```
function error (message:string):never{
   throw new Error(message);   //类型void
}
```

#### object
```
let o:object={};
let o:{}={};
```

#### 接口
```
interface LabelledValue{
    label:string,
    name?:string,  //可选参数
    readonly x: number;  //只读属性
    [propName: string]: any,//签名,
}
let ro: ReadonlyArray<number> = [1,2,3];  不可变数组
function printLabel(labelledObj:LabelledValue):boolean{

}
```

#### 可索引的类型
```
interface StringArray {
  readonly [index: number]: string;
}

let myArray:StringArray=['bod'];

let myStr:string=myArray[0];
```

#### 继承接口
```
interface shape {
    color:string,
}
interface shape1 {
    color1:string,
}

interface Square extends Shape { //单一继承
    sideLength: number;
}
interface Square1 extends Shape,shape1 {  //多继承
    sideLength: number;
}

```
#### 泛值  传递什么值进入，返回什么值出去
```
function getName<T>(arg:T):T{
    return arg
}
```

#### 枚举
```
enum Response {
    No = 0,   //默认是下标
    Yes = 'hello',
}

function respond(recipient: string, message: Response): void {
    //message =='hello'
    // ...
}

respond("Princess Caroline", Response.Yes)
```

#### 模块
```
export interface StringValidator {
    name:string
}
```

#### 命名空间
```
namespace Validation {
     export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}
<!-- Validation.StringValidator -->
```
#### 多文件命名空间 
Validation.ts

```
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}
```

LettersOnlyValidator.ts
```
/// <reference path="Validation.ts" />   
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

```
test.ts
```
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
```


#### 类型
- ```namespace```声明可以用来添加新类型
- ```type sn=number |string```  声明基本类型; 
- ```interface I{x:number[]}``` 声明对象
- ```declare``` 全局变量
- ```class C implements Disposable, Activatable {}``` ,类继承接口
#### 修饰符
- ```static``` 静态
- ```private``` 私有
- ```public``` 公共
- ```protected``` 修饰符与 private修饰符的行为很相似，但有一点不同， ```protected```成员在子类中仍然可以访问

#### JSX
- ```JSX.Element```
- 
