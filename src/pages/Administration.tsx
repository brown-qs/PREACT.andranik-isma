import { FunctionalComponent, h, Fragment } from "preact";
import PopularTags from "../components/SearchPanel";
import { useEffect, useState } from "preact/hooks";
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
import { User } from "../types/User";

interface AdministrationProps {}

const Administration: FunctionalComponent<AdministrationProps> = (props) => {
  const { user } = props;
  const theme = useTheme();
  const [selectedUser, setSelectedUser] = useState(new User());
  const [changed, setChanged] = useState(false);
  const [select, setSelect] = useState(false);

  useEffect(() => {
    if (!user) route("/login");
  }, [user]);

  useEffect(() => {
    !props.hasUsersLoaded && props.loadUsers();
  }, []);

  useEffect(() => {
    setChanged(!select);
    setSelect(false);
  }, [selectedUser]);

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
                setSelect(true);
                setSelectedUser({
                  ...selectedUser,
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
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              mt={3}
              onClick={(e) => {
                setSelectedUser(new User());
              }}
            >
              Add User
            </Button>
          </Grid>
          <Grid item xs={9}>
            <Card elevation={10}>
              <CardHeader
                title="User Information"
                action={
                  <Fragment>
                    <Tooltip title="Save User">
                      <IconButton
                        aria-label="settings"
                        color="primary"
                        disabled={!changed}
                        onClick={(e) => {
                          if (selectedUser.userName == "")
                            alert("Username empty.");
                          else if (
                            selectedUser.password != selectedUser.rePassword
                          ) {
                            alert("Passwords are not match");
                          } else {
                            props.saveUserInfo(selectedUser);
                            setSelectedUser(new User());
                          }
                        }}
                      >
                        <SaveIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Remove User">
                      <IconButton
                        disabled={selectedUser.id == 0}
                        aria-label="remove"
                        color="secondary"
                        onClick={(e) => {
                          props.deleteUser(selectedUser.id);
                          setSelectedUser(new User());
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Fragment>
                }
              />
              <CardContent>
                <Grid container spacing={6}>
                  <Grid item xs={4}>
                    <TextField
                      mt={2}
                      label="User Name:"
                      fullWidth
                      defaultValue={selectedUser.userName ?? ""}
                      onBlur={(e) => {
                        setSelectedUser({
                          ...selectedUser,
                          userName: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Password:"
                      fullWidth
                      type="password"
                      value={selectedUser.password ?? ""}
                      onBlur={(e) => {
                        setSelectedUser({
                          ...selectedUser,
                          password: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Re. Password:"
                      fullWidth
                      type="password"
                      value={selectedUser.rePassword ?? ""}
                      onBlur={(e) => {
                        setSelectedUser({
                          ...selectedUser,
                          rePassword: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="First Name:"
                      fullWidth
                      value={selectedUser.fName ?? ""}
                      onBlur={(e) => {
                        setSelectedUser({
                          ...selectedUser,
                          fName: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Last Name:"
                      fullWidth
                      value={selectedUser.lName ?? ""}
                      onBlur={(e) => {
                        setSelectedUser({
                          ...selectedUser,
                          lName: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Middle Name:"
                      fullWidth
                      value={selectedUser.mName ?? ""}
                      onBlur={(e) => {
                        setSelectedUser({
                          ...selectedUser,
                          mName: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="E-Mail:"
                      fullWidth
                      value={selectedUser.email ?? ""}
                      onBlur={(e) => {
                        setSelectedUser({
                          ...selectedUser,
                          email: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Phone:"
                      fullWidth
                      value={selectedUser.phone ?? ""}
                      onBlur={(e) => {
                        setSelectedUser({
                          ...selectedUser,
                          phone: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Cell Phone:"
                      fullWidth
                      value={selectedUser.cPhone ?? ""}
                      onBlur={(e) => {
                        setSelectedUser({
                          ...selectedUser,
                          cPhone: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      mt={2}
                      label="Address:"
                      fullWidth
                      value={selectedUser.address ?? ""}
                      onBlur={(e) => {
                        setSelectedUser({
                          ...selectedUser,
                          address: e.target.value,
                        });
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
                          render: (rowData) => {
                            let mask = 1 << rowData.id;
                            return (
                              <Switch
                                color="primary"
                                checked={(selectedUser.permission & mask) != 0}
                                onChange={(e) => {
                                  setSelectedUser({
                                    ...selectedUser,
                                    permission: selectedUser.permission ^= mask,
                                  });
                                }}
                              />
                            );
                          },
                        },
                        {
                          title: "R/W",
                          field: "r_w",
                          render: (rowData) => {
                            let mask = 1 << rowData.id;
                            return (
                              <Switch
                                color="primary"
                                checked={
                                  (selectedUser.rwPermission & mask) != 0
                                }
                                onChange={(e) => {
                                  setSelectedUser({
                                    ...selectedUser,
                                    rwPermission: selectedUser.rwPermission ^= mask,
                                  });
                                }}
                              />
                            );
                          },
                        },
                      ]}
                      data={PERMISSION_MENU.map((per, id) => {
                        return {
                          id: id,
                          name: per,
                        };
                      }).filter((one) => one.name != "")}
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
