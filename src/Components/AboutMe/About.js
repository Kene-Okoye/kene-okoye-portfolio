import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button } from '@material-ui/core';
import Techstack from './TechStack';
import profileImage from '../../Assets/Images/kene1_7.jpg';
import Fade from 'react-reveal/Fade';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    wrapper: {
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            flexDirection: 'column',
            paddingTop: '80px',
            margin: 'auto',
        },

        aboutTypo: {
            fontFamily: 'Raleway, sans-serif',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: '#252525',
            textAlign: 'center',
        },
        
        divider: {
            border: '0px',
            width: '110px',
            height: '4px',
            backgroundColor: '#252525',
            margin: '10px 0 40px 0',
        },

        aboutMe: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            flexWrap: 'wrap',
        },

        image: {
            padding: '30px 0 32px 0',
            width: '30%',
            height: '30%',
            borderRadius: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '30%',
                height: '30%',
            },
            [theme.breakpoints.down('xs')]: {
                width: '50%',
                height: '50%',
            }
        },
        buttonAnchor: {
            color: 'black',
            textDecoration: 'none',
            '&:hover': {
                backgroundColor: '#000000',
                color: 'white'
            }
        },
        downloadButton: {
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 'bold',
            paddingLeft: theme.spacing(2),
            backgroundColor: 'transparent',
            borderRadius: '0px',
            border: '3px solid #000000',
            '&:hover': {
                backgroundColor: '#000000',
                color: 'white'
            }
        },
}));

const About = () => {
    const classes = useStyles()
    const { t } = useTranslation(['about']);  // i18n component

    return (
        <>
                <div className={classes.wrapper} id='about-me'>                
                    <Fade left>
                        <Typography className={classes.aboutTypo} variant='h4'>{t('about:title')}</Typography>
                    </Fade>
                    <Fade right><Divider class={classes.divider}></Divider></Fade>
                        <Typography style={{fontFamily: 'Raleway, sans-serif', textAlign: 'center', width: '50%', padding: '30px 20px 0 2px'}} variant='body1'>
                            {t('about:mission-statement')}
                        </Typography>

                    <div className={classes.aboutMe}>
                        <img src={profileImage} alt={'Kene Okoye'} className={classes.image}/>
                        <a href='https://kene-okoye-resume.netlify.app/' className={classes.buttonAnchor}>    
                            <Button 
                            disableRipple='true' variant="contained" className={classes.downloadButton}>
                            {t('about:resume')}<VisibilityIcon fontSize='medium' style={{paddingLeft: '10px'}} />
                            </Button>
                        </a>
                    </div>

                    <Techstack/>
            </div>
            
        </>
    )
}

export default About;
