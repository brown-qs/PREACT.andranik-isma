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

interface WordProgramsProps {}
const WordPrograms: FunctionalComponent<WordProgramsProps> = (props) => {
  const theme = useTheme();

  return (
    <Fragment>
      <Box p={2}>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <MaterialTable
              actions={[
                {
                  icon: "read_more",
                  iconProps: { style: { color: theme.palette.primary.main } },
                  tooltip: "Show More",
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
              data={new Array(10).fill({
                lang: 1,
                prog_type: 168,
                stage: 5,
                synonym: "area(types)",
                prog_text: 100,
              })}
              options={{
                showTitle: false,
                search: false,
                paging: false,
                actionsColumnIndex: -1,
                toolbar: false,
                minBodyHeight: 500,
                maxBodyHeight: 500,
              }}
            />
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Button variant="contained" fullWidth mt={3}>
                  Add Program
                </Button>
                <Button variant="contained" fullWidth mt={3}>
                  Remove Program
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" fullWidth mt={3}>
                  Edit Program ...
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" fullWidth mt={5}>
              <ArrowUpwardIcon /> Up
            </Button>
            <Button variant="contained" fullWidth mt={1}>
              <ArrowDownwardIcon /> Down
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default WordPrograms;
