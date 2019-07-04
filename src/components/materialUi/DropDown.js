import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import {setPaperTopic} from "../../actions/statusActions"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function DropDown({dispatch}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    topics: "",
    name: "hai"
  });
  
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    dispatch(setPaperTopic(event.target.value))
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Topics
        </InputLabel>
        <Select
          value={values.topics}
          onChange={handleChange}
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="topics"
              id="outlined-age-simple"
            />
          }
        >
          <MenuItem value="New">New</MenuItem>
          <MenuItem value="Newest">Newest</MenuItem>
          <MenuItem value="Ask">Ask</MenuItem>
          <MenuItem value="Show">Show</MenuItem>
          <MenuItem value="Jobs">Jobs</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
const mapStateToProps = state => {
 
  return {
    paperTopic: state.apiStatusReducer.paperTopic
  };
};
export default connect(mapStateToProps)(DropDown);
