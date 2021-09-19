import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { getAllanimals } from "../../routes/animalDataRoutes";
import { makeStyles } from '@material-ui/core/styles';
import placeholderImage from "../../images/large-group-african-safari-animals-wildlife-conservation-concept-174172993.jpeg"

const useStyles = makeStyles({
    overviewBox: {
      border: '1px solid black',
      width: '90%',
    },
    image: {
        width: '150px',
        height: '150px',
        border: '1px solid black'
    },
    animalStatus: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
    },
  });

interface AnimalDetailedProps {
    selectedAnimal: {
        name: string,
        status: string,
        latin_name: string,
        description: string,
        image_url: string,
    },
}

const AnimalDetailedDisplay = ({ selectedAnimal }: AnimalDetailedProps) => {
    const classes = useStyles();
    const { name, status, latin_name, image_url, description } = selectedAnimal;

    console.log(name);

    return (
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">{name}</Typography>
                    <Typography className={classes.animalStatus} align="center">{status}</Typography>
                    <Typography align="center">{latin_name}</Typography>
                    <img className={classes.image} src={image_url === 'none' ? placeholderImage : image_url} alt="animal" />
                    {description ? (
                    <Typography>{description}</Typography>
                    ) : (
                        <Typography align="center">No Description Found</Typography>
                    )}
                </Grid>
            </Grid>
    )
}

export default AnimalDetailedDisplay;