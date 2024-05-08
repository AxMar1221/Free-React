import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material"
import '/src/styles/shared-styles.css';
import { SendRounded } from "@mui/icons-material";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore/lite";
import Swal from "sweetalert2";
import { db } from "../../firebase/FirebaseConfig";

export const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState();
  const [isPhoneValid, setIsPhoneValid] = useState();
  const messageCollection = collection(db, 'messages');

  const store = async (e) => {
    e.preventDefault();

    await addDoc(messageCollection, {
      name: name,
      email: email,
      phone: phone,
      message: message
    });
  };

  function validatePhone(event) {
    const val = event.target.value;
    let count = 0;
    for (let i = 0; i < val.length; i++)
      if (val.charAt(i) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) count++;
    let isValid = count === 10 ? true : false;

    setIsPhoneValid(isValid);
    setPhone(val);
  }

  const handleSubmit = (name, phone, email, message) => {
    console.log(name, phone, email, message);
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado con éxito',
      text: 'En breve atenderemos sus dudas'
    });
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
                    color="error"
                    helperText="Campo obligatorio"
                    onChange={validatePhone}
                  />
                </Grid>
                <Grid item xs={12}>

                  <TextField
                    error={false}
                    required
                    label="Email"
                    type="text"
                    name="mail"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    color="error"
                    helperText="Campo obligatorio"
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
                    onChange={(ev) => setMessage(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    margin="dense"
                    variant="contained"
                    color="error"
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

