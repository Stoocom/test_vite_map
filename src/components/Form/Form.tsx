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
        {isLogin ? "Registration" : "Login"}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {t("hello_world")}
      </Typography>

      {/* <ImageListItem key={"123445"}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The Gd"
          src="https://drive.google.com/thumbnail?id=1JZJ8DiiwQtma5PPWFK-Em0-bVJVrkSuY"
        />
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The Ya"
          src="https://downloader.disk.yandex.ru/preview/4f80fed2873463ff2b31162cda7ba2d9e19fab3ed6e73faa88cfdd449b8391b5/inf/gJ9KiimGoYbGCe2IrDWcVGycE3C0fjH29HfwRtDDKVygSgSgsryLElCdDXXAJj1BBccTjprd_uY3WWhDvvyBVA%3D%3D?uid=1022693374&filename=%D0%97%D0%B8%D0%BC%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1022693374&tknv=v2&size=XXXS&crop=0"
        />
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The Ya"
          src="https://disk.yandex.ru/i/sMc5GEW3CG1nuA"
        />
      </ImageListItem> */}
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
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
          {isLogin ? "Sign Up" : "Sign In"}
        </Button>
        <Link href="#" underline="none" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "To login" : "To register"}
        </Link>
      </Stack>
    </form>
  );
};

export default Form;
