import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { useForm } from 'react-hook-form';  // <--- import npm package to easily manage form actions ---> //
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252934',
        paddingTop: theme.spacing(5),
        margin: 'auto'
    },

    contactTypo: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    questionTypo: {
        color: '#10ABB0',
        textAlign: 'center',
        marginLeft: '25px',
        [theme.breakpoints.down('sm')]: {
            margin: '20px',
        }
    },

    divider: {
        border: '0px',
        width: '110px',
        height: '4px',
        backgroundColor: '#fff',
        margin: '10px 0 40px 0'
    },

    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto',
        marginTop: '40px',
        marginBottom: '80px',
        width: '500px',
        height: '300px',
        [theme.breakpoints.down('xs')]: {
            width: '250px',
            height: '300px',
        }
    },

    input: {
        margin: 'auto',
        padding: '10px 0px 10px 10px',
        fontFamily: 'Raleway, sans-serif',
        width: '100%',
        marginBottom: '8px',
        backgroundColor: '#1E242C',
        color: 'white',
        border: 'none'
    },

    textArea: {
        fontFamily: 'Raleway, sans-serif',
        padding: '10px 0px 10px 10px',
        backgroundColor: '#1E242C',
        color: 'white',
        width: '100%',
        height: '100%',
        marginBottom: '8px',
        margin: 'auto',
        border: 'none',
    },

    submitButton: {
        cursor: 'pointer',
        alignSelf: 'flex-end',
        padding: '10px 15px',
        marginRight: '-10px',
        color: 'white',
        fontFamily: 'Raleway, sans-serif',
        backgroundColor: 'transparent',
        borderRadius: '0px',
        border: '2px solid white',
        '&:hover': {
            backgroundColor: '#10ABB0',
            color: 'white',
            border: 'none'
        },
    },
}))

const Contact = () => {
    const classes = useStyles();
    const { t } = useTranslation(['contact']);  // i18n component

    // <--- START - Email JS onSubmit and Feedback finction ---> //
    const { register, handleSubmit, errors } = useForm();  // <--- deconstruction of the necessary props ---> //

    const onSubmit = (data, reset) => {
        alert(`Thank you for your message from ${data.email}`);
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const serviceID = process.env.REACT_APP_SERVICE_ID;
        console.log({ from_name: data.name, message: data.comment, reply_to: data.email })
        sendFeedback(serviceID, templateId, { from_name: data.name, message: data.comment, reply_to: data.email })
        reset.target.reset();
    }

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }
    // <--- END - Email JS onSubmit and Feedback finction ---> //

    const nameError = `${t('contact:name-error-placeholder')}`;


    return (
        <>
            <section  style={{background:'#252934'}}>
                <svg preserveAspectRatio='none' viewBox='0 0 100 102' height='75' width='100%' version='1.1' 
                    xmlns="http://www.w3.org/2000/svg" className='svgcolor-light'>
                        <path d='M0 0 L50 100 L100 0 Z' fill='white' stroke='white'></path>
                </svg>
                <div id='contact' className={classes.wrapper}>

                    <Fade left><Typography className={classes.contactTypo} variant='h4'>{t('contact:contact-title')}</Typography></Fade>
                    <Fade right><Divider class={classes.divider}></Divider></Fade>
                    <Typography className={classes.questionTypo} variant='body1'>
                        {t('contact:get-in-touch')}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            className={classes.input}
                            type="text" 
                            id="enter-name" 
                            name="name" 
                            placeholder= {t('contact:enter-name-placeholder')}
                            ref={register({ // <--- Add the (required & maxLength) validations as objects to the form register ---> //
                                required: `${t('contact:name-error-placeholder')}`,
                                maxLength: {
                                    value: 20,
                                    message: `${t('contact:name-error-placeholder')}` // <--- Add your error message to display to the user ---> //
                                },
                                
                            })}
                        />
                        <Typography gutterBottom style={{color: '#726F6E'}} variant='caption'>{errors.name && errors.name.message}</Typography>

                        <input
                            className={classes.input} 
                            type="email" 
                            id="enter-email" 
                            name="email" 
                            placeholder= {t('contact:enter-email-placeholder')}
                            ref={register({ // <--- Add the (required & pattern - using RegEx) validations as objects to the form register ---> //
                                required: `${t('contact:email-error-placeholder')}`,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: `${t('contact:email-error-placeholder')}` // <--- Add your error message to display to the user ---> //
                            })}
                        />
                        <Typography gutterBottom style={{color: '#726F6E'}} variant='caption'>{errors.email && errors.email.message}</Typography>

                        <textarea 
                            className={classes.textArea} 
                            type="text" 
                            id="enter-message" 
                            name="message" 
                            placeholder= {t('contact:enter-message-placeholder')}
                            ref={register({ // <--- Add the (required) validations as objects to the form register ---> //
                                required: `${t('contact:message-error-placeholder')}`
                            })}
                        ></textarea>
                        <Typography gutterBottom style={{color: '#726F6E'}} variant='caption'>{errors.message && t('contact:message-error-placeholder')}</Typography>
                        
                        <button type='submit' disableRipple='true' variant="contained" color='secondary' className={classes.submitButton}>
                            {t('contact:send-message-button')}
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;
