import { createRef, FunctionalComponent, h } from "preact";
import { Link, route } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import connectStore from "../store/connect";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { PersonalVideo } from "@material-ui/icons";
import logo from '../../public/images/logo.jpg'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        ISMA Web Editor
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const classes = useStyles();

  const formRef = createRef<HTMLFormElement>();
  const { user, errors } = props;
  const [form, setForm] = useState({
    userName: "",
    password: "",
    defLang: "0",
  });

  const onLogin = async (event: Event) => {
    event.preventDefault();
    props.login(form);
  };

  // route to home page after user logged
  useEffect(() => {
    if (user) route("/");
  }, [user]);

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={onLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User name"
              name="username"
              autoComplete="username"
              autoFocus
              error={props.errors != ''}
              value={form.userName}
              onChange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  userName: e.currentTarget.value,
                }));
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={props.errors}
              error={props.errors != ''}
              value={form.password}
              onChange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  password: e.currentTarget.value,
                }));
              }}
            />
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
              value={form.defLang}
              onChange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  defLang: e.currentTarget.value,
                }));
              }}
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="Armenian"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="English"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="Western Armenian"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="Russian"
                labelPlacement="bottom"
              />
            </RadioGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default connectStore()(SignIn);
