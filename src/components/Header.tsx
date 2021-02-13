import { createRef, Fragment, FunctionalComponent, h } from "preact";
import { Link, route } from "preact-router";
import connectStore from "../store/connect";
import { useState } from "preact/hooks";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import MenuBookItem from "@material-ui/icons/MenuBook";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Match from "preact-router/match";
import { forwardRef } from "preact/compat";
import TableChartIcon from "@material-ui/icons/TableChart";
import TranslateIcon from "@material-ui/icons/Translate";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import GridOnIcon from "@material-ui/icons/GridOn";
import HelpIcon from "@material-ui/icons/Help";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { MenuBook } from "@material-ui/icons";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Tooltip } from "@material-ui/core";

const Header: FunctionalComponent = (props) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const actions = [
    { value: "/", href: "/", label: "Knowledge Base", icon: <MenuBookItem /> },
    {
      value: "/deformations",
      href: "/deformations",
      label: "Deformations",
      icon: <TableChartIcon />,
    },
    {
      value: "/syntax",
      href: "/syntax",
      label: "Syntax",
      icon: <SpellcheckIcon />,
    },
    {
      value: "/matrix",
      href: "/matrix",
      label: "Matrix",
      icon: <GridOnIcon />,
    },
    { value: "/help", href: "/help", label: "Help", icon: <HelpIcon /> },
    { value: "/task", href: "/task", label: "Task", icon: <AssignmentIcon /> },
    {
      value: "/translator",
      href: "/translator",
      label: "Translator",
      icon: <TranslateIcon />,
    },
    {
      value: "/user_info",
      href: "/user_info",
      label: "User Info",
      icon: <AccountCircleIcon />,
    },
    {
      value: "/administration",
      href: "/administration",
      label: "Administration",
      icon: <SettingsIcon />,
    },
  ];

  return props.user ? (
    <Match path="/">
      {({ matches, path, url }) => {
        return (
          <Fragment>
            <AppBar position="sticky">
              <BottomNavigation value={url}>
                {actions.map((action) => (
                  <BottomNavigationAction
                    value={action.value}
                    href={action.href}
                    label={action.label}
                    icon={action.icon}
                  />
                ))}
              </BottomNavigation>
            </AppBar>
            <Box style={{ backgroundColor: theme.palette.primary.main }} mb={5}>
              <Container>
                <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                    <Typography
                      variant="h1"
                      style={{
                        color: "white",
                        fontFamily: "titillium web,sans-serif",
                        textShadow: "0 1px 3px rgb(0 0 0 / 30%)",
                      }}
                      gutterBottom
                    >
                      {((_) => {
                        let tab = actions.find((action) => action.href == url);
                        return tab ? tab.label : "";
                      })()}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Log out">
                      <IconButton
                        style={{ color: "white" }}
                        onClick={(_) => props.updateUser()}
                      >
                        <MeetingRoomIcon fontSize="large" />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Fragment>
        );
      }}
    </Match>
  ) : (
    <Fragment />
  );
};

export default connectStore()(Header);
