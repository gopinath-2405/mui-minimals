import React, { ChangeEvent, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CountrySelection from "./CountrySelection";
import Card from "@mui/material/Card";
import { Button, Switch } from "@mui/material";
import CardContent from "@mui/material/CardContent";

function UserCreateCard() {
   const [number , setNumber] = useState<string>('');

   const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    if (/^[0-9]*$/.test(value)) {
      setNumber(value);
    }
   }

  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <Card>
          <CardContent>
            <Switch  />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
        <Card>
          <CardContent >
            <Grid container spacing={2} >
              <Grid item xs={6}>
                <TextField
                  id="full-name"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email"
                  label="Email address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone-number"
                  label="Phone number"
                  variant="outlined"
                  value={number}
                  onChange={handleNumber}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                  <CountrySelection  />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="state-region"
                  label="State/Region"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="zip-code"
                  label="Zip/Code"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="company"
                  label="Company"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="role"
                  label="Role"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: "2%", display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" sx={{ backgroundColor: "black" }}>
                  Create user
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UserCreateCard;
