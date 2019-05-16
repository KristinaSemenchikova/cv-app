import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "./Button";

const styles = theme => ({
  container: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class TextFields extends React.Component {
  state = {
    name: "",
    subject: "",
    email: "",
    message: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="standard-required"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
        />
        <TextField
          required
          id="standard-required"
          label="Email"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange("email")}
        />

        <TextField
          id="standard-multiline-flexible"
          label="Subject"
          multiline
          rowsMax="5"
          value={this.state.subject}
          onChange={this.handleChange("subject")}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="standard-required"
          label="Please,write your message"
          placeholder="Please,write your message"
          multiline
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange("message")}
        />
        <Button contact = {this.state}/>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
