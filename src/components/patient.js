import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import React, { useState, useEffect } from 'react';
import firebase from '../firebase.js'
import { useParams } from "react-router-dom";
import moment from 'moment';
import PsaGraph from './psaGraph.js';
import FormModal from './formModal.js';
import { firestore } from 'firebase';


function Patient() {
    let { patient_id } = useParams();
    let [psaData, setPsaData ] = useState([
        {
          "id": "PSA",
          "color": "hsl(330, 70%, 50%)",
          "data": []
        }
    ]);

    var docRef = firebase.firestore().collection(`patient/${patient_id}/psa/`).doc("psa");
    
    //When the element is loaded get psa data from store.
    useEffect(()=>{
       docRef.get().then((doc)=> { 
         const newPsaData = [...psaData];

         if(doc.data()){
          let graph_data_store = doc.data();

          graph_data_store.newPsaData[0].data.forEach(element => {
            newPsaData[0].data.push(element);
          });
          setPsaData(newPsaData);
         }
        
      })
    },[])
 
    const addPsaVal = psaVal => {
        const newPsaData = [...psaData];

        var new_study_result = { "x": moment().format('D/MM/YYYY,  h:mm:ss a') ,"y": Number(psaVal) };
        newPsaData[0].data.push(new_study_result);
        
        //add new point to database and graph
        setPsaData(newPsaData);
        docRef.set({newPsaData});

      }

    return (
        <div>
            <h1> {patient_id} </h1> 
            <PsaGraph psaData={psaData}/>
            <FormModal add={addPsaVal} btnTittle="Add psa"/>

        </div>
    );
}

export default Patient;
