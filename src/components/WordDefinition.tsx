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

interface WordDefinitionProps {}
const WordDefinition: FunctionalComponent<WordDefinitionProps> = (props) => {
  const theme = useTheme();

  return (
    <Fragment>
      <Box p={2}>
        <Grid container justify="space-between" alignItems="flex-end">
          <Grid item>
            <ButtonGroup aria-label="text primary button group">
              <Button>Insert Image</Button>
              <Button>Insert Equation</Button>
              <Button>Modify Equation</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel>Language</InputLabel>
              <Select native>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <TextField
          fullWidth
          id="filled-multiline-static"
          multiline
          rows={20}
          variant="filled"
        />

        <Grid container justify="space-between" mt={4}>
          <Grid item>
            <FormControl>
              <InputLabel>Font Name</InputLabel>
              <Select value={10} native>
                <option aria-label="None" value="" />
                <option value={10}>Arabic Transparent</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl ml={4}>
              <InputLabel>Font Size</InputLabel>
              <Select value={10} native>
                <option aria-label="None" value="" />
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default WordDefinition;
