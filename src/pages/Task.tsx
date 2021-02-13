import { FunctionalComponent, h, Fragment } from "preact";
import PopularTags from "../components/SearchPanel";
import { useEffect, useState } from "preact/hooks";
import { getCurrentUrl, route } from "preact-router";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import WordSynonym from "../components/WordSynonym";
import WordSemantic from "../components/WordSemantic";
import WordPrograms from "../components/WordPrograms";
import WordDescription from "../components/WordDescription";
import WordDefinition from "../components/WordDefinition";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import connectStore from "../store/connect";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { Button, Card } from "../components/StyledMui";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SaveIcon from "@material-ui/icons/Save";
import Tooltip from "@material-ui/core/Tooltip";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import CloseIcon from "@material-ui/icons/Close";
import MaterialTable from "material-table";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import SendIcon from "@material-ui/icons/Send";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";

interface TaskProps {}

const Task: FunctionalComponent<TaskProps> = (props) => {
  const { user } = props;
  const [tab, setTab] = useState("inbox");
  const theme = useTheme();
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    if (!user) route("/login");
  }, [user]);

  return (
    <Container maxWidth="lg">
      <Card elevation={10}>
        <CardHeader
          action={
            <Fragment>
              <Tooltip title="Inbox">
                <IconButton
                  aria-label="save"
                  color={tab == "inbox" ? "primary" : "default"}
                  onClick={() => {
                    setTab("inbox");
                  }}
                >
                  <MoveToInboxIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Outbox">
                <IconButton
                  aria-label="test"
                  color={tab == "outbox" ? "primary" : "default"}
                  onClick={() => {
                    setTab("outbox");
                  }}
                >
                  <SendIcon />
                </IconButton>
              </Tooltip>
            </Fragment>
          }
          title="Tasks"
          subheader="Checkout Tasks"
        />

        <MaterialTable
          actions={[
            {
              icon: "refresh",
              iconProps: { style: { color: theme.palette.primary.main } },
              isFreeAction: true,
              tooltip: "Refresh",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
            {
              icon: "delete",
              iconProps: { style: { color: theme.palette.secondary.main } },
              isFreeAction: true,
              tooltip: "Remove Task",
              onClick: (event, rowData) => {
                // Do save operation
              },
            },
          ]}
          columns={[
            { title: "User name", field: "syn_id" },
            { title: "Date", field: "roots" },
            { title: "Time", field: "r1" },
            { title: "Task", field: "d1" },
          ]}
          data={new Array(10).fill({
            syn_id: 1,
            roots: "tree",
            r1: 1,
            d1: 1,
          })}
          options={{
            showTitle: false,
            search: false,
            paging: false,
            actionsColumnIndex: -1,
            minBodyHeight: 300,
            maxBodyHeight: 300,
          }}
        />
      </Card>
      <Card elevation={10} mt={3}>
        <CardHeader title="New task" />
        <CardContent>
          <Grid container>
            <Grid item xs={2} style={{ maxHeight: 300, overflow: "auto" }}>
              <MaterialTable
                columns={[{ title: "User name", field: "username" }]}
                data={new Array(10).fill("").map((val, idx) => {
                  return { id: idx, username: "shin" };
                })}
                onRowClick={(evt, selectedRow) =>
                  setSelectedRow(selectedRow.tableData.id)
                }
                options={{
                  showTitle: false,
                  search: false,
                  paging: false,
                  toolbar: false,
                  actionsColumnIndex: -1,
                  minBodyHeight: 300,
                  maxBodyHeight: 300,
                  rowStyle: (rowData) => ({
                    backgroundColor:
                      selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
                  }),
                }}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                fullWidth
                id="filled-multiline-static"
                multiline
                rows={20}
                label="Task Description goes here..."
                variant="filled"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="flex-end">
            <Button variant="contained" color="primary">
              Send
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Container>
  );
};
export default connectStore()(Task);
