// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginComponent() {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();

//   const updateUserName = (e) => {
//     setUserName(e.target.value);
//   };

//   const updatePass = (e) => {
//     setPassword(e.target.value);
//   };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const body = {
//     user_name: userName,
//     password: password
//   };
//   fetch('/api/login', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(body)
//   })
//     .then((res) => res.json())
//     .then((data) => navigate('/User', { state: data }))
//     .catch(e => console.log('err: ', e));
// };

//   return (<form onSubmit={handleSubmit}>
//     <input
//       name="username"
//       type="text"
//       placeholder="username"
//       value={userName}
//       onChange={updateUserName}
//     ></input>
//     <input
//       name="password"
//       type="password"
//       placeholder="password"
//       value={password}
//       onChange={updatePass}
//     ></input>
//     <input
//       type="submit"
//       value="Login"
//     ></input>
//   </form>);
// }

// export default LoginComponent;

import React, { useState, useContext } from 'react';

import { useForm } from '../../volunteerPage/components/form-hook.jsx';
import { AuthContext } from '../../volunteerPage/components/auth-context.jsx';
import Input from './Input.jsx';

const LoginComponent = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginInMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      userName: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.userName.isValid,
        formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginInMode((prevMode) => !prevMode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('this is form state inputs', formState.inputs);
    // console.log('this is inputHandler', inputHandler);

    auth.login();
    // const body = {
    //   user_name: formState.inputs.userName,
    //   password: formState.inputs.password
    // };
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body)
    // })
    //   .then((res) => res.json())
    //   .then((data) => navigate('/User', { state: data }))
    //   .catch((e) => console.log('err: ', e));
  };

  //   return (
  //     <Card className="login-signup">
  //       <h2>Login Required</h2>
  //       <hr />
  //       <form onSubmit={loginSignUpSubmitHandler}>
  //         {!isLoginMode && (
  //           <Input
  //             element="input"
  //             id="name"
  //             type="text"
  //             label="Your Name"
  //             validators={[VALIDATOR_REQUIRE()]}
  //             errorText="Please enter a name."
  //             onInput={inputHandler}
  //           />
  //         )}
  //         <Input
  //           element="input"
  //           id=""
  //           type="email"
  //           label="E-Mail"
  //           validators={[VALIDATOR_EMAIL()]}
  //           errorText="Please enter a valid email address."
  //           onInput={inputHandler}
  //         />
  //         <Input
  //           element="input"
  //           id="password"
  //           type="password"
  //           label="Password"
  //           validators={[VALIDATOR_MINLENGTH(5)]}
  //           errorText="Please enter a valid password, at least 5 characters."
  //           onInput={inputHandler}
  //         />
  //         <Button type="submit" disabled={!formState.isValid}>
  //           {isLoginMode ? 'LOGIN' : 'SIGNUP'}
  //         </Button>
  //       </form>
  //       <Button inverse onClick={switchModeHandler}>
  //         SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
  //       </Button>
  //     </Card>
  // console.log('this is formstate', formState.inputs.userName);
  // console.log('this is setFormData', setFormData);
  // console.log('this is inputHndler', inputHandler);
  // console.log('this is userNAme', userName);
  //   );
  //   return (
  //     <form onSubmit={handleSubmit}>

  //       <input
  //         name="username"
  //         type="text"
  //         placeholder="username"
  //         // value={}
  //         onInput={inputHandler}
  //       ></input>
  //       <input
  //         name="password"
  //         type="password"
  //         placeholder="password"
  //         // value={}
  //         onInput={inputHandler}
  //       ></input>
  //       <input type="submit" value="Login"></input>
  //     </form>
  //   );
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          element="input"
          id="userName"
          type="text"
          label="userName"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          onInput={inputHandler}
        />
        <button type="submit">
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </button>
      </form>
      <button onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </button>
    </>
  );
};
export default LoginComponent;
