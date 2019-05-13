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
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" className={classes.button}>
       Send
      </Button>
    </div>
  );
}

ButtonSend.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSend);