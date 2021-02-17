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
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { currentWordData } from "../utils/redux-getters";
import connectStore from "../store/connect";

interface WordProgramsProps {}
const WordPrograms: FunctionalComponent<WordProgramsProps> = (props) => {
  const theme = useTheme();

  return (
    <Fragment>
      <MaterialTable
        title="Programs"
        actions={[
          {
            icon: "add",
            isFreeAction: true,
            iconProps: { style: { color: theme.palette.primary.main } },
            tooltip: "Add Program",
            onClick: (event, rowData) => {
              // Do save operation
            },
          },
          {
            icon: "remove",
            isFreeAction: true,
            iconProps: {
              style: { color: theme.palette.secondary.main },
            },
            tooltip: "Remove Program",
            onClick: (event, rowData) => {
              // Do save operation
            },
          },
          {
            icon: "read_more",
            iconProps: { style: { color: theme.palette.primary.main } },
            tooltip: "Edit Program",
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
        ]}
        columns={[
          { title: "Language", field: "lang" },
          { title: "Prog Type", field: "prog_type" },
          { title: "Stage", field: "stage" },
          { title: "Synonym", field: "synonym" },
          { title: "Prog Text", field: "prog_text" },
        ]}
        data={currentWordData(props).data.programs ?? []}
        options={{
          paging: false,
          actionsColumnIndex: -1,
          toolbar: false,
          minBodyHeight: 500,
          maxBodyHeight: 500,
        }}
      />
    </Fragment>
  );
};

export default connectStore()(WordPrograms);
