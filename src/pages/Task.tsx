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
import Link from '@material-ui/core/Link'
import { useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
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
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

interface TaskProps {}

const Task: FunctionalComponent<TaskProps> = (props) => {
  const { user } = props;
  const theme = useTheme();
  const [sendUser, setSendUser] = useState(null);
  const [inout, setInout] = useState("inbox");
  const [editTask, setEditTask] = useState(false);
  const [editingTask, setEditingTask] = useState({});
  const [editingIndex, setEditingIndex] = useState(0);
  const [taskDesc, setTaskDesc] = useState("");

  useEffect(() => {
    if (!user) route("/login");
  }, [user]);

  useEffect(() => {
    !props.hasTaskLoaded && props.loadTasks();
    !props.hasUsersLoaded && props.loadUsers();
  }, []);

  return (
    <Container maxWidth="lg">
      <Dialog
        open={editTask}
        onClose={() => setEditTask(false)}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Task Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            multiline
            fullWidth
            value={editingTask.task}
            onBlur={(e) =>
              setEditingTask({ ...editingTask, task: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditTask(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              props.saveUserTask({
                id: editingIndex,
                task: editingTask,
                inout,
              });
              setEditTask(false);
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <MaterialTable
        title={
          <FormControl>
            <InputLabel>Tasks</InputLabel>
            <Select
              value={inout}
              onChange={(e) => {
                setInout(e.target.value);
              }}
            >
              <MenuItem value="inbox">Inbox</MenuItem>
              <MenuItem value="outbox">Outbox</MenuItem>
            </Select>
          </FormControl>
        }
        actions={[
          {
            icon: "refresh",
            iconProps: { style: { color: theme.palette.primary.main } },
            isFreeAction: true,
            tooltip: "Refresh",
            onClick: (event, rowData) => {
              props.loadTasks();
            },
          },
          {
            icon: "delete",
            iconProps: { style: { color: theme.palette.secondary.main } },
            tooltip: "Remove Task",
            onClick: (event, rows) => {
              props.removeUserTasks({ rows, inout });
              props[inout].forEach((d) => {
                if (d.tableData) d.tableData.checked = false;
              });
            },
          },
        ]}
        columns={[
          {
            title: "User name",
            field: "userName",
            cellStyle: { width: "10%" },
          },
          {
            title: "Date",
            field: "taskDate",
            cellStyle: { width: "10%" },
          },
          { title: "Time", field: "taskTime", cellStyle: { width: "10%" } },
          {
            title: "Task",
            field: "task",
            cellStyle: { width: "70%" },
            headerStyle: { textAlign: "center" },
            render: (rowData) => {
              return (
                <Link
                  component="button"
                  onClick={(_) => {
                    setEditingIndex(rowData.tableData.id);
                    setEditingTask(rowData);
                    setEditTask(true);
                  }}
                >
                  {rowData.task.substring(0, 70) +
                    (rowData.task.length > 70 ? "..." : "")}
                </Link>
              );
            },
          },
        ]}
        data={props[inout]}
        options={{
          paging: false,
          selection: true,
          actionsColumnIndex: -1,
          minBodyHeight: 800,
          maxBodyHeight: 800,
        }}
      />
      <Card elevation={10} mt={3}>
        <CardHeader
          title="New task"
          action={
            <Tooltip title="Save Task">
              <IconButton
                aria-label="save task"
                color="primary"
                onClick={(_) => {
                  if (sendUser == null) {
                    alert("Please Select User.");
                    return;
                  }
                  if (taskDesc == "") {
                    alert("Please Input Task Description");
                    return;
                  }
                  props.newUserTask({
                    id: props.users[sendUser].id,
                    task: taskDesc,
                  });
                }}
              >
                <SendIcon />
              </IconButton>
            </Tooltip>
          }
        />
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={2}>
              <MaterialTable
                columns={[{ title: "User name", field: "userName" }]}
                data={props.users}
                onRowClick={(evt, selectedRow) =>
                  setSendUser(selectedRow.tableData.id)
                }
                options={{
                  showTitle: false,
                  search: false,
                  paging: false,
                  toolbar: false,
                  actionsColumnIndex: -1,
                  minBodyHeight: 500,
                  maxBodyHeight: 500,
                  rowStyle: (rowData) => ({
                    backgroundColor:
                      sendUser === rowData.tableData.id ? "#EEE" : "#FFF",
                  }),
                }}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                fullWidth
                id="filled-multiline-static"
                multiline
                rows={24}
                label="Task Description goes here..."
                variant="filled"
                value={taskDesc}
                onBlur={(e) => setTaskDesc(e.target.value)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
export default connectStore()(Task);
