import { ChangeEvent, FC, FormEvent, useState } from "react";
import AuthService from "../../services/authService";
import { toast } from "react-toastify";
import "./Form.css";
import {
  Button,
  ImageListItem,
  Link,
  Stack,
  // styled,
  TextField,
  Typography,
} from "@mui/material";
import { setValueToLocalStorage } from "../../services/localStorage/api";
import {
  toggleOpenLoginForm,
  setProfile,
} from "../../services/store/slices/profileSlice";
import { useDispatch } from "react-redux";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

const Form: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  // const [file, setFile] = useState<any>();
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

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
      <ImageListItem key={"123445"}>
        <img
          src="https://downloader.disk.yandex.ru/preview/9c69850c104555a490f04fc6766197eca06955bee018aa105eeb68b1c0c9e475/inf/P1Uu3IBvn2J_059WhlC9XydbkJ2sC_KEk2e_VtbYAOfuuRRO_ACnqYduWLfxvvz5VgHzs7xBXDvk4Qqe7B86gQ%3D%3D?uid=1022693374&filename=%D0%93%D0%BE%D1%80%D1%8B.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1022693374&tknv=v2&size=S&crop=0"
          alt="no"
        />
      </ImageListItem>
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
