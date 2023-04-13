import { useState, useEffect } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import Router from "next/router";

import { Divider, Box, Card, Button } from "@mui/material";

export const Journal = () => {
  const [value, setValue] = useState(dayjs("2023-04-13").toJSON());

  const handleChange = (e) => {
    e.preventDefault();
    const a = value.toString().substring(0, 10);

    Router.push({
      pathname: `/journal/${a}`,
    });
  };

  return (
    <div>
      <Card>
        <Box sx={{ minWidth: 950, padding: 3 }}>
          Please add the date to see the Journal Entry
        </Box>
      </Card>

      <Divider sx={{ padding: 1 }} />

      <form onSubmit={handleChange}>
        <DesktopDatePicker
          label="Input the date"
          inputFormat="yyyy-MM-dd"
          value={value}
          type="date"
          onChange={(e) => setValue(dayjs(e).toJSON())}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button type="submit">See the Journal</Button>
      </form>
    </div>
  );
};
