### react-router-dom@4.3.0 || react-router@4.4.1

### react-router 使用方法
配置 router.js
```
import React, { Component } from 'react';
import {  Switch, Route } from 'react-router-dom';

const router = [{
    path: '/',
    exact: true,
    component:importPath({
      loader: () => import(/* webpackChunkName:"home" */ "pages/home/index.js"),
    }),
  },]
const Routers = () => (
  <main>
    <Switch>
      {
        router.map(({component,path,exact},index)=>{
          return <Route exact={exact}  path={path} component={component} key={path} />
        })
      }
    </Switch>
  </main>
);

export default Routers;
```
入口 index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import Routers from './router';

ReactDOM.render (
      <HashRouter>
        <Routers />
      </HashRouter>,
  document.getElementById ('App')
);
```
home.js
```
import { withRouter } from "react-router-dom";

@withRouter
class Home extends React.Component<PropsType, stateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {};
  }
  goPath=()=>{
      this.props.history.push('/home')
  }
  render() {
    return (
      <div onClick={this.goPath}>home</div>
    );
  }
export default Home;

```

### react-router 源码解析
下面代码中会移除部分的类型检查和提醒代码，突出重点代码
#### 第一步 Switch ```react-router```
```
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  if(call&&(typeof call === "object" || typeof call === "function") ){
    return call
  }else {
    return self
  }
}
var Switch = function (_React$Component) {
  function Switch() {
    //使用传递进来的组件覆盖本身
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));  
  }
  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;
    var location = this.props.location || route.location;
    var match = void 0,child = void 0;
    
    //检查element是否是react组件，初始match为null,
    React.Children.forEach(children, function (element) {
     //如果match符合，forEach不会进入该if
      if (match == null && React.isValidElement(element)) { 
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;
        var path = pathProp || from;
        child = element; 
        //检查当前配置是否符合,
        match = matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match); 
      }
    });
    //如果有匹配元素，则返回克隆child
    return match ? React.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(React.Component);

```
总结：```switch```根据```location.pathname,path,exact,strict,sensitive```获取元素并返回```element```

#### 第二步 Route ```react-router```
```
var Route = function (_React$Component) {
  function Route() {
    var _temp, _this, _ret;
    //获取参数
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    //修改this
    return _ret = (
      _temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), 
      //检查当前元素是否符合match
      _this.state = {match: _this.computeMatch(_this.props,_this.context.router)},_temp),
       //这里是真正return
       _possibleConstructorReturn(_this, _ret); 
  }
  // 设置content
  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };
  // 根据参数检查当前元素是否符合匹配规则
  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch;

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };
  // 设置match
  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };
    //检查route 是否有component组
    if (component) return match ? React.createElement(component, props) : null;  
    // 检查是否包含render 组件
    if (render) return match ? render(props) : null;
    // withRouter 使用的方式
    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children)) return React.Children.only(children);

    return null;
  };

  return Route;
}(React.Component);

```
总结：```route``` 渲染的方式: ```component``` ```render``` ```children```,代码示例用的是```component```,```route``` 是检查当前组件是否符合路由匹配规则并执行创建过程

#### 第三步 HashRouter ```react-router-dom```

```
import Router from './Router'
import {createHistory} from 'history'
var HashRouter = function (_React$Component) {
  function HashRouter() {
    var _temp, _this, _ret;
    //参数转换为数组
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {  
      args[_key] = arguments[_key];
    }
    return _ret = (
      _temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this),
       _this.history = createHistory(_this.props), _temp), //创建history
       _possibleConstructorReturn(_this, _ret);  //真正返回的东西 返回this
  }
  HashRouter.prototype.render = function render() {
    // 返回一个Router,并且把history，children传递给Router
    return React.createElement(Router, { history: this.history, children: this.props.children });
  };
  return HashRouter;
}(React.Component);
```
总结 通过 ```history```库里面 ```createHistory``` 创建路由系统
#### 第四部 Router  ```react-router```

```
var Router = function (_React$Component) {
  function Router() {
    var _temp, _this, _ret;
    //获取参数，和其他组件一样
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)  //返回路由对象
    }, _temp), _possibleConstructorReturn(_this, _ret);  //返回this
  }
  // 返回context
  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };
    
  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;

    // 启动监听 当hash 改变是做一次检查，并返回unlisten 取消事件
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };
  //销毁前取消监听
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };
  // children是HashRouter 传递进来的
  Router.prototype.render = function render() {
    var children = this.props.children;
    return children ? React.Children.only(children) : null;
  };

  return Router;
}(React.Component);
```
总结 ```history```是一个```JavaScript```库，可让您在```JavaScript```运行的任何地方轻松管理会话历史记录。```history```抽象出各种环境中的差异，并提供最小的```API```，使您可以管理历史堆栈，导航，确认导航以及在会话之间保持状态。

#### 第五部 withRouter  <react-router>
```
var withRouter = function withRouter(Component) {
  var C = function C(props) {
   //获取props
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);
    // Route 组件 children方式
    return React.createElement(Route, {
      children: function children(routeComponentProps) {
        // 这里使用的是route 组件 children(props)
        //routeComponentProps 实际等于 { match: match, location: location, history: history, staticContext: staticContext };
        return React.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  // 该类似于object.assign(C,Component),得到的结果是C
  return hoistStatics(C, Component);
};
```

总结:

到这里真个流程基本结束了，这只是```react-router```的一种使用方式的解析,本文的目的是理解```react-router```的运行机制,如果有什么错误还望指出,谢谢🙏




