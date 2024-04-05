// Importing useState hook from React
import { useState } from 'react';
// Importing components and icons from Material-UI
import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material';
import { Close, DeleteOutline } from '@mui/icons-material';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

// Styling for the dialog component
const dialogStyle = {
  height: '90%',
  width: '80%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  borderRadius: '10px 10px 0 0',
};

// Styling for the header section using styled component
const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background: #f2f6fc;
  & > p {
    font-size: 14px;
    font-weight: 500;
  }
`;

// Styling for the recipient section using styled component
const RecipientWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  & > div {
    font-size: 14px;
    border-bottom: 1px solid #f5f5f5;
    margin-top: 10px;
  }
`;

// Styling for the footer section using styled component
const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
`;

// Styling for the send button using styled component
const SendButton = styled(Button)`
  background: #0b57d0;
  color: #fff;
  font-weight: 500;
  text-transform: none;
  border-radius: 18px;
  width: 100px;
`;

// ComposeMail component definition
const ComposeMail = ({ openDialog, setOpenDialog }) => {
  // State to manage form data
  const [data, setData] = useState({});

  const sentEmailService = useApi(API_URLS.saveSentEmail); 
  // Configuration for email sending
  const config = {
    Host: 'smtp25.elasticemail.com',
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: 587,
  };

  // Function to handle input value change
  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Function to close the compose mail dialog
  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  // Function to send the composed email
  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: 'krakash1022@gmail.com',
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }
    const payload ={
      to: data.to,
      from:'krakash1022@gmail.com',
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: "Akash kumar",
      starred: false,
      type: 'sent'
    }
    sentEmailService.call(payload);

    if(!sentEmailService.error){
      setOpenDialog(false);
      setData({});
    }
    setOpenDialog(false);
  };

  // Rendering the ComposeMail component
  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      {/* Header section */}
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
      </Header>
      {/* Recipient and subject section */}
      <RecipientWrapper>
        <InputBase placeholder="Recipients" name="to" onChange={(e) => onValueChange(e)} value={data.to} />
        <InputBase placeholder="Subject" name="subject" onChange={(e) => onValueChange(e)} value={data.subject} />
      </RecipientWrapper>
      {/* Body section */}
      <TextField
        multiline
        rows={20}
        sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
        name="body"
        onChange={(e) => onValueChange(e)}
        value={data.body}
      />
      {/* Footer section */}
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutline onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  );
};

// Exporting the ComposeMail component
export default ComposeMail;
