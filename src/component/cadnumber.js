import React from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "300px",
    color: "white"
  }
});
function CardNumber({ onNumber, cardNumber }) {
  const classes = useStyles();
  function handleChange(event) {
    onNumber(event.target.value);
    //setNumber(newNumber);
    //console.log(name);
  }
  const placeHolder = `_ _ _ _    _ _ _ _    _ _ _ _    _ _ _ _`;

  return (
    <div>
      <p> Kart Numarası</p>
      <TextField
        size="small"
        className={classes.card}
        variant="outlined"
        onChange={handleChange}
        value={cardNumber}
        placeholder={placeHolder}
        inputProps={{
          maxLength: 16,
          type: "text",
          pattern: "d*",
          className: "c-number"
        }}
      />
    </div>
  );
}

export default CardNumber;
