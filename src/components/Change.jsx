import '../App.css';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Leftside from './Leftside';
import { Box, Grid, Stack, InputLabel, TextField, Select, FormControl, MenuItem, Button } from '@mui/material';
import { useState } from 'react';

function Change() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit(data) {
        console.log(data);
    }

    const [statut, setStatut] = useState('');

    const handleChange = (e) => {
        setStatut(e.target.value);
    };


    return (
        <Grid
            className='fond'
            container
            spacing={0}
            direction='row'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh' }}
        >
            <Box
                className="milieu"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={700}
                height={500}
            >
                <Leftside />
                <Box
                    className='connex'
                    width={350}
                    height={500}
                    bgcolor='white'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems="center"
                >
                    <h4 className='chgMdp'>Changer mot de passe</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack
                            spacing={2}
                            width={275}
                        >
                            <Box>
                                <NavLink to='/form' className='retour'>Retour</NavLink>
                            </Box>
                            <TextField
                                autoComplete='none'
                                size='small'
                                label="CIN"
                                type="number"
                                id="cin"
                                variant='standard'
                                {...register("cin", { required: "CIN est obligatoire", })}
                                error={!!errors.cin}
                            />
                            <TextField
                                autoComplete='none'
                                size='small'
                                label="Téléphone"
                                type="number"
                                id="phone"
                                variant='standard'
                                {...register("phone", { required: "Le numéro téléphone est obligatoire", })}
                                error={!!errors.phone}
                            />
                            <FormControl
                                variant='standard'
                                sx={{ m: 1, minWidth: 120 }}
                            >
                                <InputLabel id="input-sta">Statut</InputLabel>
                                <Select
                                    className="statut"
                                    autoComplete='none'
                                    size='small'
                                    label="Statut"
                                    value={statut}
                                    onChange={handleChange}
                                    {...register("statut", { required: "Le staut est obligatoire", })}
                                    error={!!errors.statut}
                                >
                                    <MenuItem value="selected">Statut</MenuItem>
                                    <MenuItem value="adminrh">ADMIN-RH</MenuItem>
                                    <MenuItem value="adminsi">ADMIN-SI</MenuItem>
                                    <MenuItem value="sg">SG</MenuItem>
                                    <MenuItem value="dir">DIR</MenuItem>
                                    <MenuItem value="shd">SHD</MenuItem>
                                    <MenuItem value="agent">AGENT</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                autoComplete='none'
                                size='small'
                                label="Matricule"
                                type="number"
                                id="matricule"
                                variant='standard'
                                {...register("matricule", { required: "Le numéro matricule est obligatoire", })}
                                error={!!errors.matricule}
                            />
                            <Box>
                                <Button
                                    variant='contained'
                                    type='submit'
                                    width={75}
                                    sx={{
                                        backgroundColor: '#1cb799',
                                        color: 'white',
                                        borderRadius: '20px',
                                        mt: '25px'
                                    }}
                                >
                                    ENVOYER
                                </Button>
                            </Box>
                            <Box>
                                <NavLink
                                    to='/form'
                                    className='connecter'
                                >
                                    Se connecter
                                </NavLink>
                            </Box>

                        </Stack>
                    </form>
                </Box>
            </Box>
        </Grid>
    );
}

export default Change;