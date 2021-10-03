import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@material-ui/core";
import { getAllanimals } from "../../routes/animalDataRoutes";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";

const useStyles = makeStyles({
    overviewBox: {
      height: '100px',
      border: '1px solid green',
      borderRadius: "10%",
      cursor: "pointer",
      padding: '5px',
      marginBottom: '5px',
    },
    animalStatus: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
    },
    selected: {
        backgroundColor: 'grey',
        border: '5px solid green',
    },
  });

interface AnimalOverviewCardProps {
    animal: {
        name: string,
        status: string,
        latin_name: string,
        description: string,
        image_url: string,
    },
    setSelectedAnimal: Function,
    selected: boolean,
}

const AnimalOverviewCard = ({ animal, setSelectedAnimal, selected }: AnimalOverviewCardProps) => {
    const classes = useStyles();
    const { name, status, latin_name } = animal;

    console.log(name);

    return (
            <Paper 
            className={clsx({
                [classes.overviewBox]: true,
                [classes.selected]: selected,
            })} 
            onClick={() => setSelectedAnimal(animal)}>
                <Typography variant="h6" align="center">{name}</Typography>
                <Typography className={classes.animalStatus} variant="h6" align="center">{status}</Typography>
                <Typography align="center">{latin_name}</Typography>
            </Paper>
    )
}

export default AnimalOverviewCard;