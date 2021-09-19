import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { getAllanimals } from "../../routes/animalDataRoutes";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    overviewBox: {
      height: '100px',
      border: '1px solid black',
      width: '90',
      cursor: "pointer",
    },
    animalStatus: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
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
}

const AnimalOverviewCard = ({ animal, setSelectedAnimal }: AnimalOverviewCardProps) => {
    const classes = useStyles();
    const { name, status, latin_name } = animal;

    console.log(name);

    return (
        <Box className={classes.overviewBox} onClick={() => setSelectedAnimal(animal)}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">{name}</Typography>
                    <Typography className={classes.animalStatus} variant="h6" align="center">{status}</Typography>
                    <Typography align="center">{latin_name}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AnimalOverviewCard;