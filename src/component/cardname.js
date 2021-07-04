import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
const useStyles = makeStyles({
  card: {
    width: "300px",
    color: "white"
  }
});
function CardName({ cardName, onName }) {
  function handleChange(event) {
    //const newName = event.target.value;
    //setName(newName.toUpperCase());
    onName(event.target.value.toUpperCase());

    //console.log(name);
  }
  const classes = useStyles();
  return (
    <div className="user-name">
      <p> Kart Üzerindeki İsim</p>
      <TextField
        size="small"
        className={classes.card}
        variant="outlined"
        onChange={handleChange}
        value={cardName}
        inputProps={{
          maxLength: 16,
          type: "text",
          pattern: "d*",
          className: "c-number"
        }}
      ></TextField>
    </div>
  );
}

export default CardName;
