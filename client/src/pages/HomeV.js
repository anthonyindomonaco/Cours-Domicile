import React from 'react';
import '../home.css';
import Typography from '@material-ui/core/Typography';
import Bugreport from '@material-ui/icons/BugReportRounded'

const HomeV = () => {
  return (
    <div>
      <Typography style={{textAlign: 'center', color: '#dddddd', marginTop: '10%'}} component="h2" variant="display2" gutterBottom>
      <Bugreport style={{fontSize: 168}}/> <br/>
        Erreur ... <br/> Veuillez vous enregistrer <br/> ou vous connecter
      </Typography>
    </div>
  )
}

export default HomeV;
