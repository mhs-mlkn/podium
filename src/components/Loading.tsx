import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <CircularProgress />
      </Grid>
    </Grid>
    // <Grid container direction="column" justify="center" alignItems="center">
    //   <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    //     <CircularProgress />
    //   </Grid>
    // </Grid>
  );
};

export default Loading;
