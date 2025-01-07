import { ChangeEvent, FC, FormEvent, useState } from "react";
import AuthService from "../../services/authService";
import { toast } from "react-toastify";
import "./Form.css";
import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { setValueToLocalStorage } from "../../services/localStorage/api";
import {
  toggleOpenLoginForm,
  setProfile,
} from "../../services/store/slices/profileSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const Form: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  // const [file, setFile] = useState<any>();
  const [password, setPassword] = useState<string>("");
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const activeLocale = i18n.resolvedLanguage;

  console.log("activeLocale ", activeLocale);

  const regSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = await AuthService.registration({
        login: email,
        password: password,
        name: "Alexander",
      });
      if (data) {
        setValueToLocalStorage("access_token", data.access_token);
        dispatch(
          setProfile({
            id: data.id,
            email: data.login,
          })
        );
        dispatch(toggleOpenLoginForm());
        toast.success("Account has been created");
      }
    } catch (error: any) {
      toast.error(error.response.data.errors.toString());
    }
  };

  const logSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = await AuthService.login({
        login: email,
        password: password,
      });
      if (data) {
        // setValueToLocalStorage("access_token", data.access_token);
        dispatch(
          setProfile({
            id: data.id,
            email: data.login,
          })
        );
        dispatch(toggleOpenLoginForm());
        toast.success("Log in successfully");
      }
    } catch (error: any) {
      toast.error(error.response.data.errors.toString());
    }
  };

  return (
    <form className="" onSubmit={isLogin ? regSubmitHandler : logSubmitHandler}>
      <Typography variant="h4" gutterBottom>
        {isLogin ? t("registration") : t("login")}
      </Typography>
      <TextField
        label={t("email")}
        name="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        fullWidth
        margin="normal"
      />
      <TextField
        label={t("password")}
        name="password"
        value={password}
        type="password"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        fullWidth
        margin="normal"
      />
      <Stack
        spacing={{ sm: 4 }}
        direction="row"
        sx={{
          mt: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button type="submit" variant="contained" color="primary">
          {isLogin ? t("sign_up") : t("sign_in")}
        </Button>
        <Link href="#" underline="none" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? t("to_login") : t("to_sign")}
        </Link>
      </Stack>
    </form>
  );
};

export default Form;
