import { Fragment, FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTheme } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import connectStore from "../store/connect";

interface SearchResultDialogProps {
  open: boolean;
  onClose: () => void;
}

const SearchResultDialog: FunctionalComponent<SearchResultDialogProps> = (
  props
) => {
  const theme = useTheme();
  // const [selRows, setSelRows] = useState([]);
  let selRows: any[] = [];

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
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.onClose}
          variant="contained"
          color="default"
          size="large"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {props.addWords(selRows); props.onClose()}}
          variant="contained"
          color="primary"
          size="large"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connectStore()(SearchResultDialog);
