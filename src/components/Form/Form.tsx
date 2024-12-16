import { ChangeEvent, FC, FormEvent, useState } from "react";
import AuthService from "../../services/authService";
import { toast } from "react-toastify";
import "./Form.css";

const Form: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const regSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = await AuthService.registration({
        login: email,
        password: password,
        name: "Alexander",
      });
      if (data) {
        toast.success("Account has been created");
      }
    } catch (error: any) {
      toast.error(error.response.data.errors.toString());
    }
    event.preventDefault();
  };

  const logSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = await AuthService.login({
        login: email,
        password: password,
      });
      if (data) {
        toast.success("Log in successfully");
      }
    } catch (error: any) {
      toast.error(error.response.data.errors.toString());
    }
  };

  return (
    <form className="" onSubmit={isLogin ? regSubmitHandler : logSubmitHandler}>
      <h2 className="">{isLogin ? "Registration" : "Login"}</h2>
      <div className="">
        <label className="" htmlFor="email">
          Email
        </label>
        <input
          className=""
          id="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          type="text"
          placeholder="email"
        />
      </div>
      <div className="">
        <label className="" htmlFor="password">
          Password
        </label>
        <input
          className=""
          id="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          type="password"
          placeholder="password"
        />
        {/* <p className="text-red-500 text-xs italic">
                    Please choose a password.
                    </p> */}
      </div>
      <div className="">
        <button className="" type="submit">
          {isLogin ? "Sign Up" : "Sign In"}
        </button>
        {/* <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a> */}
        <a className="" href="#" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "To login" : "To register"}
        </a>
      </div>
    </form>
  );
};

export default Form;
