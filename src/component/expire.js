import React from "react";
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
const useStyles = makeStyles({
  select: {
    minWidth: 100,
    height: 40,
    marginRight: 5
  }
});

const optMonth = Array.from({ length: 12 }).map((_, index) => {
  return {
    value: `${index + 1 < 10 ? "0" : ""}${index + 1}`,
    label: `${index + 1 < 10 ? "0" : ""}${index + 1}`
  };
});

const optYear = Array.from({ length: 12 }).map((_, index) => {
  return {
    value: `${index + 1 < 10 ? "0" : ""}${index + 1}`,
    label: `${index + 1 < 10 ? "0" : ""}${index + 1}`
  };
});

function Expire({ expire, handleSetExpire }) {
  const classes = useStyles();
  return (
    <div className="expire-date">
      <p> Son Kullanma Tarihi</p>
      <FormControl size="small" variant="outlined">
        <InputLabel>Month</InputLabel>
        <Select
          defaultValue=""
          name="expireMM"
          className={classes.select}
          onChange={handleSetExpire}
        >
          {optMonth.map(({ value, label }, index) => (
            <MenuItem key={index} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl size="small" variant="outlined">
        <InputLabel>Year</InputLabel>
        <Select
          defaultValue=""
          className={classes.select}
          name="expireYY"
          onChange={handleSetExpire}
        >
          {optYear.map(({ value, label }, index) => (
            <MenuItem key={index} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Expire;
