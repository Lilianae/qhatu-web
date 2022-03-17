import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AlertQhatu from '../../components/alert/AlertQhatu';

const SettingsStl = ({
  userData,
  alertMessage,
  refFirstName,
  refLastName,
  refDocumentNumber,
  handleChangeSettings,
  updateUser,
}) => {
  return (
    <>
        <Grid item xs={16}>
          <Typography variant="h6" align="CENTER">
            Datos Personales
          </Typography>
        </Grid>

        <Box component="form" sx={{ mt: 4 }}>
          <TextField
            margin="normal"          
            autoComplete="given-name"
            required
            fullWidth
            id="txtFirstName"
            label="Nombre"
            name="txtFirstName"            
            autoFocus
            defaultValue={userData.firstName}
            inputRef={refFirstName}
            onChange={handleChangeSettings}
          />

          <TextField
            margin="normal"          
            required
            fullWidth
            id="txtLastName"
            label="Apellidos"
            name="txtLastName"
            defaultValue={userData.lastName}
            inputRef={refLastName}
            onChange={handleChangeSettings}
          />

          <TextField
            margin="normal"                    
            autoComplete="given-name"
            required
            fullWidth
            id="txtDocumentNumber"
            label="DNI"
            name="txtDocumentNumber"            
            defaultValue={userData.documentNumber}
            inputRef={refDocumentNumber}
            onChange={handleChangeSettings}
          />

          <Button
            type="button"
            variant="contained"
            onClick={updateUser}
            sx={{ mt: 3, mb: 2 }}
          >Actualizar
          </Button>
      </Box>

      <br />
      {alertMessage.visibility ? (
        <AlertQhatu message={alertMessage.message} />
      ) : null}
    </>
  );
};

export default SettingsStl;
