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
import ProgramSearch from "./ProgramSearch";
import ConceptSearch from "./ConceptSearch";
import SearchResultDialog from "./SearchResultDialog";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Grid } from "./StyledMui";
import MaterialTable from "material-table";
import { useTheme } from "@material-ui/core/styles";
import connectStore from "../store/connect";

const SearchPanel: FunctionalComponent = (props) => {
  const { tags } = useAllTags();
  const [search_mode, setSearchMode] = useState("concept");

  const theme = useTheme();

  return (
    <Fragment>
      <Grid container spacing={10}>
        <Grid item xs={7}>
          <MaterialTable
            title="Search Results"
            actions={[
              {
                icon: "read_more",
                iconProps: { style: { color: theme.palette.primary.main } },
                tooltip: "Open this Item",
                onClick: (event, rowData) => {
                  props.addWord(rowData);
                },
              },
            ]}
            columns={[
              { title: "Language", field: "lang" },
              { title: "Syn", field: "syn", type: "numeric" },
              { title: "Word", field: "word" },
              {
                title: "Roots",
                field: "roots",
              },
            ]}
            data={[
              {
                id: 1,
                lang: "English",
                syn: 1,
                word: "tree",
                roots: "tree#",
              },
              {
                id: 2,
                lang: "English",
                syn: 4,
                word: "place",
                roots: "tree#",
              },
              {
                id: 3,
                lang: "English",
                syn: 2,
                word: "wood",
                roots: "tree#",
              },
            ]}
            options={{
              search: false,
              paging: false,
              actionsColumnIndex: -1
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
              {search_mode == "concept" && <ConceptSearch />}
              {search_mode == "program" && <ProgramSearch />}
              <Box mt={3} mb={1}>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  fullWidth
                  size="large"
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
                onClick={() => {
                }}
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
