import { Fragment, FunctionalComponent, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Button from "@material-ui/core/Button";
import MoreVert from "@material-ui/icons/MoreVert";
import AdvancedSearchDialog from "./AdvancedSearchDialog";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import connectStore from "../store/connect";
import { LANGUAGE_MENU, ROLE_MENU } from "../constants";
import {
  ConceptSearchProperties,
  RelationSearchProperties,
} from "../types/SearchProperty";

const ConceptSearch: FunctionalComponent = (props) => {
  const [open, setOpen] = useState(false);
  const [searchForm, setSearchForm] = useState(new ConceptSearchProperties());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (props.searchClick) {
      if (searchForm.text == "")
        props.enqueueSnackbar("Input at least Searching Text", {
          variant: "warning",
        });
      else props.searchConcept(searchForm);
    }
  }, [props.searchClick]);

  useEffect(() => {
    if (props.clearClick) {
      setSearchForm(new ConceptSearchProperties());
    }
  }, [props.clearClick]);

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <FormControl fullWidth size="small">
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
          <FormControl fullWidth size="small">
            <InputLabel>Language</InputLabel>
            <Select
              value={searchForm.language}
              onChange={(e) => {
                setSearchForm({ ...searchForm, language: e.target.value });
              }}
            >
              {LANGUAGE_MENU.map((item, index) => (
                <MenuItem value={index}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            fullWidth
            control={
              <Checkbox
                color="primary"
                name="checkedA"
                checked={searchForm.searchAsSubtext}
                onChange={(e) => {
                  setSearchForm({
                    ...searchForm,
                    searchAsSubtext: e.target.checked,
                  });
                }}
              />
            }
            label="Search as subtext"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            fullWidth
            control={
              <Checkbox
                color="primary"
                name="checkedA"
                checked={searchForm.searchInRoots}
                onChange={(e) => {
                  setSearchForm({
                    ...searchForm,
                    searchInRoots: e.target.checked,
                  });
                }}
              />
            }
            label="Search in Roots"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Role</InputLabel>
            <Select
              value={searchForm.role}
              onChange={(e) => {
                setSearchForm({ ...searchForm, role: e.target.value });
              }}
            >
              {ROLE_MENU.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Deformation Num</InputLabel>
            <Input
              value={searchForm.defNumber}
              onChange={(e) => {
                setSearchForm({ ...searchForm, defNumber: e.target.value });
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Concept Num</InputLabel>
            <Input
              value={searchForm.id}
              onChange={(e) => {
                setSearchForm({ ...searchForm, id: e.target.value });
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel>Concept Name of Horizontal Relation</InputLabel>
            <Input
              onChange={(e) => {
                let rel: RelationSearchProperties = new RelationSearchProperties();
                rel.conceptName = e.target.value;
                setSearchForm({ ...searchForm, relations: [rel] });
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel>Class Name</InputLabel>
            <Input
              value={searchForm.id}
              onChange={(e) => {
                setSearchForm({ ...searchForm, id: e.target.value });
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="classes"
            onChange={(e) => {
              setSearchForm({
                ...searchForm,
                classInClasses: e.target.value == "classes",
                classDist: e.target.value == "first" ? "1" : "",
              });
            }}
          >
            <FormControlLabel
              value="classes"
              control={<Radio color="primary" />}
              label="Classes"
            />
            <FormControlLabel
              value="all"
              control={<Radio color="primary" />}
              label="All Children"
            />
            <FormControlLabel
              value="first"
              control={<Radio color="primary" />}
              label="First Child"
            />
          </RadioGroup>
        </Grid>
        <Button
          size="large"
          color="primary"
          startIcon={<MoreVert />}
          onClick={handleOpen}
        >
          Advanced Search
        </Button>
        <AdvancedSearchDialog open={open} onClose={handleClose} />
      </Grid>
    </Fragment>
  );
};

export default connectStore()(ConceptSearch);
