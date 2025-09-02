// utils/validation.js
export const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
export const validateUsername = (username) =>
  /^[A-Za-z0-9._-]+$/.test(username);
export const validatePassword = (password, username) =>
  /^[A-Za-z0-9._-]+$/.test(password) && password !== username;
export const validateEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
export const validatePhone = (phone) =>
  /^\+\d{1,3}\d{7,12}$/.test(phone); // +91xxxxxxxxxx
