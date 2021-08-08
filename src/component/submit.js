import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "orange",
    color: "white",
    cursor: "pointer",
    marginTop: 10,
    "&:hover": {
      backgroundColor: "darkorange"
    }
  }
});
function Submit() {
  const classes = useStyles();
  return (
    <div className="submit">
      <Button
        onClick={() => document.location.reload(true)}
        className={classes.btn}
      >
        Submit
      </Button>
    </div>
  );
}
export default Submit;
