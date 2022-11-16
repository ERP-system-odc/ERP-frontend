import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import Router from 'next/router'

import {
  Divider,
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Button
} from "@mui/material";

export const IncomeStatement = () => {
  const [num, setNum]=useState(0)
  const [value, setValue] = useState(dayjs("2022-11-08").toJSON());
  const [value1, setValue1] = useState(dayjs("2022-11-10").toJSON());
 
  const [toggle, setToggle] = useState(false);
  const a=value.toString().substring(0, 10);
  const b=value1.toString().substring(0, 10);
  
  const [kutr, setKutr]=useState([])
  
  const handleChange = (e) => {
    e.preventDefault()
    
    console.log(value);
    const a = value.toString().substring(0, 10);
    console.log(a);
    const val = { journal_entry_date: a };
    const z = JSON.stringify(val, null, 2);
    console.log(JSON.stringify(val, null, 2));

    setToggle(true);
    console.log(toggle);
    setNum(++num)
    console.log(num)
  //  console.log(entry);
  Router.push({
    pathname: '/incomeStatement/data',
    query: {
       tip : a,
       tip1 : b
     },
}) 
  };
  // console.log(value)
  return (
    <div>
       <Card>
        <Box sx={{ minWidth: 950, padding:3}}>
          Please add the date to see the IncomeStatement
        </Box>
      </Card>

      <Divider sx={{ padding:1}}/>
     
      <form onSubmit={handleChange} >
        <DesktopDatePicker
          label="Input the initial date"
          inputFormat="yyyy-MM-dd"
          value={value}
          type="date"
          onChange={(e) => setValue(dayjs(e).toJSON())}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="Input the last date"
          inputFormat="yyyy-MM-dd"
          value={value1}
          type="date"
          onChange={(e) => setValue1(dayjs(e).toJSON())}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button type="submit">Add</Button>
      </form>
     
    </div>
  );
};
