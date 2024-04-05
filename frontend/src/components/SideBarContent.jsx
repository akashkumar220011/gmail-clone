import React, { useState } from 'react'
import { Box, Button, styled, List, ListItem } from '@mui/material';
import { CreateOutlined } from '@mui/icons-material';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import ComposeMail from './ComposeMail';
const Container = styled(Box)`
    padding: 8px;
    & > ul {
        padding: 10px 0 0 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
    },
    & > ul > li > svg {
        margin-right: 20px;
    }
`

const ComposeButton = styled(Button)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`
const SideBarContent = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const onComposeClick = ()=>{
        setOpenDialog(true);
    }
    return (
        <Container>
            <ComposeButton onClick={()=> onComposeClick()}>
                <CreateOutlined style={{ marginRight: 10 }}  />Compose
            </ComposeButton>
            <List>
            {
                SIDEBAR_DATA.map(data => (
                    <ListItem>
                        <data.icon  fontSize='small'  />{data.title}
                    </ListItem>
                ))
            }
            </List>
            <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
        </Container>
    )
}

export default SideBarContent
