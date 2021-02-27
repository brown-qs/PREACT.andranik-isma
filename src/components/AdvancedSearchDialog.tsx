import {  FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MaterialTable from "material-table";
import Radio from "@material-ui/core/Radio";
import CheckIcon from "@material-ui/icons/Check";
import RemoveIcon from "@material-ui/icons/Remove";
import RadioGroup from "@material-ui/core/RadioGroup";
import { ConceptSearchProperties } from "../types/SearchProperty";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import BlockIcon from "@material-ui/icons/Block";
import { useTheme } from "@material-ui/core/styles";
import connectStore from "../store/connect";
import {
  ROLE_MENU,
  ROOT_NUMBER_MENU,
  LANGUAGE_MENU,
  FREQUENCY_MENU,
  CLASS_DISTANCE_MENU,
} from "..//constants";
import MenuItem from "@material-ui/core/MenuItem";

interface AdvancedSearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const AdvancedSearchDialog: FunctionalComponent<AdvancedSearchDialogProps> = (
  props
) => {
  const theme = useTheme();
  const [searchForm, setSearchForm] = useState<ConceptSearchProperties>(
    new ConceptSearchProperties()
  );

  return (
    <Dialog
      maxWidth="lg"
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <AppBar position="static" style={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Advanced Search
          </Typography>
          <IconButton
            color="inherit"
            onClick={props.onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <InputLabel>Searching Text</InputLabel>
              <Input
                value={searchForm.text}
                onChange={(e) => {
                  setSearchForm({ ...searchForm, text: e.target.value });
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              fullWidth
              control={
                <Checkbox
                  onChange={(e) => {
                    setSearchForm({
                      ...searchForm,
                      searchAsSubtext: e.target.checked,
                    });
                  }}
                  color="primary"
                  name="checkedA"
                  checked={searchForm.searchAsSubtext}
                />
              }
              label="Search as subtext"
            />
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                value={searchForm.language}
                onChange={(e) => {
                  setSearchForm({
                    ...searchForm,
                    ...searchForm,
                    language: e.target.value,
                  });
                }}
              >
                {LANGUAGE_MENU.map((item, index) => (
                  <MenuItem value={index}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              fullWidth
              control={
                <Checkbox
                  color="primary"
                  name="checkedA"
                  onChange={(e) => {
                    setSearchForm({
                      ...searchForm,
                      searchInRoots: e.target.checked,
                    });
                  }}
                  checked={searchForm.searchInRoots}
                />
              }
              label="Search in Roots"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Base Role</InputLabel>
              <Select
                value={searchForm.baseRole}
                onChange={(e) => {
                  setSearchForm({
                    ...searchForm,
                    ...searchForm,
                    baseRole: e.target.value,
                  });
                }}
              >
                {ROLE_MENU.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={
                <Checkbox
                  color="primary"
                  name="checkedA"
                  onChange={(e) => {
                    setSearchForm({
                      ...searchForm,
                      baseRoleInv: e.target.checked,
                    });
                  }}
                  checked={searchForm.baseRoleInv}
                />
              }
              label="Inv"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Frequency</InputLabel>
              <Select
                value={searchForm.frequency}
                onChange={(e) => {
                  setSearchForm({
                    ...searchForm,
                    ...searchForm,
                    frequency: e.target.value,
                  });
                }}
              >
                {FREQUENCY_MENU.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={
                <Checkbox
                  color="primary"
                  name="checkedA"
                  onChange={(e) => {
                    setSearchForm({
                      ...searchForm,
                      frequencyInv: e.target.checked,
                    });
                  }}
                  checked={searchForm.frequencyInv}
                />
              }
              label="Inv"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Root Number</InputLabel>
              <Select
                value={searchForm.rootNumber}
                onChange={(e) => {
                  setSearchForm({
                    ...searchForm,
                    ...searchForm,
                    rootNumber: e.target.value,
                  });
                }}
              >
                {ROOT_NUMBER_MENU.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={
                <Checkbox
                  color="primary"
                  name="checkedA"
                  onChange={(e) => {
                    setSearchForm({
                      ...searchForm,
                      rootNumberInv: e.target.checked,
                    });
                  }}
                  checked={searchForm.rootNumberInv}
                />
              }
              label="Inv"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Synonym Number</InputLabel>
              <Select
                value={searchForm.synNumber}
                onChange={(e) => {
                  setSearchForm({
                    ...searchForm,
                    ...searchForm,
                    synNumber: e.target.value,
                  });
                }}
              >
                {ROLE_MENU.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={
                <Checkbox
                  color="primary"
                  name="checkedA"
                  onChange={(e) => {
                    setSearchForm({
                      ...searchForm,
                      synNumberInv: e.target.checked,
                    });
                  }}
                  checked={searchForm.synNumberInv}
                />
              }
              label="Inv"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                value={searchForm.role}
                onChange={(e) => {
                  setSearchForm({
                    ...searchForm,
                    ...searchForm,
                    role: e.target.value,
                  });
                }}
              >
                {ROLE_MENU.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={
                <Checkbox
                  color="primary"
                  name="checkedA"
                  onChange={(e) => {
                    setSearchForm({ ...searchForm, roleInv: e.target.checked });
                  }}
                  checked={searchForm.roleInv}
                />
              }
              label="Inv"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Deformation Number</InputLabel>
              <Input
                value={searchForm.defNumber}
                onChange={(e) => {
                  setSearchForm({ ...searchForm, defNumber: e.target.value });
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              fullWidth
              control={
                <Checkbox
                  color="primary"
                  name="checkedA"
                  onChange={(e) => {
                    setSearchForm({
                      ...searchForm,
                      defNumberInv: e.target.checked,
                    });
                  }}
                  checked={searchForm.defNumberInv}
                />
              }
              label="Inv"
            />
          </Grid>
          <Grid item xs={12}>
            <MaterialTable
              title="Relations"
              editable={{
                onBulkUpdate: (changes) =>
                  new Promise<void>((resolve, reject) => {
                    const dataUpdate = [...searchForm.relations];
                    Object.keys(changes).map((id) => {
                      dataUpdate[id] = changes[id].newData;
                    });
                    setSearchForm({
                      ...searchForm,
                      relations: [...dataUpdate],
                    });
                    resolve();
                  }),
                onRowAdd: (newData) =>
                  new Promise<void>((resolve, reject) => {
                    setSearchForm({
                      ...searchForm,
                      relations: [...searchForm.relations, newData],
                    });
                    resolve();
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise<void>((resolve, reject) => {
                    const dataUpdate = [...searchForm.relations];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setSearchForm({
                      ...searchForm,
                      relations: [...dataUpdate],
                    });
                    resolve();
                  }),
                onRowDelete: (oldData) =>
                  new Promise<void>((resolve, reject) => {
                    const dataDelete = [...searchForm.relations];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setSearchForm({
                      ...searchForm,
                      relations: [...dataDelete],
                    });
                    resolve();
                  }),
              }}
              actions={[
                {
                  icon: "delete",
                  iconProps: { style: { color: theme.palette.secondary.main } },
                  tooltip: "Remove",
                  onClick: (event, rowData) => {},
                  position: "toolbarOnSelect",
                },
                {
                  icon: "check_box",
                  tooltip: "Set &/|",
                  onClick: (event, rowData) => {},
                  position: "toolbar",
                },
                {
                  icon: "check_box_outline_blank",
                  tooltip: "Set OR",
                  onClick: (event, rowData) => {},
                  position: "toolbar",
                },
              ]}
              columns={[
                { title: "C1", field: "code1" },
                { title: "C2", field: "code2" },
                { title: "Concept Name", field: "conceptName" },
                { title: "Prob", field: "prob" },
                {
                  title: "Inv",
                  field: "inv",
                  lookup: { 0: <RemoveIcon />, 1: <CheckIcon /> },
                },
                {
                  title: "&/|",
                  field: "andor",
                  lookup: { 0: <RemoveIcon />, 1: <CheckIcon /> },
                },
              ]}
              data={searchForm.relations}
              options={{
                selection: true,
                paging: false,
                minBodyHeight: 500,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>Class name</InputLabel>
              <Input
                value={searchForm.className}
                onChange={(e) => {
                  setSearchForm({ ...searchForm, className: e.target.value });
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel>Distance</InputLabel>
              <Select
                value={searchForm.classDist}
                onChange={(e) => {
                  setSearchForm({
                    ...searchForm,
                    ...searchForm,
                    classDist: e.target.value,
                  });
                }}
              >
                {CLASS_DISTANCE_MENU.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="classes"
              onChange={(e) => {
                setSearchForm({
                  ...searchForm,
                  classInClasses: e.target.value == "classes",
                });
              }}
            >
              <FormControlLabel
                value="classes"
                control={<Radio color="primary" />}
                label="Classes"
              />
              <FormControlLabel
                value="instances"
                control={<Radio color="primary" />}
                label="Instances"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              fullWidth
              disabled={searchForm.classInClasses}
              control={
                <Checkbox
                  color="primary"
                  name="checkedA"
                  onChange={(e) => {
                    setSearchForm({
                      ...searchForm,
                      classNameInv: e.target.checked,
                    });
                  }}
                  checked={searchForm.classNameInv}
                />
              }
              label="Inv"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>Env Name</InputLabel>
              <Input
                value={searchForm.envName}
                onChange={(e) => {
                  setSearchForm({ ...searchForm, envName: e.target.value });
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="environments"
              onChange={(e) => {
                setSearchForm({
                  ...searchForm,
                  envInEnvs: e.target.value == "environments",
                });
              }}
            >
              <FormControlLabel
                value="environments"
                control={<Radio color="primary" />}
                label="Environments"
              />
              <FormControlLabel
                value="instrances"
                control={<Radio color="primary" />}
                label="Instances"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              fullWidth
              disabled={searchForm.envInEnvs}
              control={
                <Checkbox
                  color="primary"
                  name="checkedA"
                  onChange={(e) => {
                    setSearchForm({
                      ...searchForm,
                      envNameInv: e.target.checked,
                    });
                  }}
                  checked={searchForm.envNameInv}
                />
              }
              label="Inv"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={(e) => {
            setSearchForm(new ConceptSearchProperties());
          }}
          variant="contained"
          color="default"
          size="large"
        >
          <BlockIcon />
          Clear
        </Button>
        <Button
          onClick={(e) => {
            if (searchForm.text == "") alert("Please Input Searching Text...");
            else {
              props.onClose();
              props.searchConcept(searchForm);
            }
          }}
          variant="contained"
          color="primary"
          size="large"
        >
          <SearchIcon />
          Search
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connectStore()(AdvancedSearchDialog);
