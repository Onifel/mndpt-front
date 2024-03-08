import React from 'react';
import { Avatar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from '@mui/material/CardActions';

const HeaderPage = () => {
    return (
        <Grid className='header'>
            <Card
                className='head'
                height={150}
            >
                <CardHeader
                    avatar={
                        <Avatar type="file" accept="image/" id="select-image" src="/broken-image.jpg" />
                    }
                    title="NOM"
                    subheader="PRENOM"
                />
                <CardActions className='cardactions'>
                    <NavLink to='/form' className='shdpage'>
                        Se Déconnecter
                    </NavLink>
                    <NavLink to='/agent' className='deconnecter'>
                        Agent page
                    </NavLink>
                </CardActions>
                
            </Card>
        </Grid>

    );
}

export default HeaderPage;