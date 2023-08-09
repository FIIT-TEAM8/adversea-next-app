"use client"
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import * as amplitudeBrowser from '@amplitude/analytics-browser';

type Props = {
  defaultValue: string;
}

export default function SearchField({ defaultValue }: Props) {
  const [value, setValue] = useState("");
  const router = useRouter();
  const url = value ? `/search?name=${value}` : "/search";

  useEffect(() => {
    setValue(defaultValue);

    amplitudeBrowser.init(`b181d79c58a74eb6447f5ebe1e4485f7`);
    amplitudeBrowser.track('Page View');
  }, [defaultValue])

  const onTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  }

  const keyPress = (event: React.KeyboardEvent) => {
    
    if (event.key === "Enter") { //press enter
      router.push(url);
    }
  }

  return (
    <div className="flex justify-center search-field-rounded-r-none">
      <TextField value={value} label="Search" variant="outlined" className="search-bar" fullWidth onChange={onTextChange} onKeyDown={keyPress} />
      <Button variant="outlined" className="rounded-l-none" href={url}>Search</Button>
    </div>
  );
}