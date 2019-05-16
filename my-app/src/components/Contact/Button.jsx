import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

function ButtonSend(props) {
  let submit = () => {
    console.log(contact);
  };
  const { classes,contact } = props;
  return (
    <div>
      <Button variant="outlined" className={classes.button} onClick = {submit}>
       Send
      </Button>
    </div>
  );
}

ButtonSend.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSend);