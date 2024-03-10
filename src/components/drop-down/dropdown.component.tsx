import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const noteCatagories = ["All Catagories", "To Do"];

export default function DropDown(): JSX.Element {
  const [noteCatagory, setNoteCatagory] = useState<string[]>([]);

  useEffect(() => {
    console.warn("useeffect", noteCatagory);
  }, []);

  const handleChange = (event: SelectChangeEvent<typeof noteCatagory>) => {
    const {
      target: { value },
    } = event;
    setNoteCatagory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Name</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={noteCatagory}
        onChange={handleChange}
        input={<OutlinedInput />}
      >
        {noteCatagories.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
