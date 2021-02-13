import { Fragment, FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MaterialTable, { MTableToolbar } from "material-table";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

interface AdvancedSearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const AdvancedSearchDialog: FunctionalComponent<AdvancedSearchDialogProps> = (
  props
) => {
  const [text, setText] = useState("");
  const [option, setOption] = useState("");

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Advanced Search"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <InputLabel>Searching Text</InputLabel>
              <Input value={text} />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              fullWidth
              control={<Checkbox color="primary" name="checkedA" />}
              label="Search as subtext"
            />
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select value={option} native>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              fullWidth
              control={<Checkbox color="primary" name="checkedA" />}
              label="Search in Roots"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Base Role</InputLabel>
              <Select value={option} native>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={<Checkbox color="primary" name="checkedA" />}
              label="Inv"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Frequency</InputLabel>
              <Select value={option} native>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={<Checkbox color="primary" name="checkedA" />}
              label="Inv"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Root Number</InputLabel>
              <Select value={option} native>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={<Checkbox color="primary" name="checkedA" />}
              label="Inv"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Synonym Number</InputLabel>
              <Select value={option} native>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={<Checkbox color="primary" name="checkedA" />}
              label="Inv"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select value={option} native>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={<Checkbox color="primary" name="checkedA" />}
              label="Inv"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Deformation Number</InputLabel>
              <Select value={option} native>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={<Checkbox color="primary" name="checkedA" />}
              label="Inv"
            />
          </Grid>
          <Grid item xs={12}>
            <MaterialTable
              title="Relations"
              components={{
                Toolbar: (props) => (
                  <div>
                    <MTableToolbar {...props} />
                    <Grid
                      spacing={2}
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="flex-start"
                    >
                      <Grid item>
                        <Button variant="outlined" color="primary">
                          Add
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="secondary">
                          Remove
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="default">
                          Clear
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="primary">
                          Set &/|
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="primary">
                          Set OR
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                ),
              }}
              columns={[
                { title: "C1", field: "lang" },
                { title: "C2", field: "syn", type: "numeric" },
                { title: "Concept Name", field: "word" },
                { title: "Prob", field: "roots" },
                { title: "Inv", field: "roots" },
                { title: "&/|", field: "roots" },
              ]}
              data={[
                {
                  lang: "English",
                  syn: 2,
                  word: "tree",
                  roots: "tree#",
                },
                {
                  lang: "English",
                  syn: 1,
                  word: "tree",
                  roots: "tree#",
                },
                {
                  lang: "English",
                  syn: 2,
                  word: "tree",
                  roots: "tree#",
                },
              ]}
              options={{
                search: false,
                paging: false,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>Class name</InputLabel>
              <Input value={text} />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel>Distance</InputLabel>
              <Select value={option} native>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="top"
                control={<Radio color="primary" />}
                label="Classes"
              />
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Instances"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              fullWidth
              control={<Checkbox color="primary" name="checkedA" />}
              label="Inv"
            />
          </Grid>          
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>Env Name</InputLabel>
              <Input value={text} />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={4}>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="top"
                control={<Radio color="primary" />}
                label="Environments"
              />
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Instances"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              fullWidth
              control={<Checkbox color="primary" name="checkedA" />}
              label="Inv"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} variant="contained" color="default" size="large">
          Clear
        </Button>
        <Button onClick={props.onClose} variant="contained" color="primary" size="large">
          Search
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdvancedSearchDialog;
