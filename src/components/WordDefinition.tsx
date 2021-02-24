import { FunctionalComponent, h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, Grid, FormControl } from "./StyledMui";
import MaterialTable from "material-table";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import {
  COUNTRY_3CODES,
  DEFINITION_LANGUAGE_MENU,
  LANGUAGE_MENU,
  FONT_SIZE_MENU,
} from "../constants";
import { currentWordData } from "../utils/redux-getters";
import connectStore from "../store/connect";
import MenuItem from "@material-ui/core/MenuItem";

interface WordDefinitionProps {}
const WordDefinition: FunctionalComponent<WordDefinitionProps> = (props) => {
  const theme = useTheme();
  const [language, setLanguage] = useState(1);
  const [fontSize, setFontSize] = useState(FONT_SIZE_MENU[0]);

  return (
    <Fragment>
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          alignItems="flex-end"
          pl={3}
          pr={3}
          mt={2}
          mb={2}
        >
          <Grid item>
            <FormControl>
              <InputLabel>Language</InputLabel>
              <Select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              >
                {DEFINITION_LANGUAGE_MENU.map((item) => (
                  <MenuItem value={item}>{LANGUAGE_MENU[item]}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <ButtonGroup aria-label="text primary button group">
              <Button>Insert Image</Button>
              <Button>Insert Equation</Button>
              <Button>Modify Equation</Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        <TextField
          fullWidth
          id="filled-multiline-static"
          multiline
          rows={20}
          variant="filled"
          onBlur={(e) => {
            props.updateCurrentWord({
              key: COUNTRY_3CODES[language] + "Definition",
              value: e.target.value,
            });
          }}
          value={
            currentWordData(props).data[
              COUNTRY_3CODES[language] + "Definition"
            ] ?? ""
          }
        />

        <FormControl>
          <InputLabel>Font Name</InputLabel>
          <Select>
            <MenuItem>Times New Roman</MenuItem>
          </Select>
        </FormControl>
        <FormControl ml={4}>
          <InputLabel>Font Size</InputLabel>
          <Select
            value={fontSize}
            onChange={(e) => {
              setFontSize(e.target.value);
            }}
          >
            {FONT_SIZE_MENU.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default connectStore()(WordDefinition);
