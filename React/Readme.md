React

1. React use JSX file to compile html.

2. There are two components in React
 
  * Class Component
  * Function Component

3. State and Props

4. React Events And Two-way Data Binding
* onCLick using anonymous
* A better way is to use bind

5. React components communication
* props and method
* can also pass using spread operator {...props}

6. React lists and keys
* array.map to render list
* every child of list should have unique key(npm react-html-id)

7. React Fragments
* [ , , ] 
* Fragment
* <> (cant pass props)

8. React Component Lifecycle Hooks / Methods
* https://www.w3schools.com/react/react_lifecycle.asp

Initial 
  1. Contructor
  2. ComponentWillMount
  3. render
  4. ComponentDidMount

Update
  1. ComponentWillRecieveProps
  2. ShouldComponentUpdate(nextProps,nextState) return true\false
  3. ComponentWillUpdate
  4. ComponentDidUpdate(previosProps,previousState)

End
  1. ComponentWillUnmount()


9. React Pure Components
* Shallow Compare(not deep)

10. React Router Complete Guide (Route, Link, NavLink, Redirect, Prompt)
* NavLink : activeStyle
* map for params
* Prompt: when message

11. React Refs and DOM
* Help for input next focus
* access one(higher) elemet from another(lower) element
```javascript
ref={() => {this.firstName = input}}
onKeyUp={this.onKeyUp}
```

12. React Typechecking with *PropTypes*(prop-types)
* Types Package to Check Types in React JS.  ReactJS Static Type Checking with Proptypes 

13. React Flow Tutorial ( Static Type Checking Props, State and set Default Props )
* TypeScrtipt (little heavy)
```javascript
(npm i -D flow-bin
run flow)
type FunctionProps = {
  str: string
}

classComponent<FunctionProps>
functionComponent = (str : FunctionProps) 
```
14. TypeScript
*

14. HOC
