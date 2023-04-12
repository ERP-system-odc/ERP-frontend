import { useState, useEffect } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import Router from "next/router";

import {
  Divider,
  Avatar,
  Box,
  Card,
  Button,
} from "@mui/material";

export const IncomeStatement = () => {
  const [value, setValue] = useState(dayjs("2023-01-13").toJSON());
  const [value1, setValue1] = useState(dayjs("2023-04-13").toJSON());

  const handleChange = (e) => {
    e.preventDefault();
    const a = value.toString().substring(0, 10);
    const b = value1.toString().substring(0, 10);

    Router.push({
      pathname: `/incomeStatement/${a}`,
      query: {
        to: b,
      },
    });
  };

  return (
    <div>
      <Card>
        <Box sx={{ minWidth: 950, padding: 3 }}>
          Please add the date to see the IncomeStatement
        </Box>
      </Card>

      <Divider sx={{ padding: 1 }} />

      <form onSubmit={handleChange}>
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
        <Button type="submit">See Income Statement</Button>
      </form>
    </div>
  );
};
