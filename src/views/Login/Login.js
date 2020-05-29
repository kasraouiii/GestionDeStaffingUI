import React from 'react';
import logo from 'assets/img/Sopralogo.png';
import history from 'History.js';
import { makeStyles } from "@material-ui/core/styles";
import 'App.css';
import form from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import Button from "components/CustomButtons/Button.js";



import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const styles = {
  loginform: {
    maxWidth: 343,
    marginTop:'8%',
    margin: 'auto',
    borderRadius: 20,
    padding: 12,
  },
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 20,
    padding: 12,
  },
  media:{
    width: "70%",
    margin: 'auto',
    marginLeft: '13%',
  }

};

const useStyles = makeStyles(styles);

function goHome() {
  history.push('/admin/home');
  window.location.reload(false);//////////////////////(A revoire!!)
}
function Login() {
  const classes = useStyles();
  return (

    <form className={classes.loginform} >
      <Card className={classes.root}>
        {/* <CardMedia
        className={classes.media}
        image={logo}
      /> */}
        <img src={logo} alt="Sopralogo"  className={classes.media}/>
        <CardContent >
          <FormControl fullWidth className={classes.margin}>
            <TextField id="standard-basic" type='email' label="Email" sfullWidth />
          </FormControl>
          <FormControl fullWidth className={classes.margin}>
            <TextField id="standard-basic" type="password" label="Mot de passe" />
          </FormControl>
          <Button color="primary" onClick={goHome} round block>Connexion</Button>
        </CardContent>
      </Card>
      <div className="text-center">
        <a href="/sign-up">Mot de passe oublier ?</a>

      </div>

    </form>
  );

}

export default Login;
