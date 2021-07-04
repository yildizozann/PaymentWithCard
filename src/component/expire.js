import React, { useState } from "react";
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
    height: "40px"
  }
});
const optionsMonth = [
  { value: "01", label: "01" },
  { value: "02", label: "02" },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
  { value: "05", label: "05" },
  { value: "06", label: "06" },
  { value: "07", label: "07" },
  { value: "08", label: "08" },
  { value: "09", label: "09" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" }
];
const optionsYear = [
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" }
];

function Expire(props) {
  const [expire, setExpire] = useState({
    month: "",
    year: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    // setExpire({...expire,month:value})
    //if (name === "expireMM") setExpire({ ...expire, month: value });
    //if (name === "expireYY") setExpire({ ...expire, year: value });

    setExpire((prevValue) => {
      if (name === "expireMM") {
        return {
          month: value,
          year: prevValue.year
        };
      } else if (name === "expireYY") {
        return {
          month: prevValue.month,
          year: value
        };
      }
    });
  }

  props.onExpire(expire);
  const classes = useStyles();
  return (
    <div className="expire-date">
      <p> Son Kullanma Tarihi</p>
      <FormControl variant="outlined">
        <InputLabel>Month</InputLabel>
        <Select
          defaultValue=""
          name="expireMM"
          className={classes.select}
          onChange={handleChange}
          label="Month"
        >
          {optionsMonth.map(({ value, label }, index) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel>Year</InputLabel>
        <Select
          defaultValue=""
          className={classes.select}
          name="expireYY"
          onChange={handleChange}
          label="Year"
        >
          {optionsYear.map(({ value, label }, index) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Expire;
