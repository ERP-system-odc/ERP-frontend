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

export const Journal = () => {
  const [num, setNum]=useState(0)
  const [value, setValue] = useState(dayjs("2022-11-08").toJSON());
  const [journal, setJournal] = useState([
    {
      id: 1,
      created_at: "2022-11-07T10:07:00.071Z",
      account: "ASSET(Inventory:wood)",
      debit: 2200,
      credit: 0,
    },
    {
      id: 2,
      created_at: "2022-11-07T10:07:00.080Z",
      account: "LIABILITY(Cash)",
      debit: 0,
      credit: 2200,
    },
    {
      id: 3,
      created_at: "2022-11-07T10:07:26.573Z",
      account: "ASSET(Inventory:frame)",
      debit: 1010,
      credit: 0,
    },
    {
      id: 4,
      created_at: "2022-11-07T10:07:26.582Z",
      account: "LIABILITY(Cash)",
      debit: 0,
      credit: 1010,
    },
    {
      id: 5,
      created_at: "2022-11-07T10:07:55.909Z",
      account: "ASSET(Inventory:joint)",
      debit: 410,
      credit: 0,
    },
    {
      id: 6,
      created_at: "2022-11-07T10:07:55.917Z",
      account: "LIABILITY(Cash)",
      debit: 0,
      credit: 410,
    },
    {
      id: 7,
      created_at: "2022-11-07T10:09:25.341Z",
      account: "ASSET(Inventory:varnish)",
      debit: 1020,
      credit: 0,
    },
    {
      id: 8,
      created_at: "2022-11-07T10:09:25.347Z",
      account: "LIABILITY(Cash)",
      debit: 0,
      credit: 1020,
    },
    {
      id: 9,
      created_at: "2022-11-07T10:11:37.148Z",
      account: "ASSET(taxi)",
      debit: 50,
      credit: 0,
    },
    {
      id: 10,
      created_at: "2022-11-07T10:11:37.155Z",
      account: "LIABILITY(Cash)",
      debit: 0,
      credit: 50,
    },
    {
      id: 11,
      created_at: "2022-11-07T10:11:56.094Z",
      account: "ASSET(labour)",
      debit: 100,
      credit: 0,
    },
    {
      id: 12,
      created_at: "2022-11-07T10:11:56.106Z",
      account: "LIABILITY(Cash)",
      debit: 0,
      credit: 100,
    },
    {
      id: 25,
      created_at: "2022-11-07T11:20:27.792Z",
      account: "ASSET(Inventory:tool)",
      debit: 605,
      credit: 0,
    },
    {
      id: 26,
      created_at: "2022-11-07T11:20:27.801Z",
      account: "LIABILITY(Cash)",
      debit: 0,
      credit: 605,
    },
    {
      id: 27,
      created_at: "2022-11-07T11:20:59.998Z",
      account: "ASSET(labour)",
      debit: 40,
      credit: 0,
    },
    {
      id: 28,
      created_at: "2022-11-07T11:21:00.011Z",
      account: "LIABILITY(Cash)",
      debit: 0,
      credit: 40,
    },
  ]);
  const [toggle, setToggle] = useState(false);
  const [z, setZ]=useState(value)
  //const a=value.toString().substring(0, 10);
  const entry= [
    {
      id: 1,
      created_at: "2022-11-07T10:07:00.071Z",
      account: "ASSET(Inventory:wood)",
      debit: 2200,
      credit: 0,
    }
  ];
  const [kutr, setKutr]=useState([])
  
  
  const handleChange = (e) => {
    e.preventDefault()
    
    console.log(value);
    const a = value.toString().substring(0, 10);
    setZ(value.toString().substring(0, 10));
    //console.log(a);
    const val = { journal_entry_date: z };
    const z = JSON.stringify(val, null, 2);
    console.log(JSON.stringify(val, null, 2));

    setToggle(true);
    console.log(toggle);
    setNum(++num)
    console.log(num)
  //  console.log(entry);
  Router.push({
    pathname: '/journal/data',
    query: {
       tip : a
     },
}) 
  };
  // console.log(value)
  return (
    <div>
       <Card>
        <Box sx={{ minWidth: 950, padding:3}}>
          Please add the date to see the Journal Entry
        </Box>
      </Card>

      <Divider sx={{ padding:1}}/>
     
      <form onSubmit={handleChange} >
        <DesktopDatePicker
          label="Input the date"
          inputFormat="yyyy-MM-dd"
          value={value}
          type="date"
          onChange={(e) => setValue(dayjs(e).toJSON())}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button type="submit">Add</Button>
      </form>
     
    </div>
  );
};
