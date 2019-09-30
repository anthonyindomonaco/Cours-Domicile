import React from 'react';

export default function NombreAnnonce(props) {
    if (props.annonces.length <=10) {
      return (
      <p>Le site est tout juste ouvert ! Il y a quelques annonces seulement </p>
      )
    }
    if (props.annonces.length >10 && props.annonces.length <=100 ) {
      return (
      <p>Le site commence a avoir des annonces ! Tu devrais trouver ce que tu recherches </p>
      );
    } 
    if (props.annonces.length >100 && props.annonces.length <=1000 ) {
      return (
      <p>Le site devient populaire ! Tu ne devrais pas avoir de mal à trouver ce que tu recherches </p>
      );
    } else {
      return (
      <p>Il y a {props.annonces.length} ! Selectionne bien tes critères pour ne pas être déçu </p>
      );
    }  
}