import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import picstagram from "./images/picstagram.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  return (
    <Container maxwitdh="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Picstagram
        </Typography>
        <img src={picstagram} alt="memories" height="60" width="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
