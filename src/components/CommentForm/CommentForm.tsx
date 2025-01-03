import { ChangeEvent, FC, FormEvent } from "react";
import { toast } from "react-toastify";
import "./CommentForm.css";
import {
  InputLabel,
  Button,
  FormControl,
  Select,
  Stack,
  MenuItem,
  TextField,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMarkerComment,
  changeMarketRating,
  getMarkers,
  openAddCommentForm,
} from "../../services/store/slices/markersSlice";

const CommentForm: FC = () => {
  const { marketRating, markerComment } = useSelector(getMarkers);
  console.log("marketRating", marketRating);
  console.log("markerComment", markerComment);

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeMarketRating(event.target.value));
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!markerComment) {
      toast.error("Comment is empty");
    } else {
      toast.success("Rate and Comment saved");
      dispatch(openAddCommentForm(false));
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Typography variant="h4" sx={{ mb: 2 }} gutterBottom>
        Rate & Comment
      </Typography>
      <FormControl sx={{ minWidth: 120, my: 1 }} size="small">
        <InputLabel id="demo-select-small-label">Rating</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={marketRating}
          label="Rating"
          onChange={handleChange}
        >
          <MenuItem value={1}>Good</MenuItem>
          <MenuItem value={2}>Passable</MenuItem>
          <MenuItem value={3}>Bad</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Сomment"
        name="сomment"
        value={markerComment}
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(changeMarkerComment(e.target.value))
        }
        fullWidth
        margin="normal"
      />
      <Stack
        spacing={{ sm: 4 }}
        direction="row"
        sx={{
          mt: 2,
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default CommentForm;
