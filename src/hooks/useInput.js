import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue)

  function handelInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handelInputBlur() {
    setDidEdit(true);
  }

  function handelInputFocus() {
    setDidEdit(false);
  }

  return {
    value: enteredValue,
    handelInputChange,
    handelInputBlur,
    handelInputFocus,
    hasError: didEdit && !valueIsValid
  }
}
