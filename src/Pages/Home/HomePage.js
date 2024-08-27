import React from 'react';
import Header from '../../Components/Layout/Header/Header.layout';
import Footer from '../../Components/Layout/Footer/Footer.layout';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Log from "../../assets/img/log.png";
import Banner from "../../assets/img/back.png";
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const HomePage = (props) => {
    return (
      <div style={{ backgroundColor:'white',width:"100%"}}>
          <Header/>
          <img src={Banner} alt='Devte banner' style={{width:"100%", height:"600px"}}/>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: '90%',
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container spacing={2}>
              
              <Grid item xs={9} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <br></br>
                  <h1 style={{fontWeight:'bold',color:'#333366'}}>ABOUT US</h1>
                  <h2 style={{lineHeight:'40px',textAlign:'justify'}}>
                    Le train du developpement et de l'inovation techonologique . nous somme une agence digital de developpement de logiciel.
                    Le train du developpement et de l'inovation techonologique , nous somme une agence digital de developpement de logiciel
                    Le train du developpement et de l'inovation techonologique  nous somme une agence digital de developpement de logiciel
                    Le train du developpement et de l'inovation techonologique  nous somme une agence digital de developpement de logiciel.

                  </h2>

                </Grid>  
                <Grid item>
                  <Img width={500} height={500} src={Log}/>
                </Grid>
              </Grid>
            </Grid>
         </Paper>
       
             <br></br>
             <br></br>
          <Footer/>
                 
    </div>
     
    );
  
}

export default HomePage;

