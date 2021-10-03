import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button, Popper, Popover, Paper, Link } from "@material-ui/core";
import { getMatchingCharities } from "../../routes/animalDataRoutes";
import { makeStyles } from '@material-ui/core/styles';
import placeholderImage from "../../images/large-group-african-safari-animals-wildlife-conservation-concept-174172993.jpeg"

const useStyles = makeStyles({
    overviewBox: {
      border: '1px solid black',
      padding: '10px',
    },
  });

interface CharitiesProps {
        charityName: string,
        charityNavigatorURL: string,
        irsClassification: object,
        organization: object,
}

const AnimalCharitiesDisplay = ({ name } : {name: string}) => {
    const classes = useStyles();

    const [matchingCharities, setMatchingCharities] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const findCharities = (animalName: string) => {
        getMatchingCharities(animalName)
        .then((res) => setMatchingCharities(res.data.data))
        .catch((err) => {
            setMatchingCharities([])
            console.error(err)
        });
    }
  
    const open = Boolean(anchorEl);
    console.log(open, 'open');
    const id = open ? 'simple-popper' : undefined;

    console.log(matchingCharities, 'matching');

    return (
                    <Box>
                        <Button onClick={(e) => {
                            handleClick(e)
                            findCharities(name)
                        }} color="primary" variant="outlined">Find Ranked Charities To Help</Button>
                        <Popover id={id} open={open} anchorEl={anchorEl}>
                            <Paper className={classes.overviewBox} elevation={2}>
                                {matchingCharities && matchingCharities.length > 0 && matchingCharities.map((charity: CharitiesProps) => (
                                    <div>
                                        <Typography align="center" variant="subtitle1">{charity.charityName}</Typography>
                                        <Link align="center" href={charity.charityNavigatorURL}>Visit on Charity Navigator</Link>
                                    </div>
                                ))}                            
                            </Paper>
                        </Popover>
                    </Box>
    )
}

export default AnimalCharitiesDisplay;