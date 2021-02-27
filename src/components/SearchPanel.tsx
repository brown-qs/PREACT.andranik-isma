import { Fragment, FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ProgramSearch from "./ProgramSearch";
import ConceptSearch from "./ConceptSearch";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Grid } from "./StyledMui";
import MaterialTable from "material-table";
import { useTheme } from "@material-ui/core/styles";
import connectStore from "../store/connect";
import Link from '@material-ui/core/Link'
import { LANGUAGE_MENU } from "../constants";

const SearchPanel: FunctionalComponent = (props) => {
  const [search_mode, setSearchMode] = useState("concept");
  const [searchClick, setSearchClick] = useState(0);
  const [clearClick, setClearClick] = useState(0);
  const theme = useTheme();

  return (
    <Fragment>
      <Grid container spacing={10}>
        <Grid item xs={7}>
          <MaterialTable
            title="Search Results"
            columns={[
              {
                title: "Language",
                field: "lang",
                render: (rowData) => LANGUAGE_MENU[rowData.lang],
                cellStyle: { width: "15%" },
              },
              {
                title: "Syn",
                field: "syn",
                type: "numeric",
                cellStyle: { width: "10%" },
              },
              {
                title: "Word",
                field: "word",
                cellStyle: { width: "40%" },
                render: (rowData) => (
                  <Link
                    component="button"
                    onClick={(_) => {
                      props.addWord(rowData);
                    }}
                  >
                    {rowData.word}
                  </Link>
                ),
              },
              {
                title: "Roots",
                field: "roots",
                cellStyle: { width: "30%" },
              },
            ]}
            data={props.searchResults}
            options={{
              paging: false,
              actionsColumnIndex: -1,
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Card elevation={12}>
            <CardHeader
              title="Search Panel"
              action={
                <FormControl>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={search_mode}
                    onChange={(e) => {
                      setSearchClick(0);
                      setClearClick(0);
                      setSearchMode(e.target.value);
                    }}
                  >
                    <MenuItem value={"concept"}>Concept Search</MenuItem>
                    <MenuItem value={"program"}>
                      Program/Comment Search
                    </MenuItem>
                  </Select>
                </FormControl>
              }
            />
            <CardContent>
              {search_mode == "concept" && (
                <ConceptSearch
                  searchClick={searchClick}
                  clearClick={clearClick}
                />
              )}
              {search_mode == "program" && (
                <ProgramSearch
                  searchClick={searchClick}
                  clearClick={clearClick}
                />
              )}
              <Box mt={3} mb={1}>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={() => setClearClick((cur) => cur + 1)}
                >
                  Clear Inputs
                </Button>
              </Box>
              <Button
                variant="contained"
                size="small"
                color="primary"
                fullWidth
                size="large"
                onClick={() => setSearchClick((cur) => cur + 1)}
              >
                Search
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default connectStore()(SearchPanel);
