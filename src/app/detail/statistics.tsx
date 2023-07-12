"use client";

import {
    Grid,
    Button,
    Typography,
    Stack,
    CircularProgress,
    Modal,
    Box
  } from "@mui/material";
  import React, { useState, useEffect } from "react";
  import {
    Tooltip, ResponsiveContainer, XAxis, YAxis,
    LineChart, Line, CartesianGrid, BarChart, Bar, Legend
  } from "recharts";
  import RegionsPieChart from "./statistics-pie-chart";
  
  interface GraphData {
    name: string;
    value: number;
    articlesIDs: string;
  }
  
  function generateGraphData(name: string, value: number, articlesIDs: string): GraphData {
    return { name, value, articlesIDs };
  }
  
  function getGraphData(
    dataNames: string[],
    dataValues: number[],
    articlesIDs: string[],
    sort: boolean
  ): GraphData[] {
    let result: GraphData[] = [];
  
    for (let i = 0; i < dataNames.length; i += 1) {
      result.push(generateGraphData(dataNames[i], dataValues[i], articlesIDs[i]));
    }
  
    if (sort) {
      const sortedData = result.slice().sort((a, b) => b.value - a.value);
      result = sortedData.slice(0, 7);
    }
  
    return result;
  }
  
  interface DatesGraphData {
    month: string;
    value: string;
  }
  
  function generateDatesGraphData(month: string, value: string): DatesGraphData {
    return { month, value };
  }
  
  function getDatesGraphData(dataNames: string[], dataValues: string[]): DatesGraphData[] {
    const result: DatesGraphData[] = [];
  
    for (let i = 0; i < dataNames.length; i += 1) {
      result.push(generateDatesGraphData(dataNames[i], dataValues[i]));
    }
  
    return result;
  }
  
  type regionsType = {
    [key: string]: string
  }
  
  const regionMap:regionsType = {
    Slovakia: "sk",
    "United States": "us",
    "Great Britan": "gb",
    Bulgaria: "bg",
    "Czech Republic": "cz",
    France: "fr",
    Belgium: "be",
    Germany: "de",
    Austria: "at",
    Switzerland: "ch",
    Greece: "gr",
    Netherlands: "nl",
    Hungary: "hu",
    Italy: "it",
    Latvia: "lv",
    Lithuania: "lt",
    Poland: "pl",
    Portugal: "pt",
    Romania: "ro",
    Slovenia: "sl",
    Ukraine: "ua"
  };
  
  function mapRegions(regionsKeys: string[]): any {
    // e.g. selectedRegions=['Slovakia', 'United States', 'Great Britan']
    const regions = regionsKeys.map((regionCode) => {
      const regionName = Object.keys(regionMap).find((key) => regionMap[key] === regionCode);
      return regionName;
    });
  
    return regions;
  }
  
  export default function Statistics() {
    const [topCrimes, setTopCrimes] = useState({} as any);
    const [regions, setRegions] = useState([] as any);
    const [articlesDates, setArticlesDates] = useState([] as any);
    const [mostArticlesYear, setMostArticlesYear] = useState("");
    const [totalResults, setTotalResuls] = useState(0);
    const [articlesCount, setArticlesCount] = useState(0);
    const [query, setQuery] = useState("" as any);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    interface StatsData {
      statsArticlesCount: number;
      statsQuery: string;
      searchFrom: string;
      searchTo: string;
      stats: any;
      statsTotalResults: number;
      status: number;
      ok: boolean;
    }
    function generateStatsData(
      statsArticlesCount: number,
      statsQuery: string,
      searchFrom: string,
      searchTo: string,
      stats: any,
      statsTotalResults: number,
      status: number,
      ok: boolean
    ): StatsData {
      return {
        statsArticlesCount, statsQuery, searchFrom, searchTo, stats, statsTotalResults, status, ok
      };
    }
    function getStatsData(resultValues: string[]): StatsData[] {
      const result: StatsData[] = [];
  
      result.push(generateStatsData(
        Number(resultValues[0]),
        resultValues[1],
        resultValues[2],
        resultValues[3],
        resultValues[4],
        Number(resultValues[5]),
        Number(resultValues[6]),
        (/true/i).test(resultValues[7])
      ));
  
      return result;
    }
  
    let numberOfTopCrimes;
    if (topCrimes.length < 7) {
      numberOfTopCrimes = topCrimes.length;
    } else { numberOfTopCrimes = 7; }
  
    const statsText = "statistics for: ";
    const resultsText = "total articles found: ";
    const statsResultsText = `statistics generated from ${articlesCount} articles`;
  
    const crimesGraphTitle = "top crimes";
    const regionsGraphTitle = "regions";
    const datesGraphTitle = "articles in time";
  
    const topCrimesGraphText1 = `We found the top ${numberOfTopCrimes} crimes ${query} was linked to. This person is most associated with the crime of `;
    const topCrimesGraphText2 = `. We found exactly ${topCrimes[0]?.value} articles related to this crime and ${query}.`;
    const regionsGraphText1 = `Most articles about ${query} were published in `;
    const regionsGraphText2 = `. More specifically, we found ${regions[0]?.value} articles about the searched person, that were published in this country.`;
    const datesGraphText = `On the line graph above we can see how articles about ${query} were published during the given time period. From this graph, we can see that most articles about the searched person were published in `;
  
    const data = {
      regions
    };
      return (
        <div className="main">
          <Grid item container justifyContent="center" spacing={1}>
            <Grid
              item
              xs="auto"
            >
              <Typography
                sx={{
                  marginTop: 2,
                  marginBottom: { xs: 0, md: 2 },
                  fontSize: 30,
                  fontWeight: 500
                }}
                color="primary"
              >
                {statsText}
              </Typography>
            </Grid>
            <Grid
              item
              xs="auto"
            >
              <Typography
                sx={{
                  marginTop: { xs: 0, md: 2 },
                  marginBottom: 2,
                  fontSize: 30,
                  fontWeight: 500
                }}
                color="secondary"
              >
                {query}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent="center" spacing={0} direction="column" style={{ textAlign: "center" }} xs="auto">
            <Grid
              item
              xs="auto"
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 200
                }}
                color="secondary"
              >
                {resultsText}
                {totalResults}
              </Typography>
            </Grid>
            <Grid
              item
              xs="auto"
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 200,
                  marginBottom: 4
                }}
                color="secondary"
              >
                {statsResultsText}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1} marginBottom={1} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Grid
              item
              xs={12}
              md={6}
              order={{ xs: 2, md: 1 }}
              sx={{ marginLeft: { xs: -2, md: 0 } }}
            >
              <ResponsiveContainer className="topCrimesChart" width="99%" height={270}>
                <BarChart
                  width={300}
                  height={200}
                  data={topCrimes}
                  layout="vertical"
                  margin={{
                    top: 5, bottom: 5, left: 50
                  }}
                  style={{ fontSize: 12 }}
                >
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="number of found articles" fill="#7163B4" />
                </BarChart>
              </ResponsiveContainer>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{ marginLeft: { xs: 0, md: 5 } }}
              marginBottom={3}
              order={{ xs: 1, md: 2 }}
            >
              <Typography color="primary" sx={{ marginTop: { xs: 2, md: 4 } }} fontSize={25}>
                {crimesGraphTitle}
              </Typography>
              <Typography marginTop={1} color="secondary" display="inline">
                {topCrimesGraphText1}
              </Typography>
              <Typography color="primary" display="inline">
                {topCrimes[0]?.name.toLowerCase()}
              </Typography>
              <Typography color="secondary" display="inline">
                {topCrimesGraphText2}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            sx={{
              textAlign: { xs: "center", md: "right" }
            }}
          >
            <Grid item xs={12} md={4}>
              <Typography sx={{ marginTop: { xs: 4, md: 7 } }} color="primary" fontSize={25}>
                {regionsGraphTitle}
              </Typography>
              <Typography marginTop={1} color="secondary" display="inline">
                {regionsGraphText1}
              </Typography>
              <Typography color="primary" display="inline">
                {regions[0]?.name}
              </Typography>
              <Typography color="secondary" display="inline">
                {regionsGraphText2}
              </Typography>
            </Grid>
            <Grid item xs={12} md={7} marginLeft={2}>
              <RegionsPieChart data={data} />
            </Grid>
          </Grid>
          <Grid container spacing={1} justifyContent="center" style={{ textAlign: "center" }}>
            <Grid
              item
              xs={12}
              order={{ xs: 2, md: 1 }}
              sx={{ marginTop: { xs: 0, md: 3 }, marginLeft: { xs: -4, md: 0 } }}
            >
              <ResponsiveContainer width="99%" height={180}>
                <LineChart
                  width={500}
                  height={200}
                  data={articlesDates}
                  margin={{
                    top: 2
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line connectNulls type="monotone" dataKey="value" name="number of found articles" stroke="#9D4993" fill="#9D4993" />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={12} md={8} style={{ textAlign: "center" }} marginBottom={5} order={{ xs: 1, md: 2 }}>
              <Typography sx={{ marginTop: { xs: 0, md: 2 } }} color="primary" fontSize={25}>
                {datesGraphTitle}
              </Typography>
              <Typography marginTop={1} color="secondary" display="inline">
                {datesGraphText}
              </Typography>
              <Typography color="primary" display="inline">
                {mostArticlesYear.slice(0, 4)}
              </Typography>
              <Typography color="secondary" display="inline">
                .
              </Typography>
            </Grid>
          </Grid>
        </div>
      );
    }

  