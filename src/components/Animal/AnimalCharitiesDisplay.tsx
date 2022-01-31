import React, { useState } from "react";
import { Box, Button, Popper, 
    Paper, Link, ClickAwayListener, CircularProgress } from "@material-ui/core";
import { getMatchingCharities } from "../../routes/animalDataRoutes";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paperCharitiesList: {
      border: '1px solid black',
      padding: '10px',
      height: '400px',
      overflow: 'auto',
      minWidth: '400px',
    },
    paperLinkContainer: {
        border: '1px solid green',
        marginBottom: '10px',
        padding: '15px',
        textAlign: 'center',
    },
    viewCharitiesButton: {
        border: '1px solid rgba(0, 0, 0, 0.7)',
    },
    circularProgress: {
        display: 'block',
        margin: '35% auto',
    }
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
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const findCharities = (animalName: string) => {
        setMatchingCharities([])
        getMatchingCharities(animalName)
        .then((res) => {
            const charities = res.data.data;
            charities.sort((a : CharitiesProps, b: CharitiesProps) => a.charityName.localeCompare(b.charityName))
            setMatchingCharities(charities);
        })
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
                <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                    <Box>
                        <Button 
                        onClick={(e) => {
                            handleClick(e)
                            findCharities(name)
                        }} 
                        className={classes.viewCharitiesButton}
                        variant="contained"
                        color="primary"
                        >
                            Find Ranked Charities To Help
                        </Button>
                        <Popper id={id} open={open} anchorEl={anchorEl}>
                            <Paper className={classes.paperCharitiesList} elevation={2}>
                                {matchingCharities && matchingCharities.length > 0 ? matchingCharities.map((charity: CharitiesProps) => (
                                    <Paper elevation={1} className={classes.paperLinkContainer}>
                                        <Link 
                                            target="blank"
                                            color="primary"
                                            underline="always"
                                            align="center" 
                                            href={charity.charityNavigatorURL}>
                                                {charity.charityName}
                                        </Link>
                                    </Paper>
                                )) : (
                                    <CircularProgress className={classes.circularProgress} size={100} />
                                )}                            
                            </Paper>
                        </Popper>
                    </Box>
                </ClickAwayListener>
                   
    )
}

export default AnimalCharitiesDisplay;