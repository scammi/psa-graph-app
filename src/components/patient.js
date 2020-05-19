import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import React, { useState, useEffect } from 'react';
import firebase from '../firebase.js'
import { useParams } from "react-router-dom";
import moment from 'moment';
import PatientChart from './patientChart.js';
import FormModal from './formModal.js';
import { firestore } from 'firebase';

function Patient() {
    let { patient_id } = useParams();
    let [psaData, setPsaData ] = useState([
        {
          "id": "PSA",
          "color": "hsl(330, 70%, 50%)",
          "data": [
            {
              "x": "10/05/2020",
              "y": 261
            },
            {
              "x": "10/06/2020",
              "y": 272
            },
            {
              "x": "10/07/2020",
              "y": 276
            },
            {
              "x": "10/08/2020",
              "y": 289
            },
            {
              "x": "10/9/2020",
              "y": 137
            },
            {
              "x": "10/22/2020",
              "y": 145
            },
            {
              "x": "11/1/2020",
              "y": 281
            }
          ]
        }
    ]);

    useEffect(()=> {
      firebase
        .firestore()
        .collection(`patient/${patient_id}/psa`)
        .onSnapshot((snapshot) => {
          const chart_data = snapshot.docs.map((doc)=>({
            mgr: doc.mgr,

          }))
          console.log("mgr", chart_data);
        })
    })
    const addPsaVal = psaVal => {
        const newPsaData = [...psaData];

        newPsaData[0].data.push({ "x": moment().format('D/MM/YYYY') ,"y": Number(psaVal) });
        setPsaData(newPsaData)
    }

    return (
        <div>
            <h1> {patient_id} </h1> 
            <PatientChart psaData={psaData}/>
            <FormModal add={addPsaVal} btnTittle="Add psa"/>

        </div>
    );
}

export default Patient;
