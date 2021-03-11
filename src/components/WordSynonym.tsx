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
import { LANGUAGE_MENU, COUNTRY_3CODES } from "../constants";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import connectStore from "../store/connect";
import { currentWordData } from "../utils/redux-getters";
import { Word } from "../types/Word";

const WordSynonym: FunctionalComponent = (props) => {
  const theme = useTheme();
  const [language, setLanguage] = useState(currentWordData(props).lang);
  const checkAndSaveToStore = (dataUpdate) => {
    let valid = true;
    dataUpdate = dataUpdate.map((data, ind) => {
      if (data.roots == "" || data.r1 == "" || data.d1 == "") valid = false;
      return { ...data, syn: ind + 1 };
    });
    if (valid)
      props.updateCurrentWord({
        key: COUNTRY_3CODES[language] + "Words",
        value: dataUpdate,
      });
    else
      props.enqueueSnackbar("At least Roots, R1, D1 are required.", {
        variant: "warning",
      });
    return valid;
  };
  return (
    <Fragment>
      <Box p={2}>
        <MaterialTable
          title={
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              >
                {LANGUAGE_MENU.map((item, index) => {
                  if (index) return <MenuItem value={index}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
          }
          localization={{
            header: {
              actions: "Up/Down",
            },
          }}
          actions={[
            {
              icon: "done_all",
              isFreeAction: true,
              iconProps: { style: { color: theme.palette.primary.main } },
              tooltip: "Set All Mix",
              onClick: (event, rowData) => {
                let dataUpdate = [
                  ...currentWordData(props).data[
                    COUNTRY_3CODES[language] + "Words"
                  ],
                ].map((data) => {
                  return { ...data, mix: 1 };
                });
                if (checkAndSaveToStore(dataUpdate)) resolve();
                else reject();
              },
            },
            {
              icon: "block",
              isFreeAction: true,
              iconProps: { style: { color: theme.palette.secondary.main } },
              tooltip: "Clear All Mix",
              onClick: (event, rowData) => {
                let dataUpdate = [
                  ...currentWordData(props).data[
                    COUNTRY_3CODES[language] + "Words"
                  ],
                ].map((data) => {
                  return { ...data, mix: 0 };
                });
                if (checkAndSaveToStore(dataUpdate)) resolve();
                else reject();
              },
            },
            {
              icon: "arrow_upward",
              tooltip: "Move up",
              onClick: (event, rowData) => {
                if (rowData.syn == 1) return;
                let dataUpdate = [
                  ...currentWordData(props).data[
                    COUNTRY_3CODES[language] + "Words"
                  ],
                ];
                [dataUpdate[rowData.syn - 2], dataUpdate[rowData.syn - 1]] = [
                  dataUpdate[rowData.syn - 1],
                  dataUpdate[rowData.syn - 2],
                ];
                if (checkAndSaveToStore(dataUpdate)) resolve();
                else reject();
              },
              position: "row",
            },
            {
              icon: "arrow_downward",
              tooltip: "Move Down",
              onClick: (event, rowData) => {
                let dataUpdate = [
                  ...currentWordData(props).data[
                    COUNTRY_3CODES[language] + "Words"
                  ],
                ];
                if (rowData.syn == dataUpdate.length) return;
                console.log(dataUpdate);
                [dataUpdate[rowData.syn], dataUpdate[rowData.syn - 1]] = [
                  dataUpdate[rowData.syn - 1],
                  dataUpdate[rowData.syn],
                ];
                if (checkAndSaveToStore(dataUpdate)) resolve();
                else reject();
              },
              position: "row",
            },
          ]}
          editable={{
            onBulkUpdate: (changes) =>
              new Promise<void>((resolve, reject) => {
                let dataUpdate = [
                  ...currentWordData(props).data[
                    COUNTRY_3CODES[language] + "Words"
                  ],
                ];
                Object.keys(changes).map((id) => {
                  dataUpdate[id] = changes[id].newData;
                });
                if (checkAndSaveToStore(dataUpdate)) resolve();
                else reject();
              }),
            onRowAdd: (_newData) =>
              new Promise<void>((resolve, reject) => {
                let newData = { ...new Word(), ..._newData };
                let dataUpdate = [
                  ...currentWordData(props).data[
                    COUNTRY_3CODES[language] + "Words"
                  ],
                ];
                dataUpdate.push(newData);
                if (checkAndSaveToStore(dataUpdate)) resolve();
                else reject();
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise<void>((resolve, reject) => {
                let dataUpdate = [
                  ...currentWordData(props).data[
                    COUNTRY_3CODES[language] + "Words"
                  ],
                ];
                console.log(newData);
                dataUpdate[oldData.tableData.id] = newData;
                if (checkAndSaveToStore(dataUpdate)) resolve();
                else reject();
              }),
            onRowDelete: (oldData) =>
              new Promise<void>((resolve, reject) => {
                let dataUpdate = [
                  ...currentWordData(props).data[
                    COUNTRY_3CODES[language] + "Words"
                  ],
                ];
                dataUpdate.splice(oldData.tableData.id, 1);
                if (checkAndSaveToStore(dataUpdate)) resolve();
                else reject();
              }),
          }}
          columns={[
            { title: "syn", field: "syn", type: "numeric", editable: "never" },
            { title: "roots", field: "roots", cellStyle: { width: "50%" } },
            { title: "r1", field: "r1", initialEditValue: "0" },
            { title: "d1", field: "d1", initialEditValue: "0" },
            { title: "r2", field: "r2" },
            { title: "d2", field: "d2" },
            { title: "r3", field: "r3" },
            { title: "d3", field: "d3" },
            { title: "r4", field: "r4" },
            { title: "d4", field: "d4" },
            {
              title: "mix",
              field: "mix",
              render: (rowData) => (
                <Switch color="primary" checked={rowData.mix == "1"} />
              ),
            },
          ]}
          data={
            currentWordData(props).data[COUNTRY_3CODES[language] + "Words"] ??
            []
          }
          options={{
            paging: false,
            actionsColumnIndex: -1,
            minBodyHeight: 500,
            maxBodyHeight: 500,
          }}
        />
      </Box>
    </Fragment>
  );
};

export default connectStore()(WordSynonym);
