import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
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
          firstName: undefined,
          lastName: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          firstName: {
            value: '',
            isValid: false
          },
          lastName: {
            value: '',
            isValid: false
          },
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = async event => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/login',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json'
          }
        );
        auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    } else {
      try {
        const formData = new FormData();
        formData.append('email', formState.inputs.email.value);
        formData.append('firstName', formState.inputs.firstName.value);
        formData.append('lastName', formState.inputs.lastName.value);
        formData.append('password', formState.inputs.password.value);
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/signup',
          'POST',
          formData
        );

        auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>{isLoginMode ? 'Login' : 'Create An Account'}</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <React.Fragment>
            <div className="name-field-left">
              <Input
                element="input"
                id="firstName"
                type="text"
                placeholder="First Name"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
            </div>
            <div className="name-field-right">
              <Input
                element="input"
                id="lastName"
                type="text"
                placeholder="Last Name"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
            </div>
            </React.Fragment>
          )}
          <Input
            element="input"
            id="email"
            type="email"
            placeholder="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            placeholder="New Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 8 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'CREATE ACCOUNT'}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          {isLoginMode ? 'Need An Account?' : 'Already have an account?'}
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Auth;
