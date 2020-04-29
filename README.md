# React-complete-guide

<details>
<summary> Click🖱 Section 1 : Getting Started</summary>

- react 는 html 이 webpage에서 각 components를 따로 분류해서 사용될 수 있게함. 수정, 다시 사용에 간편

- JSX(jsvascript XML) is expand grammar of JS. It's not necessary for react but to utilise advantage of react, JSX is essential

- react.js 는 JSX를 사용할 수 있게 해주는 라이브러리

- JSX로 쓴것을 reactDOM에 으로 HTML에 rendering하면 babel이 ES언어로 변환해서 화면에 나옴.

- JSX에서 html 문법 바깥쪽에는 ()를 써줘야 함.

- 하나의 component는 가장 처음과 마지막이 div로 묶여져 있어야 함.

- 싱글페이지 : 페이스북(React was created by Jordan Walke, at Facebook) / 멀티페이지 : 다른 url, 다른 페이지로 이동

</details>

<details>
<summary> Click🖱 Section 2 : Next Generation JS</summary>

- let, const

- Arrow Functions (No more issues with the this keyword)

      	const multiply = number => number * 2; (We can make short like this)

- Exports & Imports (Modules)

      	export default person → import **person** from './person.js'  OR  import prs from './person.js'

      	**I can choose the name person**

      	export const clean = () => {...} → import {clean} from './utility.js'

      	export const baseData = 10; → import {baseData} from './utility.js'

      	**Name is defined by export**

- Classes, Properties and Methods

- Spread(...) : Used to split up array elements OR object properties

- Rest(...) : Used to merge a list of function arguments into an array

- Destructuring : Easily extract array elements or object properties and store them in variables.

- Array Destructuring, Object Destructuring

- Reference and Primitive Types Refresher

      	const secondPerson = {...person}; 하면 포인터를 참조하는게 아니고 값 자체를 가져오는 것임

</details>

<details>
<summary> Click🖱 Section 3 : Understanding the Base Features & Syntax</summary>

- To use JSX,

      	import React from "react";

- To use class ... extends Component

      	import {Component} from "react";

- Components are the **core building block of React apps**

When creating components, have choice between **Functional components**, **class-based components**

    const cmp = () => { return <div>some JSX </div> }

    class Cmp extends Component { render () { return <div>some JSX </div>} }

- Understanding the "children" Prop

- Props : Allow you to pass data from a parent (wrapping) component to a child (embedded) component.

- State : While props allow you to pass data down the component tree, state is used to change the component. Changes to state also trigger an UI update.

</details>

<details>
<summary> Click🖱 Section 4 : Working with Lists and Conditionals</summary>

- If an empty string ("") is used as the separator, the string is split between each character

        deleteCharHandler = (index) => {
        const inputChar = this.state.userInput.split(""); //make string into array
        inputChar.splice(index, 1);
        const updated = inputChar.join("");
        this.setState({ userInput: updated });
        };

</details>

<details>
<summary> Click🖱 Section 5 : Styling React Components & Elements</summary>

- join(' ') method : ['red','bold'] into "red bold" string

- radium : Radium is popular package for react which allows us to use inline styles with seudo selectors and media queries.

- Inside of styled-components, using normal CSS

- CSS Modules are relatively new concept. With CSS modules, you can write normal CSS code and make sure, that it only applies to a given component.
  It will simply automatically generate unique CSS class names for you. And by importing a JS object and assigning classes from there, you use these dynamically generated, unique names. So the imported JS object simply exposes some properties which hold the generated CSS class names as values.

</details>


<details>
<summary> Click🖱 Section 7 : Diving Deeper into Components & React Internals </summary>

- Stateless and Stateful Components
      Stateful components are keeping track of changing data, while stateless components print out what is given to them via props, or they always render the same thing. Notice the stateless component is written as a function.

      To make stateless components, use function or class

- Class-based vs Functional Components

      class App extends Component{render(return())}
          
          - Access to State, Lifecycle Hooks

      const Button = (props) = > {return()};

          - Access to State (useState())

      ✨Benefits of using functional components in React : easier to read and test, less code

      ✨Use class-based components if you need to manage State or access to Lifecycle Hooks and you don't want to use React Hooks!

- Component Lifecycle

- ComponentDidMount() : It is called once in the component life cycle and it signals that the component and all its sub-component have rendered properly.

- Life Cycle Method 는 기본적으로 react가 component를 생성하고 없애는 방법

        * Mounting
        
        constructor() 클래스가 생성될 때 호출됨, render()보다 먼저 호출됨

        render()

        componentDidMount() 첫번째 render() 실행이 완료되었을 때를 의미

        * Updating : 우리가 바꾸는 것들, 예를 들어 버튼을 클릭한다거나..

        shouldComponentUpdate() 이 함수는 setState를 호출할 때 마다 발생

        render()

        componentDidUpdate() 

        * Unmounting

        componentWillUnmount() component가 떠날 때 호출됨
    
- useEffect() hooks can do as componentDidMount, componentDidUpdate, compoentWillUnmount

- 읽어보면 이해에 좋은 포스트 : https://jaeyeophan.github.io/2018/01/02/React-tips-for-beginners/
https://velog.io/@kyusung/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B5%90%EA%B3%BC%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%EB%B2%A4%ED%8A%B8

- Optimizing Functional Components with React.memo() : 변경되지 않은 동일한 prop에 대해 리렌더링을 하는 것을 방지

- React.Component vs React.PureComponent : React.Compoent 와 React.PureComponent는 shouldComponentUpdate 라이프사이클 메소드를 다루는 방식을 제외하곤 동일하다. React.Component를 확장해 컴포넌트를 만들 때, shouldComponentUpdate 메소드를 별도 선언하지 않았다면 컴포넌트는 prrops, state 값이 변경되면 항상 랜더링을 새롭게 한다. (리랜더링) 그러나 React.PureComponent를 확장해 만들면 shouldComponentUpdate를 선언하지 않아도 내부에서 props 와 stste를 비교하여 변경된 값이 있을때만 리랜더링한다.
❕❕그니까 pure는 shouldComponentUpdate가 없어도 알아서 변경이 있을때만 리랜더링

- Wrapping with higher order component 

        import React from 'react';

        const aux = props => props.children;

        export default aux;

        (wrap with Aux, React.Fragment, Fragment)

- {...props} pulls out all the properties inside of props object and distribute them as new key value pairs on the wrap component 자동으로 비하인드 씬에서 전달하는 props의 key value들을 전부 전달받음.

- PropTypes

- useRef(): 1. 특정 dom을 선택하기 위해 사용, 2. 리렌더링 할때마다 어떤 값을 기억해야 할 때 사용

- Context API, ContextType
        1. Context 만들기 2. Provider 3. Consumer

        https://blog.naver.com/woosop84/221850797505

- 


</details>





❕여러 줄 주석처리는 ctrl+K+C , 해제는 ctrl+K+U

<details>
<summary> ❕ Github 에 올리기 </summary>

1. git init

2. github 홈페이지 가서 레포지토리 만들고 주소 복사

3. git remote add origin 주소카피페이스트

4. git add .

5. git commit -m "이름"

6. git push origin master

</details>
