export const validateLoginForm = (userData) => {
  if (userData.email !== "" && userData.password !== "") return true;
};
