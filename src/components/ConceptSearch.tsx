import { Fragment, FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import useAllTags from "../hooks/useAllTags";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
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
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
const ConceptSearch: FunctionalComponent = () => {
  const { tags } = useAllTags();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("all");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <FormControl fullWidth size="small">
            <InputLabel>Searching Text</InputLabel>
            <Input value={text} />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Language</InputLabel>
            <Select
              native
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option value={"all"}>ALL</option>
              <option value={"english"}>English</option>
              <option value={"english"}>Armenian</option>
              <option value={"english"}>English</option>
              <option value={"english"}>Armenian</option>
              <option value={"english"}>English</option>
              <option value={"english"}>Armenian</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            fullWidth
            control={<Checkbox color="primary" name="checkedA" />}
            label="As subtext"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            fullWidth
            control={<Checkbox color="primary" name="checkedA" />}
            label="In Roots"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Role</InputLabel>
            <Select
              native
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option value={"all"}>ALL</option>
              <option value={"english"}>English</option>
              <option value={"english"}>Armenian</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Deformation Num</InputLabel>
            <Input value={text} />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Concept Num</InputLabel>
            <Input value={text} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel>Concept Name of Horizontal Relation</InputLabel>
            <Input value={text} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel>Class Name</InputLabel>
            <Input value={text} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
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

export default ConceptSearch;
