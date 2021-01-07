import React from 'react';
import { Typography, Card, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import pokemonFight from '../../../Assets/Images/pokemon-fight_1.png';
import meineEinkaufsListe from '../../../Assets/Images/meine-einkaufsliste.png';
import transporex from '../../../Assets/Images/transporex-1.png';
import './FlipCard.css';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '0px 0 80px 0',
        [theme.breakpoints.down('xs')]: {
            padding: '0',
            paddingBottom: '100px',
        }
    },

    projectContainer: {
        display: 'flex',
        marginTop: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '15px',
        padding: '0 0 20px 0',
        [theme.breakpoints.down('xs')]: {
            margin: '0px',
            padding: '0px'
        }
    },

    card: {
        margin: 'auto',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background: '#F6F6F6',
        height: '300px',
        width: '460px',
        borderBottom: '4px solid #10ABB0',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:' no-repeat',
        borderRadius: '0px',
        [theme.breakpoints.down('xs')]: {
            height: '200px',
            width: '300px',
        }
    },

    backContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonAnchor: {
        color: 'black',
        textDecoration: 'none'
    },

    learnMoreButton: {
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 'bold',
        marginTop: theme.spacing(4),
        paddingLeft: theme.spacing(2),
        backgroundColor: 'transparent',
        margin: '20px',
        borderRadius: '0px',
        border: '3px solid white',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black'
        }
    },

    typo: {
        fontFamily: 'Raleway, sans-serif',
    },

    inProductionTypo: {
        boxShadow: 'rgba(0, 0, 0, 0.4)',
        fontFamily: 'Raleway, sans-serif',
        border: '4px solid #ff7d00',
        borderRadius: '5px',
        padding: '10px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
}))

const FlipCard = () => {
    const classes = useStyles();
    const { t } = useTranslation(['projects']);  // i18n component

    // <--- START - JSX items list ---> //

    const flipCardItems = [
        {
            'cardTitle': 'Pokemon Fight',
            'imageURL': pokemonFight,
            'stack': 'ReactJS, Material UI, React Spring, NodeJS &',
            'stack-continued': 'MonogoDB',
            'learnMoreButton': 'projects:learn-more',
            'link': 'https://pokemon-fight-teheke.netlify.app/',
        },
        {
            'cardTitle': 'Meine EinkaufsListe',
            'imageURL': meineEinkaufsListe,
            'stack': 'HTML, CSS & Vanilla Javascript',
            'learnMoreButton': 'projects:learn-more',
            'link': 'https://kene-okoye.github.io/Meine-EInkaufsliste-main/',
        },
        {
            'cardTitle': 'Transporex',
            'imageURL': transporex,
            'stack': 'ReactJS, Material UI, Postgress & ElephantSQL',
            'learnMoreButton': 'projects:learn-more',
            'link': 'https://transporex.netlify.app/',
        },
    ];
    
    // <--- END - JSX items list ---> //


    return (
        <>
            <div className={classes.wrapper}>
                {
                    flipCardItems.map(flipCardItem => {
                        return (
                            
                                <div className={classNames("flip-card", classes.projectContainer)}>
                                    <div className={classNames("flip-card-inner", classes.projectContainer)}>
                                        <Card style={{backgroundImage: `url(${flipCardItem.imageURL})`}} elevation={8} className={classNames("flip-card-front", classes.card)}>
                                        </Card>
                                        <div className={classNames("flip-card-back", classes.backContent)}>
                                            <Typography className={classes.typo}>{flipCardItem.cardTitle}</Typography> 
                                            <Typography className={classes.typo}>{flipCardItem.stack}<br/>{flipCardItem['stack-continued']}</Typography>
                                            <a className={classes.buttonAnchor} href={flipCardItem.link}><Button disableRipple='true' variant="contained" color='secondary' className={classes.learnMoreButton}>
                                                {t(flipCardItem.learnMoreButton)}
                                                </Button>
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FlipCard;
