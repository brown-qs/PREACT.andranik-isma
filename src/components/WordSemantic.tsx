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
          <MaterialTable
            title="Relations"
            actions={[
              {
                icon: "add",
                isFreeAction: true,
                iconProps: { style: { color: theme.palette.primary.main } },
                tooltip: "Add Relation",
                onClick: (event, rowData) => {
                  // Do save operation
                },
              },
              {
                icon: "delete",
                iconProps: {
                  style: { color: theme.palette.secondary.main },
                },
                tooltip: "Remove Relation",
                onClick: (event, rowData) => {
                  // Do save operation
                },
                position: 'toolbarOnSelect',
              },
              {
                icon: "arrow_upward",
                tooltip: "Move up",
                onClick: (event, rowData) => {
                  // Do save operation
                },
                position: 'row',
              },
              {
                icon: "arrow_downward",
                tooltip: "Move Down",
                onClick: (event, rowData) => {
                  // Do save operation
                },
                position: 'row',
              },
              {
                icon: "read_more",
                iconProps: { style: { color: theme.palette.primary.main } },
                tooltip: "Show More",
                onClick: (event, rowData) => {
                  // Do save operation
                },
                position: 'row',
              },
            ]}
            columns={[
              { title: "Num", field: "rel_num", type: "numeric" },
              { title: "Code1", field: "code1" },
              { title: "Code2", field: "code2" },
              { title: "Concept Name", field: "conceptName" },
              { title: "Prob", field: "prob" },
            ]}
            data={currentWordData(props).data.relations ?? []}
            options={{
              paging: false,
              selection: true,
              actionsColumnIndex: -1,
              minBodyHeight: 500,
              maxBodyHeight: 500,
            }}
          />
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
                  { title: "Concept Name", field: "conceptName" },
                  { title: "Prob", field: "prob" },
                ]}
                data={currentWordData(props).data.classes ?? []}
                options={{
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
                  { title: "Concept Name", field: "conceptName" },
                  { title: "Prob", field: "prob" },
                ]}
                data={currentWordData(props).data.environments ?? []}
                options={{
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

export default connectStore()(WordSemantic);
