import React from 'react';
import { Typography } from '@material-ui/core/es';

const DateIlYA = (props) => {

        let DateNow = new Date().getTime();
        let DateAnnonce = new Date(props.dateAnnonce).getTime();
        const SecondesIlYA = Math.floor((DateNow - DateAnnonce)/1000);

    if (SecondesIlYA < 60) {
        if(SecondesIlYA === 0 || SecondesIlYA === 1) {
            return (
                <Typography style={{color: '#888888', paddingTop: '2px'}}>
                    Il y a {SecondesIlYA} seconde
                </Typography>
            )  
        } else {
            return (
                <Typography style={{color: '#888888', paddingTop: '2px'}}>
                    Il y a {SecondesIlYA} secondes
                </Typography>
            ) 
        }
    } 
    if (SecondesIlYA > 59 && SecondesIlYA < 3600) {
        const MinutesIlYA = Math.floor(SecondesIlYA/60);
        if (MinutesIlYA === 1) {
            return (
                <Typography style={{color: '#888888', paddingTop: '2px'}}>
                    Il y a {MinutesIlYA} minute
                </Typography>
            ) 
        } else {
            return (
                <Typography style={{color: '#888888', paddingTop: '2px'}}>
                    Il y a {MinutesIlYA} minutes
                </Typography>
            )
        }
    }
    if (SecondesIlYA > 3599 && SecondesIlYA < 86400) {
        const HeuresIlYA = Math.floor(SecondesIlYA/3600);
        if (HeuresIlYA === 1) {
            return (
                <Typography style={{color: '#888888', paddingTop: '2px'}}>
                    Il y a {HeuresIlYA} heure
                </Typography>
            )
        } else {
            return (
                <Typography style={{color: '#888888', paddingTop: '2px'}}>
                    Il y a {HeuresIlYA} heures
                </Typography>
            )
        }
    }
    if (SecondesIlYA > 86399 && SecondesIlYA < 604800) {
        const JoursIlYA = Math.floor(SecondesIlYA/(3600*24));
        if (JoursIlYA === 1) {
            return (
                <Typography style={{color: '#888888', paddingTop: '2px'}}>
                    Il y a {JoursIlYA} jour
                </Typography>
            ) 
        } else {
            return (
                <Typography style={{color: '#888888', paddingTop: '2px'}}>
                    Il y a {JoursIlYA} jours
                </Typography>
            )
        }
    }
    if (SecondesIlYA > 86399) {
        const SemainesIlYA = Math.floor(SecondesIlYA/(3600*24*7));
        if (SemainesIlYA === 1) {
            return (
                <Typography style={{color: '#888888', paddingTop: '2px'}}>
                    Il y a {SemainesIlYA} semaine
                </Typography>
            ) 
        } else {
            return (
                <Typography style={{color: '#888888', paddingTop: '2px'}}>
                    Il y a {SemainesIlYA} semaines
                </Typography>
            )
        }
    }
}

export default DateIlYA;