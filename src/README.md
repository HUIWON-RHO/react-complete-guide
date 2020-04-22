# React

<details>
<summary>**Click** Section 1 : Getting Started</summary>

- react 는 html 이 webpage에서 각 components를 따로 분류해서 사용될 수 있게함. 수정, 다시 사용에 간편

- JSX(jsvascript XML) is expand grammar of JS. It's not necessary for react but to utilise advantage of react, JSX is essential

- react.js 는 JSX를 사용할 수 있게 해주는 라이브러리

- JSX로 쓴것을 reactDOM에 으로 HTML에 rendering하면 babel이 ES언어로 변환해서 화면에 나옴.

- JSX에서 html 문법 바깥쪽에는 ()를 써줘야 함.

- 하나의 component는 가장 처음과 마지막이 div로 묶여져 있어야 함.

- 싱글페이지 : 페이스북(React was created by Jordan Walke, at Facebook) / 멀티페이지 : 다른 url, 다른 페이지로 이동

</details>

<details>
<summary>**Click** Section 2 : Next Generation JS</summary>

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

Rest(...) : Used to merge a list of function arguments into an array

- Destructuring : Easily extract array elements or object properties and store them in variables.

Array Destructuring, Object Destructuring

- Reference and Primitive Types Refresher

      	const secondPerson = {...person}; 하면 포인터를 참조하는게 아니고 값 자체를 가져오는 것임

</details>

<details>
<summary>**Click** Section 3 : Understanding the Base Features & Syntax</summary>

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
<summary>**Click** Section 4 : Working with Lists and Conditionals</summary>

- If an empty string ("") is used as the separator, the string is split between each character

  deleteCharHandler = (index) => {
  const inputChar = this.state.userInput.split(""); //make string into array
  inputChar.splice(index, 1);
  const updated = inputChar.join("");
  this.setState({ userInput: updated });
  };

</details>

<details>
<summary>**Click** Section 5 : Styling React Components & Elements</summary>

- join(' ') method : ['red','bold'] into "red bold" string

- radium : Radium is popular package for react which allows us to use inline styles with seudo selectors and media queries.

- Inside of styled-components, using normal CSS

</details>
