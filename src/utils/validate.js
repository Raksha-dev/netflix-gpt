export const checkValidation = (email, password, name) => {
  const validatEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const validatePassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  const validateName = /^[\\p{L} .'-]+$/.test(name);

  if (!validatEmail) return "Email is not valid";
  if (!validatePassword) return "Password is not valid";
  if (!validateName) return "Enter valid name";
};
