import { Fragment, FunctionalComponent, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import connectStore from "../store/connect";
import { FormControl } from "./StyledMui";
import {
  LANGUAGE_MENU,
  PROGRAM_TYPE_MENU,
  PROGRAM_STAGE_MENU,
} from "../constants";
import { ProgramSearchProperties } from "../types/SearchProperty";

const ProgramSearch: FunctionalComponent = (props: any) => {
  const [progSearchForm, setProgSearchForm] = useState(
    new ProgramSearchProperties()
  );

  useEffect(() => {
    if (props.searchClick) {
      if (progSearchForm.word == "")
        props.enqueueSnackbar("Input at least Word", {
          variant: "warning",
        });
      else props.searchProgComment(progSearchForm);
    }
  }, [props.searchClick]);

  useEffect(() => {
    if (props.clearClick) {
      setProgSearchForm(new ProgramSearchProperties());
    }
  }, [props.clearClick]);

  return (
    <Fragment>
      <FormControl fullWidth size="small">
        <InputLabel>Word</InputLabel>
        <Input
          value={progSearchForm.word}
          onChange={(e) => {
            setProgSearchForm({ ...progSearchForm, word: e.target.value });
          }}
        />
      </FormControl>
      <FormControl fullWidth mt={3}>
        <InputLabel>Language</InputLabel>
        <Select
          value={progSearchForm.language}
          onChange={(e) => {
            setProgSearchForm({ ...progSearchForm, language: e.target.value });
          }}
        >
          {LANGUAGE_MENU.map((item, index) => (
            <MenuItem value={index}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth mt={3}>
        <InputLabel>Program Type</InputLabel>
        <Select
          value={progSearchForm.type}
          onChange={(e) => {
            setProgSearchForm({ ...progSearchForm, type: e.target.value });
          }}
        >
          {PROGRAM_TYPE_MENU.map((item, index) => (
            <MenuItem value={index}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth mt={3}>
        <InputLabel>Program Stage</InputLabel>
        <Select
          value={progSearchForm.stage}
          onChange={(e) => {
            setProgSearchForm({ ...progSearchForm, stage: e.target.value });
          }}
        >
          {PROGRAM_STAGE_MENU.map((item, index) => (
            <MenuItem value={index}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small" mt={3}>
        <InputLabel>Search Text in Program Body</InputLabel>
        <Input
          value={progSearchForm.text}
          onChange={(e) => {
            setProgSearchForm({ ...progSearchForm, text: e.target.value });
          }}
        />
      </FormControl>
      <FormControl fullWidth size="small" mt={3}>
        <InputLabel>Search Text in Comment Body</InputLabel>
        <Input
          value={progSearchForm.commText}
          onChange={(e) => {
            setProgSearchForm({ ...progSearchForm, commText: e.target.value });
          }}
        />
      </FormControl>
    </Fragment>
  );
};

export default connectStore()(ProgramSearch);
