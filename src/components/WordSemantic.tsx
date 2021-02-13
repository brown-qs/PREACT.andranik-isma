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

interface WordSemanticProps {}
const WordSemantic: FunctionalComponent<WordSemanticProps> = (props) => {
  const theme = useTheme();
  const [section, setSection] = useState(0);

  return (
    <Fragment>
      <Box p={2}>
        <ButtonGroup variant="text" aria-label="text primary button group">
          <Button
            color={section == 0 ? "primary" : ""}
            onClick={() => setSection(0)}
          >
            Relations
          </Button>
          <Button
            color={section == 1 ? "primary" : ""}
            onClick={() => setSection(1)}
          >
            Classes and Environments
          </Button>
          <Button
            color={section == 2 ? "primary" : ""}
            onClick={() => setSection(2)}
          >
            Concept Type/Frequency
          </Button>
        </ButtonGroup>
        {section == 0 && (
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
                  { title: "Num", field: "num", type: "numeric" },
                  { title: "Code1", field: "code1" },
                  { title: "Code2", field: "code2" },
                  { title: "Concept Name", field: "concept" },
                  { title: "Prob", field: "prob" },
                ]}
                data={new Array(10).fill({
                  num: 1,
                  code1: 168,
                  code2: 5,
                  concept: "area(types)",
                  prob: 100,
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
                    Add Relation
                  </Button>
                  <Button variant="contained" fullWidth mt={3}>
                    Remove Relation
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button variant="contained" fullWidth mt={3}>
                    Show Rel Concept
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
        )}
        {section == 1 && (
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <MaterialTable
                title="Classes"
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
                  { title: "Concept Name", field: "concept", type: "numeric" },
                  { title: "Prob", field: "prob" },
                ]}
                data={new Array(10).fill({
                  concept: "area(types)",
                  prob: 100,
                })}
                options={{
                  search: false,
                  paging: false,
                  actionsColumnIndex: -1,
                  minBodyHeight: 500,
                  maxBodyHeight: 500,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <MaterialTable
                title="Environments"
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
                  { title: "Concept Name", field: "concept", type: "numeric" },
                  { title: "Prob", field: "prob" },
                ]}
                data={new Array(10).fill({
                  concept: "area(types)",
                  prob: 100,
                })}
                options={{
                  search: false,
                  paging: false,
                  actionsColumnIndex: -1,
                  minBodyHeight: 500,
                  maxBodyHeight: 500,
                }}
              />
            </Grid>
          </Grid>
        )}
        {section == 2 && (
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Input />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Frequency</InputLabel>
                <Input />
              </FormControl>
            </Grid>
          </Grid>
        )}
      </Box>
    </Fragment>
  );
};

export default WordSemantic;
