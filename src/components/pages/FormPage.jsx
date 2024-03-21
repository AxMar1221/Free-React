import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material"
import '/src/styles/shared-styles.css';
import { SendRounded } from "@mui/icons-material";
import { useState } from "react";

export const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState();
  const [isPhoneValid, setIsPhoneValid] = useState();

  const store = (e) => {
    e.preventDefault();
  }

  function validatePhone(event) {
    const val = event.target.value;

    let count = 0;

    for (let i = 0; i < val.length; i++)
      if (val.charAt(i) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) count++;

    let isValid = count === 10 ? true : false;
    setIsPhoneValid(isValid);

    setPhone(val);
  }

  const handleSubmit = (name, number, email, message) => {
    console.log(name, number, email, message);
  }
  return (
    <div className="container">
      <Typography color="primary" variant='h5' align="center">
        Contácteme llenando el formulario
      </Typography>
      <form onSubmit={store}>
        <Box my={2}>
          <Card>
            <CardContent>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <TextField
                    required
                    label="Nombre"
                    type="text"
                    name="name"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="success"
                    helperText="Campo obligatorio"
                    onChange={(ev) => setName(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>

                  <TextField
                    required
                    error={phone && !isPhoneValid}
                    label="Teléfono"
                    type="number"
                    name="tel"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="success"
                    helperText="Campo obligatorio"
                    onChange={validatePhone}
                  />
                </Grid>
                <Grid item xs={6}>

                  <TextField
                    required
                    label="Email"
                    type="text"
                    name="mail"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="success"
                    helperText="Campo obligatorio"
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Mensaje"
                    multiline
                    rows={4}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="success"
                    onChange={(ev) => setMessage(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    margin="dense"
                    variant="contained"
                    color="success"
                    startIcon={<SendRounded />}
                    onClick={() =>
                      handleSubmit(
                        name,
                        email,
                        phone,
                        message,
                      )
                    }
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </form>
    </div>
  )
}

