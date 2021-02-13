import { Fragment, FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import useAllTags from "../hooks/useAllTags";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MoreVert from "@material-ui/icons/MoreVert";
import AdvancedSearchDialog from "./AdvancedSearchDialog";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { FormControl } from "./StyledMui";

const ProgramSearch: FunctionalComponent = () => {
  const { tags } = useAllTags();
  const [open, setOpen] = useState(false);
  const [search_mode, setSearchMode] = useState("concept");
  const [text, setText] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <FormControl fullWidth size="small">
        <InputLabel>Word</InputLabel>
        <Input value={text} />
      </FormControl>
      <FormControl fullWidth mt={3}>
        <InputLabel>Language</InputLabel>
        <Select value={10} native>
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl fullWidth mt={3}>
        <InputLabel>Program Type</InputLabel>
        <Select value={10} native>
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl fullWidth mt={3}>
        <InputLabel>Program Stage</InputLabel>
        <Select value={10} native>
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>  
      <FormControl fullWidth size="small" mt={3}>
        <InputLabel>Search Text in Program Body</InputLabel>
        <Input value={text} />
      </FormControl>
      <FormControl fullWidth size="small" mt={3}>
        <InputLabel>Search Text in Comment Body</InputLabel>
        <Input value={text} />
      </FormControl>
    </Fragment>
  );
};

export default ProgramSearch;
