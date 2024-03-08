import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(
  nom,
  prenom,
  type,
  dateDebut,
  dateFin,
  nbrJour,
  statut
){
  const action =  <TableRow>
                    <TableCell><Button
                                  variant='contained'
                                  type='submit'
                                  sx={{
                                    backgroundColor: 'darkred',
                                    color: 'white'
                                  }}
                                >REJETER</Button></TableCell>
                    <TableCell><Button
                                  variant='contained'
                                  type='submit'
                                  sx={{
                                    backgroundColor: 'lightgreen',
                                    color: 'black'
                                  }}
                                  >VALIDER</Button></TableCell>
                  </TableRow>
  return { nom, prenom, type, dateDebut, dateFin, nbrJour, statut, action  };
}

const rows = [
  createData('RALAY', 'DIEU DONNEE', 'CONGE ANNUEL', '14/02/2023', '16/02/2023', 3, 'Creation', 'REJETER VALIDER'),
  createData('ANDRIANANTENAINA', 'LALAINA', "AUTORISATION D'ABSENCE", '03/02/2023', '07/02/2023', 5, 'Creation', 'REJETER VALIDER'),
  createData('VELOMANANTSOA', 'RIJA', 'PERMISSION', '20/01/2023', '20/01/2023', 0.5, 'Creation', 'REJETER VALIDER'),
  createData('RANOSIARISON', 'RAVO', 'CONGE DE MATERNITE', '11/01/2023', '12/01/2023', 2, 'Creation','REJETER VALIDER'),
  createData('MANANJARA', 'CHRISTIAN', 'CONGE ANNUEL', '10/01/2023', '19/01/2023', 10, 'Creation', 'REJETER VALIDER'),
];

const Valider = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize:16 }}>NOM</TableCell>
            <TableCell sx={{ fontSize:16 }}>PRENOM</TableCell>
            <TableCell align='center' sx={{ fontSize:16 }}>TYPE</TableCell>
            <TableCell sx={{ fontSize:16 }}>DATE DEBUT</TableCell>
            <TableCell sx={{ fontSize:16 }}>DATE FIN</TableCell>
            <TableCell sx={{ fontSize:16 }}>NBR JOUR</TableCell>
            <TableCell sx={{ fontSize:16 }}>STATUT</TableCell>
            <TableCell align='center' sx={{ fontSize:16 }}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nom}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize:12 }}>
                {row.nom}
              </TableCell>
              <TableCell sx={{ fontSize:12 }}>{row.prenom}</TableCell>
              <TableCell align='center' sx={{ fontSize:12 }}>{row.type}</TableCell>
              <TableCell sx={{ fontSize:12 }}>{row.dateDebut}</TableCell>
              <TableCell sx={{ fontSize:12 }}>{row.dateFin}</TableCell>
              <TableCell align='center' sx={{ fontSize:12 }}>{row.nbrJour}</TableCell>
              <TableCell sx={{ fontSize:12 }}>{row.statut}</TableCell>
              <TableCell sx={{ fontSize:12 }}>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Valider;