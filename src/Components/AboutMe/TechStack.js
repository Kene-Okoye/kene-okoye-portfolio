import React from 'react';
import { Grid, Typography, Icon, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

/************************************************************************************/
                    // START Tech-stack STYLES //
/************************************************************************************/

const useStyles = makeStyles((theme) => ({

    techStackContainer: {
        marginTop: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 0 50px 0',
    },

    iconsDiv: {
        margin: 'auto',
        // marginTop: theme.spacing(3),
        width: '80px', height: '80px',
    },

    icons: {
        color: '#252525',
        padding: '10px 0px 10px 0px',
        height: '50px',
        width: '50px', 
        fontSize: '40px', 
        textAlign: 'center',
        margin: '10px 0 0 0',
    },

    divider: {
        width: '30px',
        height: '4px',
        backgroundColor: '#10ABB0',
        margin: 'auto',
        marginTop: '10px'
    },

    card: {
        background: '#F6F6F6',
        height: '300px',
        width: '300px',
        borderBottom: '4px solid #10ABB0',
    },

    cardTypo: {
        fontFamily: 'Raleway, sans-serif',
        padding: '50px 0 10px 0',
        textAlign: 'center',
        fontWeight: '10px', 
    },

    typoSpan: {
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 'bold',
    }
}))


/************************************************************************************/
                    // END Tech.stack STYLES //
/************************************************************************************/

const TechStack = ({match}) => {
    const classes = useStyles();
    const { t } = useTranslation(['about']);  // i18n component

    const myTechStack = [
        {
            id: 1,
            category: 'about:tech-frontend',
            icon: 'fas fa-desktop',
            languages_practices: 'about:tech-languages',
            language_PracticeList: 'HTML, CSS, JavaScript, ReactJS',
            tools: 'about:tech-tools',
            tooList: 'GitHUB, Material UI, Particles.js, Bootstrap, React Spring, Figma, Netlify'
        },
        {
            id: 2,
            category: 'about:tech-backend',
            icon: 'fas fa-database',
            languages_practices: 'about:tech-languages',
            language_PracticeList: 'NodeJs, NoSQL, SQL',
            tools: 'about:tech-tools',
            tooList: 'Express, MongoDB, PostgreSQL, GitHUB, Heroku'
        },
        {
            id: 3,
            category: 'about:tech-project',
            icon: 'fas fa-sitemap',
            languages_practices: 'about:practices',
            language_PracticeList: 'Agile, SCRUM',
            tools: 'about:tech-tools',
            tooList: 'Trello, Slack, Discord'
        }
    ]

return (
    <>
        <Grid container spacing={4} className={classes.techStackContainer}>
            {myTechStack && myTechStack.map(tech => {
                    return (
                    <>
                        <Grid item className={classes.techStackContainer} >
                            <Card elevation={0}  className={classes.card}>
                                <div className={classes.iconsDiv}>
                                    <Icon className={classNames(`${tech.icon}`, classes.icons)} />
                                    <div class={classes.divider}></div>
                                </div>
                                <Typography variant='h6' className={classes.cardTypo}>{t(tech.category)}</Typography>
                                <Typography variant='body2' align='center'>
                                    <span className={classes.typoSpan}>{t(tech.languages_practices)}</span><br/>{tech.language_PracticeList}
                                </Typography>
                                <Typography variant='body2' style={{padding: '15px 25px', margin: 'auto'}}>
                                    <span className={classes.typoSpan}>{t(tech.tools)}</span><br/>{tech.tooList}
                                </Typography>              
                            </Card>
                        </Grid>
                    </>)
                })}
            </Grid>
    </>
    )
}

export default TechStack;
