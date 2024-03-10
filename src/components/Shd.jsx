import React from 'react';
import { Grid, Tabs, Tab, Box } from "@mui/material";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import DemandeAbs from "./DemandeAbs";
import image from '../assets/atda2023.png';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Profil from "./Profil";
import Valider from './Valider';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 5 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Employee = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid
            display='flex'
            justifyContent='center'
        >
            <Box
                display='flex'
                width='75%'
            >
                <Box>
                    <Card>
                        <CardContent>
                            <Tabs
                                value={value} onChange={handleChange}
                                aria-label='styled tabs'
                                className='onglet'
                                centered
                                sx={{ marginLeft: '10px' }}
                            >
                                <Tab label='Mon Profil' className='profilShd' underline='none'
                                    {...a11yProps(0)}
                                    sx={{
                                        backgroundColor: '#fe7070',
                                        color: 'white',
                                        borderRadius: '15px',
                                        marginRight: '10px'
                                    }}
                                />
                                <Tab label='Mes Demandes' className='demandeShd'
                                    {...a11yProps(1)}
                                    sx={{
                                        backgroundColor: '#ffbbb1',
                                        color: 'white',
                                        borderRadius: '15px',
                                        marginRight: '10px'
                                    }}
                                />
                                <Tab label="Demande d'absence" className='demandeabsShd'
                                    {...a11yProps(2)}
                                    sx={{
                                        backgroundColor: '#f5aa63',
                                        color: 'white',
                                        borderRadius: '15px',
                                        marginRight: '10px'
                                    }}
                                />
                                <Tab label='Planning de congé' className='planningShd'
                                    {...a11yProps(3)}
                                    sx={{
                                        backgroundColor: '#ffeca9',
                                        color: 'white',
                                        borderRadius: '15px',
                                        marginRight: '10px'
                                    }}
                                />
                                <Tab label='Validation' className='validationShd'
                                    {...a11yProps(3)}
                                    sx={{
                                        backgroundColor: 'crimson',
                                        color: 'white',
                                        borderRadius: '15px',
                                        marginRight: '10px'
                                    }}
                                />
                            </Tabs>
                            <Box>
                                <CustomTabPanel value={value} index={0}>
                                    <Profil />
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    Vous n'avez de demandes d'absence
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2}>
                                    <DemandeAbs />
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={3}>
                                    Planning de congé
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={4}>
                                    <Valider />
                                </CustomTabPanel>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
                <Card
                    className='vaovaoShd'
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    <CardHeader
                        className='vaovaoH'
                        sx={{
                            backgroundColor: '#b8f5ed',
                            color: 'white',
                            borderRadius: '15px'
                        }}
                        title="VAOVAO"
                    >
                    </CardHeader>
                    <CardContent>
                        <p className='filazanaShd'>
                            Ilazana isika ato amin'ny MNDPT fa ho tanterahina
                            eto Madagasikara ny andian'ny faha-iraikambin'ny
                            folo ny ATDA taona 2023, ka entanina isika mpiasa
                            rehetra ato amin'ny Ministera mba hanatrika an'ireo
                            fotoana voatondro hanatanterahina izany.
                            Noho izany dia tsy maintsy manao "Inscription" ao
                            amin'ny pejy "facebook" ATDA2023 ny tsirairay...
                        </p>
                    </CardContent>
                    <CardMedia
                        component="img"
                        width='350'
                        height='165'
                        image={image}
                        alt="#"
                    />
                </Card>
            </Box>
        </Grid>
    );
}

export default Employee;