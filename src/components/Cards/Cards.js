import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chips from "../Chips/Chips";

import GradeIcon from "@material-ui/icons/Grade";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 12,
    color: "white",
    [theme.breakpoints.up("md")]: {
      padding: 150,
    },
  },
  rating: {
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      padding: 3,
    },
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 20,
    },
  },
  pos: {
    maxWidth: 700,
    marginBottom: 12,
  },
}));

const Cards = ({ data }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ backgroundColor: "rgba(60, 60, 60, 0)" }}
      elevation={0}
    >
      <CardContent>
        {/* 
        <Chips item={data[page].genre_ids} />
        <p>{data[page].release_date}</p> */}
        <div style={{ display: "flex" }}>
          <GradeIcon style={{ color: "#FFD700" }} />
          <Typography className={classes.rating}>
            {data.vote_average}
          </Typography>
        </div>
        <Chips data={data.genre_ids} />
        <Typography className={classes.title} variant="h2" component="h2">
          {data.title}{" "}
          {data.title !== data.original_title && `(${data.original_title})`}
        </Typography>
        <Typography className={classes.pos} variant="body2" component="p">
          {data.overview}
        </Typography>
        <Typography className={classes.pos} variant="h6" component="h1">
          Release : {data.release_date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color: "white" }}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;