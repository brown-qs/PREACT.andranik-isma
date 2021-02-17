import { FunctionalComponent, h, Fragment } from "preact";
import PopularTags from "../components/SearchPanel";
import ArticlePreview from "../components/ArticlePreview";
import { useEffect, useState } from "preact/hooks";
import Pagination from "../components/Pagination";
import { getCurrentUrl, route } from "preact-router";
import Container from "@material-ui/core/Container";
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
import { Button, Card, Grid, TextField } from "../components/StyledMui";
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
import Switch from "@material-ui/core/Switch";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { PERMISSION_MENU } from "../constants";

interface AdministrationProps {}

const Administration: FunctionalComponent<AdministrationProps> = (props) => {
  const { user } = props;
  const theme = useTheme();
  const [selectedUser, setSelectedUser] = useState({} as any);

  useEffect(() => {
    if (!user) route("/login");
  }, [user]);

  useEffect(() => {
    !props.hasUsersLoaded && props.loadUsers();
  }, []);

  console.log(props.users);
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <MaterialTable
              columns={[
                {
                  title: "User name",
                  field: "userName",
                  headerStyle: {
                    backgroundColor: theme.palette.primary.main,
                  },
                },
              ]}
              data={props.users}
              onRowClick={(evt, selectedRow) => {
                setSelectedUser({
                  ...selectedRow,
                  rePassword: selectedRow.password,
                });
              }}
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
                    selectedUser.id === rowData.id ? "#EEE" : "#FFF",
                }),
              }}
            />
            <Grid mt={3} container justify="space-between">
              <Grid item>
                <Button variant="outlined">Remove User</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Load Users</Button>
              </Grid>
            </Grid>
            <Grid mt={1} container justify="space-between">
              <Grid item>
                <Button variant="outlined">Add User</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Show Users {">>"}</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Card elevation={10}>
              <CardHeader
                title="User Information"
                action={
                  <Tooltip title="Save User">
                    <IconButton aria-label="settings" color="primary">
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>
                }
              />
              <CardContent>
                <Grid container spacing={6}>
                  <Grid item xs={4}>
                    <TextField
                      mt={2}
                      label="User Name:"
                      fullWidth
                      value={selectedUser.userName ?? ''}
                      onChange={(e) => {
                        setSelectedUser({ userName: e.target.value });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Password:"
                      fullWidth
                      value={selectedUser.password ?? ''}
                      onChange={(e) => {
                        setSelectedUser({ password: e.target.value });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Re. Password:"
                      fullWidth
                      value={selectedUser.rePassword ?? ''}
                      onChange={(e) => {
                        setSelectedUser({ rePassword: e.target.value });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="First Name:"
                      fullWidth
                      value={selectedUser.fName ?? ''}
                      onChange={(e) => {
                        setSelectedUser({ fName: e.target.value });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Last Name:"
                      fullWidth
                      value={selectedUser.lName ?? ''}
                      onChange={(e) => {
                        setSelectedUser({ lName: e.target.value });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Middle Name:"
                      fullWidth
                      value={selectedUser.mName ?? ''}
                      onChange={(e) => {
                        setSelectedUser({ mName: e.target.value });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="E-Mail:"
                      fullWidth
                      value={selectedUser.email ?? ''}
                      onChange={(e) => {
                        setSelectedUser({ email: e.target.value });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Phone:"
                      fullWidth
                      value={selectedUser.phone ?? ''}
                      onChange={(e) => {
                        setSelectedUser({ phone: e.target.value });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Cell Phone:"
                      fullWidth
                      value={selectedUser.cPhone ?? ''}
                      onChange={(e) => {
                        setSelectedUser({ cPhone: e.target.value });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Address:"
                      fullWidth
                      value={selectedUser.address ?? ''}
                      onChange={(e) => {
                        setSelectedUser({ address: e.target.value });
                      }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <MaterialTable
                      title="Permissions"
                      columns={[
                        { title: "Name", field: "name" },
                        {
                          title: "Perm",
                          field: "perm",
                          render: (rowData) => (
                            <Switch color="primary" value={true} />
                          ),
                        },
                        {
                          title: "R/W",
                          field: "r_w",
                          render: (rowData) => (
                            <Switch color="primary" value={true} />
                          ),
                        },
                      ]}
                      data={PERMISSION_MENU.map((per) => {
                        return {
                          name: per,
                        };
                      })}
                      options={{
                        paging: false,
                        actionsColumnIndex: -1,
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};
export default connectStore()(Administration);
