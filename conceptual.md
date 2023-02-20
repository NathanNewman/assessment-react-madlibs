### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    - React is a web frame work used to create the front end of websites.

- What is Babel?
    - Babel is a tool that converts ECMAScript 2015+ into an older version of JavaScript for support on older browsers.

- What is JSX?
    - A language that is a hybrid of HTML and JavaScript. It is used as the return value in react components to display web content in a similiar way to HTML.

- How is a Component created in React?
    - A react component is created by writing a JavaScript function with it's return written in JSX.

- What are some difference between state and props?
    - A prop is a way to pass data from one component to another.
    - State is an object used to store data that can change.

- What does "downward data flow" refer to in React?
    - It is a general concept in React that data should flow from parent component to child component and not vice versa.

- What is a controlled component?
    - A controlled component is a component that gets it's value from a parent component and then notifies the parent component when in changes through a callback function.

- What is an uncontrolled component?
    - A component that manages it's own state independ of a parent component.

- What is the purpose of the `key` prop when rendering a list of components?
    - The key prop is used when rendering a list of items. It helps react keep track of items.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    - It can cause unexpect behavior when items are added, removed, or re-arranged within the list, as re-arranging items in a list changes their index position.

- Describe useEffect.  What use cases is it used for in React components?
    - useEffect is a built-in hook that allows for the management of side effects. It is used for...
    - fetching data from an external source, like an API
    - handling events such as key presses or mouseclicks
    - manipulating the DOM
    - updating component state
    - cleaning up after a component is unmounted

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    - useRef is a built-in hook in React that provides a way to store mutable values that persist across component renders. Changes to useRef do not cause a re-render of the component.

- When would you use a ref? When wouldn't you use one?
    - Ref is useful for accessing a DOM element or storing a mutable state. It should not be used in cases where state or props can easily be used instead.

- What is a custom hook in React? When would you want to write one?
    - A hook is a functional component that allows the use of class features in function components, such as state. Custom hooks are used to write more concise, readable, and reusable code.
