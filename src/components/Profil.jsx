import React from "react";
import { Grid, Stack, InputLabel, TextField, } from "@mui/material";

const Profil = () => {
    return (
        <Grid
            display='flex'
            justifyContent='center'
        >
            <form className="info">

                <Stack>
                    <InputLabel className="inputlb1">Nom</InputLabel>

                    <InputLabel className="inputlb">Prénom</InputLabel>

                    <InputLabel className="inputlb">Matricule</InputLabel>

                    <InputLabel className="inputlb">CIN</InputLabel>

                    <InputLabel className="inputlb">Pseudo</InputLabel>

                    <InputLabel className="inputlb">Mot de passe</InputLabel>

                    <InputLabel className="inputlb">Statut</InputLabel>

                </Stack>
                <Stack>
                    <TextField
                        autoComplete='none'
                        size='small'
                        type="text"
                        id="nm"
                        sx={{
                            backgroundColor: 'ghostwhite',
                            maxWidth: '300px',
                            marginLeft: '15px',
                            marginBottom: '15px'
                        }}
                    />
                    <TextField
                        autoComplete='none'
                        size='small'
                        type="text"
                        id="pnm"
                        sx={{
                            backgroundColor: 'ghostwhite',
                            maxWidth: '300px',
                            marginLeft: '15px',
                            marginBottom: '20px'
                        }}
                    />
                    <TextField
                        autoComplete='none'
                        size='small'
                        type="number"
                        id="mt"
                        sx={{
                            backgroundColor: 'ghostwhite',
                            maxWidth: '300px',
                            marginLeft: '15px',
                            marginBottom: '20px'
                        }}
                    />
                    <TextField
                        autoComplete='none'
                        size='small'
                        type="number"
                        id="cin"
                        sx={{
                            backgroundColor: 'ghostwhite',
                            maxWidth: '300px',
                            marginLeft: '15px',
                            marginBottom: '18px'
                        }}
                    />
                    <TextField
                        autoComplete='none'
                        size='small'
                        type="text"
                        id="pseudo"
                        sx={{
                            backgroundColor: 'ghostwhite',
                            maxWidth: '300px',
                            marginLeft: '15px',
                            marginBottom: '18px'
                        }}
                    />
                    <TextField
                        autoComplete='none'
                        size='small'
                        type="password"
                        id="mp"
                        sx={{
                            backgroundColor: 'ghostwhite',
                            maxWidth: '300px',
                            marginLeft: '15px',
                            marginBottom: '16px'
                        }}
                    />
                    <TextField
                        autoComplete='none'
                        size='small'
                        type="text"
                        id="statut"
                        sx={{
                            backgroundColor: 'ghostwhite',
                            maxWidth: '300px',
                            marginLeft: '15px'
                        }}
                    />
                </Stack>

            </form>
        </Grid>
    );
}

export default Profil;