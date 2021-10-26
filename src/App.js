import React from "react";
import { CssBaseline, AppBar, Typography, Grid } from "@material-ui/core";
import Budget from "./components/Budget";
import Expenditure from "./components/Expenditure";
import Remainder from "./components/Remainder";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Typography variant="h4" color="white" align="center">
          Budget Tracker
        </Typography>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Budget />
        </Grid>
        <Grid item xs={12} md={4}>
          <Expenditure />
        </Grid>
        <Grid item xs={12} md={4}>
          <Remainder />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <ExpenseList />
        </Grid>
        <Grid item xs={12}>
          <ExpenseItem />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
