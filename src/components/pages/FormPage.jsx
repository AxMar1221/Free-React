import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import '/src/styles/shared-styles.css';
import { SendRounded } from "@mui/icons-material";
import { useState } from "react";
import Swal from "sweetalert2";
import { getDatabase, ref, push } from "firebase/database";

export const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const db = getDatabase();
  const messagesRef = ref(db, 'messages');

  const store = async (e) => {
    e.preventDefault();

    if (isPhoneValid && phone.length === 10) {
      await push(messagesRef, {
        name: name,
        email: email,
        phone: phone,
        message: message
      });

      handleSubmit();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingrese un número de teléfono válido'
      });
    }
  };

  function validatePhone(event) {
    const val = event.target.value;
    const isValid = /^\d{10}$/.test(val);

    setIsPhoneValid(isValid);
    setPhone(val);
  }

  const handleSubmit = () => {
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado con éxito',
      text: 'En breve atenderemos sus dudas'
    });

    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
  };

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
                    error={false}
                    required
                    label="Nombre"
                    type="text"
                    name="name"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="error"
                    helperText="Campo obligatorio"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    error={!isPhoneValid}
                    label="Teléfono"
                    type="text"
                    name="tel"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="error"
                    helperText={!isPhoneValid ? "Número de teléfono no válido" : "Campo obligatorio"}
                    value={phone}
                    onChange={validatePhone}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={false}
                    required
                    label="Email"
                    type="email"
                    name="mail"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="error"
                    helperText="Campo obligatorio"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={false}
                    label="Mensaje"
                    multiline
                    rows={4}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="error"
                    value={message}
                    onChange={(ev) => setMessage(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    margin="dense"
                    variant="contained"
                    color="error"
                    startIcon={<SendRounded />}
                    type="submit"
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
};
