/**
 *  Here we are creating our own hook
 *  - a hook is a normal JS func that starts with "use"
 *  - more importantly, it is a func that can share stateful logic
 */

/**
 *  useReducer
 *    - When you have 2 dependant states, in the this case the input validity depends on the input value, we can use useReducer
 * 
 *  - iseREducer allows you to manage state in a component and it gives you a func which updates the state and re-renders the component
 *    - the difference between useReducer and useState is that with useReducer, you can manage complex state easier.
 *    - you can write logic that runs whenever you want to change the state to do more complex updates than just setting a new value
 *    - useReducer is great for when you have more complex state or dependency between 2 different states
 */
import { useCallback, useReducer } from 'react';

/**
 *  - we declare  const "formReducer"
 *    - formReducer receives a state and an action and returns a new state
 *    - after declaring formReducer, we then call useReducer outside of formReducer, and we pass in formReducer as the first param.*/
const formReducer = (state, action) => {
  // we declare a switch statement that test cases based on the passed in action type
  switch (action.type) {
    case 'INPUT_CHANGE':
      // we delcare a variable formIsValid init to true
  
      for (const inputId in state.inputs) {
        
        if (state.inputs[inputId]) {
          console.log(action.inputId)
          continue;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value}
        }
 
      };
    case 'SET_DATA':
      return {
        inputs: action.inputs
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs
  
  });

  const inputHandler = useCallback((id, value) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      inputId: id
    });
  }, []);

  const setFormData = useCallback((inputData) => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData
    });
  }, []);
  // console.log('hello', setFormData)
  return [formState, inputHandler, setFormData];
};

 // after declaring formReducer, we then call useReducer outside of formReducer, and we pass in formReducer as the first param and an initial state as the second param in the form of an object -- the input and input validity
 



