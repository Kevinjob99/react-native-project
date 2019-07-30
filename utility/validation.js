const validate = (val, rules, connectedValue) => {
  let isValid = true;
  for (const rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
      case "minLength":
        isValid = isValid && passwordValidator(val, rules[rule]);
      case "equalTo":
        isValid = isValid && confirmPasswordValidator(val, connectedValue[rule]);
      default:
        isValid = true;
    }
    return isValid;
  }
};

const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
};

const passwordValidator = (val, minLength) => {
  return val.length >= minLength;
};

const confirmPasswordValidator = (val, checkVal) => {
  return val === checkVal;
};

export default validate;