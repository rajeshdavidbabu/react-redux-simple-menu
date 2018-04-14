# React Redux Simple Menu

A simple implementation of a react redux menu that covers the basic building blocks of creating a react redux application. The project is built on a starter boilerplate code from Stephen Grider.

### Key Points to Remember: 
1) A Redux is a state-management library which helps us build the global state of the application.
2) A Reducer is an object that holds the piece of state. 
3) Combined reducer or root reducer assembles all the reducers and returns the global state of the application.
4) Each component's props picks up a piece of state it wants.
5) The action creators are responsible for changing the reducer's state using its payload.
6) The action creators are broadcasted across all the reducers. The corresponding reducer picks it up and returns a new state.
7) When a single reducer changes that component that is tied to that reducer through state and props also changes.

### Getting Started

Checkout this repo, install dependencies, then start the gulp process with the following. For implementation explanation read the code comment:

```
> npm install
> npm start
```
