import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '80px 0 0 0',
        backgroundColor: '#1B242F'
    },

    iconsAnchor: {
        margin: '15px'
    },

    icons: {
        fontSize: '29px',
        fontWeight: '400px',
        color: 'white',
        '&:hover': {
            color: '#10ABB0',
        },
    },

    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backToTopButton: {
        alignSelf: 'flex-end',
        borderRadius: '0px',
        width: '50px',
        padding: '10px',
        margin: '10px',
        border: 'none',
        backgroundColor: '#E95E04',
        cursor: 'pointer',
    },

    copyIconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    copyRightTypo: {
        color: 'white',
        textAlign: 'center',
        flexGrow: 1,
        marginLeft: '70px'
    }
}));

    // <--- START scroll to top function ---> //
    function scrollToTop() {
        scroll.scrollToTop();
    }
    // <--- END scroll to top function ---> //

const Footer = () => {
    const classes = useStyles();
    const { t } = useTranslation(['footer']);  // i18n component

    return (
        <>
            <footer>
                <div className={classes.footerContainer}>
                    <div className={classes.iconsContainer}>
                        <a className={classes.iconsAnchor} href='https://www.linkedin.com/in/kenechukwu-albert-okoye/'>
                            <i className={classNames('fa fa-linkedin', classes.icons)}></i>
                        </a>
                        <a className={classes.iconsAnchor} href='https://github.com/Kene-Okoye/'>
                            <i className={classNames('fa fa-github', classes.icons)}></i>
                        </a>
                        <a className={classes.iconsAnchor} href='http://skype.com'>
                            <i className={classNames('fa fa-skype', classes.icons)}></i>
                        </a>
                    </div>
                    <div className={classes.copyIconContainer}>
                        <Typography variant='caption' className={classes.copyRightTypo}>© {new Date().getFullYear()} {t('footer:copy-right')}</Typography>
                        <button className={classes.backToTopButton} onClick={scrollToTop}>
                            <i style={{fontSize: '25px', color: 'white'}} class="fas fa-arrow-up"></i>
                        </button>
                    </div>
                    
                </div>
            </footer>
            
        </>
    )
}

export default Footer;
