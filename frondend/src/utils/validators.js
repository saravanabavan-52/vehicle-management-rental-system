export function validateEmail(email) {
  if (!email?.trim()) {
    return "Email is required.";
  }

  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email) ? "" : "Enter a valid email address.";
}

export function validatePassword(password) {
  if (!password?.trim()) {
    return "Password is required.";
  }

  return password.length >= 6
    ? ""
    : "Password should be at least 6 characters.";
}

export function validateRequired(value, fieldName) {
  return value?.trim() ? "" : `${fieldName} is required.`;
}
