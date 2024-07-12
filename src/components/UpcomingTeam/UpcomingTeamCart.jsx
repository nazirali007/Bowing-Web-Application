import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HorizontalNavbar from "../Sidebar/HorizontalNavbar";

const UpcomingTeamCart = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div>
      <HorizontalNavbar />
      {/* <VerticalSidebar /> */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                MUI
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
              >
                Breadcrumbs
              </Link>
            </Breadcrumbs>
          </div>
          ;
        </CardActions>
        /
      </Card>
    </div>
  );
};

export default UpcomingTeamCart;

// import * as React from "react";
