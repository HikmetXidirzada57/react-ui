import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
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
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../Redux/Actions/UserActions';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();
const Login = () => {
    const dispatch=useDispatch()
      
    const {userInfo}=useSelector(state=>state.userLogin)
    const navi=useNavigate()
     React.useEffect(()=>{
       if(userInfo && userInfo.token){
         navi("/")
       }
     },[navi.userInfo])

    const { register,
           handleSubmit,
           watch,
           formState: { errors,isSubmitting,isValid } } = useForm({mode:"all"});
  
    const handleFormSubmit = (data) => {
        
        dispatch(loginAction(data.email,data.password))
        // (async()=>{
        //   const rawResponse= await fetch(`${BASE_URL}/api/account/login`,{
        //         method:"Post",
        //         headers:{
        //             "Accept":"application/json",
        //             "Content-Type":"application/json"
        //         },
        //         body:JSON.stringify(data)
        //      })
        //      const content=await rawResponse.json();
        //      console.log(content)
        //     })() 
    };
    return (
        // <ThemeProvider theme={theme}>
       

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
                        Sign in
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
                            {...register("email",{required:"email is required!"})}
                            error={!!errors?.email?.message}
                            helperText={errors?.email?.message}
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
                            {...register("password",{required:"password is required"})} 
                            error={!!errors.password}
                            helperText={errors?.password?.message}

                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <LoadingButton
                            disabled={!isValid}
                            loading={isSubmitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </LoadingButton>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>


        //   </ThemeProvider>
    )}
export default Login
