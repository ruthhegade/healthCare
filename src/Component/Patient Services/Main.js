import React from "react";
import { Grid } from "@mui/material";
import Search from "./Select";
import { Container } from "@mui/system";
import Add from "./add";

function Main() {
  return (
    <div>

      <Container>
        <Grid container direction="row mt-6">
          <div className=" lg:text-xl text-center flex ">Patient Name</div>
          <div className="mr-10">
            <Search />
          </div>
          <Add />
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
