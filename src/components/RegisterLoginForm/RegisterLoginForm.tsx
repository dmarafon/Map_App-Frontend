import { SyntheticEvent, useState } from "react";
import { loginUserThunk } from "../../redux/thunks/userThunks";
import { useAppDispatch } from "../hooks";

const RegisterLoginForm = (): JSX.Element => {
  const formInitialState = { email: "", password: "" };

  const [formData, setFormData] = useState(formInitialState);
  const dispatch = useAppDispatch();

  const changeData = (event: SyntheticEvent) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const submitLogin = (event: SyntheticEvent) => {
    event.preventDefault();

    const dataToDispatch = { ...formData };

    dispatch(loginUserThunk(dataToDispatch));
  };

  return (
    <form onSubmit={submitLogin} noValidate autoComplete="off">
      <label htmlFor="email">EMAIL</label>
      <input
        id="email"
        value={formData.email}
        type="email"
        onChange={changeData}
        required
        placeholder="YOUR EMAIL"
        maxLength={33}
      />
      <label htmlFor="password">PASSWORD</label>
      <input
        autoComplete="current-password"
        id="password"
        type="password"
        value={formData.password}
        onChange={changeData}
        required
        placeholder="YOUR PASSWORD"
        minLength={5}
        maxLength={15}
      />
      <button type="submit" disabled={false}>
        LOGIN
      </button>
    </form>
  );
};

export default RegisterLoginForm;
