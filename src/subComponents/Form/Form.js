import React, { useState } from 'react'
import styles from "./Form.module.css"
import ClippedButton from '../ClippedButton/ClippedButton';
import { Box, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';

// function for email validation using regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
const isEmailValid = email => {
    return emailRegex.test(email);
}
const smallScreen = window.matchMedia('(max-width: 640px)').matches;

const Form = () => {
    const [formStates, setFormStates] = useState({
        email: "",
        message: "",
        loading: false,
    });
    const [buttonText, setButtonText] = useState("Send Message");
    const [showEmailError, setShowEmailError] = useState(false);
    const [showMessageError, setShowMessageError] = useState(false);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const submitForm = async event => {
        event.preventDefault();

        if (formStates.loading) return;
        if (!formStates.email || !formStates.message) {
            setErrorEmail("Please fill all the fields");
            setErrorMessage("Please fill all the fields");
            setShowEmailError(true);
            setShowMessageError(true);
            return;
        }
        if (!isEmailValid(formStates.email)) {
            setErrorEmail("Please enter a valid email");
            setErrorMessage("");
            setShowEmailError(true);
            setShowMessageError(false)
            return;
        }

        setShowEmailError(false);
        setShowMessageError(false)

        setFormStates(prev => ({ ...prev, loading: true }));

        const templateParams = {
            to_name: process.env.REACT_APP_TO_NAME,
            from_name: formStates.email,
            message: formStates.message
        };

        try {
            const response = await emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY);
            console.log("response", response);
            setButtonText("Message Sent!");
            setFormStates({ email: "", message: "", loading: false });
            setShowEmailError(false);
            setShowMessageError(false);
            setErrorEmail("");
            setErrorMessage("");
        } catch (error) {
            console.log("Failed to send email!", error);
            alert("Failed to send email!. You can email me at gargakshay034@gmail.com");
            setFormStates(prev => ({ ...prev, loading: false }));
        }
    }

    return (
        <div className={styles.mainBox}>
            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'flex-end' }}>
                {!smallScreen && <EmailSvg />}
                <TextField
                    error={showEmailError}
                    helperText={showEmailError ? errorEmail : ""}
                    id={styles.inputEmail}
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    value={formStates.email}
                    onChange={(e) => setFormStates(prev => ({ ...prev, email: e.target.value }))}
                    InputLabelProps={{
                        style: { color: '#b7b7b7' }
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#b7b7b7',
                            },
                            '&:hover fieldset': {
                                borderColor: '#b7b7b7',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'skyblue',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#b7b7b7',
                        },
                    }}
                />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'flex-end' }}>
                {!smallScreen && <MessageSvg />}
                <TextField
                    error={showMessageError}
                    helperText={showMessageError ? errorMessage : ""}
                    id={styles.inputMsg}
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={6}
                    value={formStates.message}
                    onChange={(e) => setFormStates(prev => ({ ...prev, message: e.target.value }))}
                    InputLabelProps={{
                        style: { color: '#b7b7b7' },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#b7b7b7',
                            },
                            '&:hover fieldset': {
                                borderColor: '#b7b7b7',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'skyblue',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#b7b7b7',
                        },
                        marginTop: '8em',
                    }}
                />
            </Box>
            <SendButton
                submitForm={submitForm}
                loading={formStates.loading}
                text={buttonText}
            />
            {formStates.loading ? <div className={styles.waitingMsg}>It may take up to <span>5 seconds</span> to send !</div> : ""}
        </div>
    )
}


const SendButton = ({ loading, submitForm, text }) => (
    <ClippedButton onClick={submitForm} color="skyblue" className={[styles.clippedButton, (loading || text === 'Message Sent!') ? styles.disabled : ""].join(" ")}>
        {loading ? <LoadingContent /> : <SendContent text={text} />}
    </ClippedButton>
);

const SendContent = ({ text }) => (
    <>
        {(!smallScreen && text !== 'Message Sent!') && <svg className={styles.svgInline} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path>
        </svg>}
        {text}
    </>
);

const LoadingContent = () => (
    <>
        <svg className={[styles.loading, styles.svgInline].join(" ")} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"></path>
        </svg>
        Sending Email
    </>
);

const EmailSvg = () => (
    <svg className={styles.svgMui} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailOutlinedIcon">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
    </svg>
);

const MessageSvg = () => (
    <svg className={styles.svgMui} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MessageOutlinedIcon">
        <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"></path>
    </svg>
);

export default Form;
