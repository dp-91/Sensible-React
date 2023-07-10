import { Divider, Grid, OutlinedInput, TextField } from '@mui/material';
import Button from '@mui/material/Button';
// import FormControl, { useFormControl } from '@mui/material/FormControl';
import { FormEvent, useState } from 'react';
import fakeAsync from '../../helpers/fakeAsync';
import BasicModal from '../Modal/Modal';

function Form(
  {formName}: {formName: string}
) {
  // setting state
  const [firstName, setfirstName] = useState("");
  const [firstNameError, setfirstNameError] = useState(false);
  const [lastName, setlastName] = useState("");
  const [lastNameError, setlastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false)

  const [handshake, setHandshake] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submit = async (
    // e: FormEvent<HTMLFormElement>
  ) => {
    // below prevents page from reloading/default submission behavior;
    // e.preventDefault(); // removed for now because of async use and this binding context changed
    console.log('submit started!')
    setHandshake(true);
    await fakeAsync();
    // handleOpen();
    console.log('submit ended! -- FINISHED');
    setHandshake(false);
    return;
  }
  return (
    <>
      <h1>{formName} Form</h1>
      <form onSubmit={(e) => { e.preventDefault();submit(e) }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}> 
          <TextField 
            label="First Name"
            onChange={e => setfirstName(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{mb: 3}}
            fullWidth
            value={firstName}
            error={firstNameError}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            label="Last Name"
            onChange={e => setlastName(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{mb: 3}}
            fullWidth
            value={lastName}
            error={lastNameError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Email"
            onChange={e => setEmail(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{mb: 3}}
            fullWidth
            value={email}
            error={emailError}
          />
          <TextField 
            autoComplete="off"
            label="Password"
            onChange={e => setPassword(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="password"
            value={password}
            error={passwordError}
            fullWidth
            sx={{mb: 3}}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained">Submit</Button>
      </form>
      <BasicModal 
        title="Form Submit Status" 
        message="Success!" 
        openProp={!!open}
      />
    </>
  )
}

export default Form
