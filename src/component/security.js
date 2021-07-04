import React from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "100px",
    color: "white"
  }
});
function Security({ securityCode, onSecurity, flipped, onsetFlip }) {
  function handleSecurity(event) {
    onSecurity(event.target.value);
  }
  const classes = useStyles();
  return (
    <div className="CVV">
      <p>Güvenlik Kodu </p>
      <TextField
        size="small"
        className={classes.card}
        variant="outlined"
        onClick={() => onsetFlip(!flipped)}
        onChange={handleSecurity}
        value={securityCode}
        placeholder="---"
        inputProps={{
          maxLength: 3,
          type: "text",
          pattern: "d*",
          className: "c-number"
        }}
      />
    </div>
  );
}
export default Security;
