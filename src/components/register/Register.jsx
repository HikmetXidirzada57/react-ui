import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { BASE_URL } from '../../api/ApiConfig';
import { LoadingButton } from '@mui/lab';
import { registerAction } from '../../Redux/Actions/UserActions';
import { useDispatch } from 'react-redux';


const theme = createTheme();

  const Register = () => {  
    const dispatch=useDispatch()
    const { register,
      handleSubmit,
       watch,
        formState: { errors,isSubmitting,isValid } } = useForm({mode:"all"});
        
 
  const handleFormSubmit = (data) => {  
         
    dispatch(registerAction(data.email,data.firstName,data.lastName,data.password,data.confirmPassword))
    // (async () => {j
      // const rawResponse = await fetch(`${BASE_URL}/api/Account/register`, {
      //   method: "POST",
      //   headers: {
      //     "Accept": "application/json",
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(data)
      // })
      // const content = await rawResponse.json();
      // console.log(rawResponse)
    // })()
  };
                   


     return (
      <Container component="main" maxWidth="xs"> 
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           R e g i s t e r
          </Typography>
          <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email", { required: "email is required" })}
              error={!!errors?.email?.message}
              helperText={errors?.email?.message}
            />
                 <TextField
              margin="normal"
              required
              fullWidth
              name="FirstName"
              label="First Name"
              type="text"
              id="firstName"
              autoComplete="firstName"
              {...register("firstName", { required: "first name is required" })}
              error={!!errors?.firstName?.message}
              helperText={errors?.firstName?.message}

            />
                 <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              type="LastName"
              id="LastName"
              autoComplete="lastName"
              {...register("lastName", { required: "last name is required" })}
              error={!!errors?.lastName?.message}
              helperText={errors?.lastName?.message}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", { required: "password is required" })}
              error={!!errors.password}
              helperText={errors?.password?.message}
            />
                <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="ConfirmPassword"
              id="confirmPassword"
              autoComplete="confirm-password"
              {...register("confirmPassword", { required: "confirm password is required" })}
              error={!!errors?.confirmPassword?.message}
              helperText={errors?.confirmPassword?.message}
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Register
            </LoadingButton>
        
          </Box>
        </Box>

      </Container>
    )
  }

  export default Register