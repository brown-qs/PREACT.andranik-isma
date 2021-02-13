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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

interface WordSynonymProps {
  word: string;
}
const WordSynonym: FunctionalComponent<WordSynonymProps> = (props) => {
  const theme = useTheme();
  const [modalIdOpen, setModalIdOpen] = useState(false);

  return (
    <Fragment>
      <Box p={2}>
        <Grid container justify="space-between">
          <Grid item></Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setModalIdOpen(true);
              }}
            >
              ID
            </Button>
            <Dialog
              open={modalIdOpen}
              onClose={() => {
                setModalIdOpen(false);
              }}
            >
              <DialogContent>The Current Concept Id is 1_7316</DialogContent>
              <DialogActions>
                <Button onClick={() => setModalIdOpen(false)}>OK</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
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
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select value={10} native>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" fullWidth mt={5}>
              <ArrowUpwardIcon /> Up
            </Button>
            <Button variant="contained" color="primary" fullWidth mt={1}>
              <ArrowDownwardIcon /> Down
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default WordSynonym;
