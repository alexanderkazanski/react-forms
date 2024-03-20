import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handelInputChange: handelEmailChange,
    handelInputBlur: handelEmailBlur,
    handelInputFocus: handelEmailFocus,
    hasError: emailIsInvalid
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handelInputChange: handelPasswordChange,
    handelInputBlur: handelPasswordBlur,
    handelInputFocus: handelPasswordFocus,
    hasError: passwordIsInvalid
  } = useInput('', (value) => hasMinLength(value, 6));

  function handelSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(enteredValues);
    setEnteredValues({
      email: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handelSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          name="email"
          type="email"
          onBlur={handelEmailBlur}
          onFocus={handelEmailFocus}
          onChange={handelEmailChange}
          value={emailValue}
          error={emailIsInvalid && "Please enter a valid email."}
        />

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            name="password"
            onBlur={handelPasswordBlur}
            onChange={handelPasswordChange}
            value={passwordValue}
            error={passwordIsInvalid && "Please enter a valid password."}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" onClick={handelSubmit} className="button">
          Login
        </button>
      </p>
    </form>
  );
}
