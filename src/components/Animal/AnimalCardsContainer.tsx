import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { getAllanimals } from "../../routes/animalDataRoutes";
import AnimalOverviewCard from "./AnimalOverviewCard";
import AnimalDetailedDisplay from "./AnimalDetailedDataDisplay";
import { makeStyles } from '@material-ui/core/styles';
import forestView from '../../images/europeslostf.jpeg'

const useStyles = makeStyles({
    container: {
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${forestView})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    animalCardsContainer: {
        height: '600px',
        overflow: 'auto',
        marginTop: '200px',
        padding: '10px',
        backgroundColor: 'whitesmoke',
    },
    animalDetailedViewContainer: {
        height: '625px',
        overflow: 'auto',
        marginTop: '200px',
        backgroundColor: 'whitesmoke',
    }
  });


const AnimalCardsContainer = () => {
    const classes = useStyles();
    const [animalsData, setAnimalsData] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState({        
        name: '',
        status: '',
        latin_name: '',
        description: '',
        image_url: '',});

    useEffect(() => {
        getAllanimals()
        .then((res) => setAnimalsData(res.data.data))
        .catch((err) => console.error(err))
    }, []);

    //on initial render, select the first animal
    useEffect(()  => {
        if (animalsData && animalsData.length > 0 && !selectedAnimal.name) {
            setSelectedAnimal(animalsData[0]);
        }
    }, [animalsData, selectedAnimal]);

    console.log(animalsData, 'here');

    return (
        <Box className={classes.container}>
            <Grid container justify="center">
                <Grid item xs={5}>
                    <Box className={classes.animalCardsContainer}>
                    {animalsData && animalsData.length > 0 && animalsData.map((animal) => (
                        <AnimalOverviewCard selected={animal.name === selectedAnimal.name} animal={animal} setSelectedAnimal={setSelectedAnimal} />
                    ))}
                    </Box>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={5}>
                    <Box className={classes.animalDetailedViewContainer}>
                        <AnimalDetailedDisplay selectedAnimal={selectedAnimal} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AnimalCardsContainer;