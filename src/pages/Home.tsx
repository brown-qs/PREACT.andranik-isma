import { FunctionalComponent, h, Fragment } from "preact";
import SearchPanel from "../components/SearchPanel";
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
import connectStore from "../store/connect";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
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
import { Card, Chip, Button } from "../components/StyledMui";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SearchIcon from "@material-ui/icons/Search";
import { currentWordData } from "../utils/redux-getters";
import Badge from "@material-ui/core/Badge";

interface HomeProps {}

const Home: FunctionalComponent<HomeProps> = (props) => {
  const { user } = props;
  const [tab, setTab] = useState("syn");
  const [modalIdOpen, setModalIdOpen] = useState(false);

  useEffect(() => {
    if (!user) route("/login");
  }, [user]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={11}>
          {props.words.map((word, index) => (
            <Chip
              mr={1}
              key={index}
              label={word.word}
              color={props.currentWord == word.id ? "primary" : "default"}
              onClick={() => {
                props.setCurrentWord(word.id);
              }}
              onDelete={() => {
                props.removeWord(word.id);
              }}
            />
          ))}
        </Grid>
        <Grid item xs={1}>
          <IconButton
            color={props.currentWord ? "default" : "primary"}
            onClick={() => {
              props.setCurrentWord(null);
            }}
          >
            <Badge badgeContent={props.searchResults.length} color="secondary">
              <SearchIcon style={{ fontSize: 40, fontWeight: 700 }} />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>

      {props.currentWord ? (
        <Card elevation={10} mt={5}>
          <CardHeader
            action={
              <Fragment>
                <Tooltip title="Save">
                    <IconButton
                      aria-label="save"
                      color="primary"
                      disabled={currentWordData(props).mask == 0}
                      onClick={(e) => props.saveCurrentConcept()}
                    >
                      <SaveIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Test">
                  <IconButton aria-label="test">
                    <AssignmentTurnedInIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="New Concept">
                  <IconButton aria-label="new">
                    <CreateIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Concept">
                  <IconButton aria-label="delete" color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Show ID">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => {
                      setModalIdOpen(true);
                    }}
                  >
                    ID
                  </Button>
                </Tooltip>
                <Dialog
                  open={modalIdOpen}
                  onClose={() => {
                    setModalIdOpen(false);
                  }}
                >
                  <DialogContent>
                    The Current Concept Id is {props.currentWord >> 16}_
                    {props.currentWord & 65535}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setModalIdOpen(false)}>OK</Button>
                  </DialogActions>
                </Dialog>
              </Fragment>
            }
            title={currentWordData(props).word}
            subheader="Edit things"
          />
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={(e, newVal) => {
              setTab(newVal);
            }}
            aria-label="disabled tabs example"
            scrollButtons="on"
            variant="fullWidth"
          >
            <Tab label={"Synonym"} value={"syn"} />
            <Tab label={"Semantic"} value={"sema"} />
            <Tab label={"Programs"} value={"prog"} />
            <Tab label={"Desription"} value={"desc"} />
            <Tab label={"Definitions"} value={"def"} />
          </Tabs>
          {tab == "syn" && <WordSynonym />}
          {tab == "sema" && <WordSemantic />}
          {tab == "prog" && <WordPrograms />}
          {tab == "desc" && <WordDescription />}
          {tab == "def" && <WordDefinition />}
          {/*<Pagination count={articlesCount} page={page} setPage={setPage} /> */}
        </Card>
      ) : (
        <SearchPanel />
      )}
    </Container>
  );
};
export default connectStore()(Home);
