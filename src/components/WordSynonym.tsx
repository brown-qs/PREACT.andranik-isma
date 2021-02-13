import { FunctionalComponent, h, Fragment } from "preact";
import { useState } from "preact/hooks";
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

interface WordSynonymProps {
  word: string;
}
const WordSynonym: FunctionalComponent<WordSynonymProps> = (props) => {
  const theme = useTheme();

  return (
    <Fragment>
      <Box p={2}>
        <MaterialTable
          title="Synonyms"
          localization={{
            header: {
              actions: "Up/Down",
            },
          }}
          actions={[
            {
              icon: "add",
              isFreeAction: true,
              iconProps: { style: { color: theme.palette.primary.main } },
              tooltip: "Add Synonym",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: "remove",
              isFreeAction: true,
              iconProps: { style: { color: theme.palette.secondary.main } },
              tooltip: "Remove Synonym",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: "done_all",
              isFreeAction: true,
              iconProps: { style: { color: theme.palette.primary.main } },
              tooltip: "Set All Mix",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: "block",
              isFreeAction: true,
              iconProps: { style: { color: theme.palette.secondary.main } },
              tooltip: "Clear All Mix",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: "add",
              isFreeAction: true,
              tooltip: "Add Synonym Program",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: "add",
              isFreeAction: true,
              tooltip: "Add Language Program",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: "arrow_upward",
              tooltip: "Move up",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: "arrow_downward",
              tooltip: "Move Down",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: () => (
                <FormControl fullWidth>
                  <InputLabel>Language</InputLabel>
                  <Select value={10} native>
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              ),
              isFreeAction: true,
              tooltip: "Add Language Program",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
          ]}
          columns={[
            { title: "syn", field: "syn_id", type: "numeric" },
            { title: "roots", field: "roots" },
            { title: "r1", field: "r1" },
            { title: "d1", field: "d1" },
            { title: "r2", field: "r2" },
            { title: "d2", field: "d2" },
            { title: "r3", field: "r3" },
            { title: "d3", field: "d3" },
            { title: "r4", field: "r4" },
            { title: "d4", field: "d4" },
            {
              title: "mix",
              field: "mix",
              render: (rowData) => <Switch color="primary" value={true} />,
            },
          ]}
          data={new Array(10).fill({
            syn_id: 1,
            roots: "tree",
            r1: 1,
            d1: 1,
            r2: 1,
            d2: 1,
            r3: 1,
            d3: 1,
            r4: 1,
            d4: 1,
            mix: 1,
          })}
          options={{
            search: false,
            paging: false,
            actionsColumnIndex: -1,
            minBodyHeight: 500,
            maxBodyHeight: 500,
          }}
        />
        {/* <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth mt={3}>
              Add Synonym
            </Button>
            <Button variant="contained" fullWidth mt={3}>
              Remove Synonym
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth mt={3}>
              Add Synonym Program
            </Button>
            <Button variant="contained" fullWidth mt={3}>
              Add Language Program
            </Button>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3}>
            <Button variant="contained" fullWidth mt={3}>
              Clear All Mix
            </Button>
            <Button variant="contained" fullWidth mt={3}>
              Set All Mix
            </Button>
          </Grid>
        </Grid> */}
      </Box>
    </Fragment>
  );
};

export default WordSynonym;
