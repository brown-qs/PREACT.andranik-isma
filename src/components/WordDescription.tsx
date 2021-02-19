import { FunctionalComponent, h, Fragment } from "preact";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from "./StyledMui";
import MaterialTable from "material-table";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { currentWordData } from "../utils/redux-getters";
import connectStore from "../store/connect";

interface WordDesciptionProps {}
const WordDesciption: FunctionalComponent<WordDesciptionProps> = (props) => {
  const theme = useTheme();

  return (
    <Fragment>
      <Box p={2}>
        <TextField
          fullWidth
          id="filled-multiline-static"
          multiline
          rows={20}
          label="Description goes here..."
          variant="filled"
          onBlur={(e) => {
            props.updateCurrentWord({ key: "desc", value: e.target.value });
          }}
          value={currentWordData(props).data.desc ?? ""}
        />
      </Box>
    </Fragment>
  );
};

export default connectStore()(WordDesciption);
