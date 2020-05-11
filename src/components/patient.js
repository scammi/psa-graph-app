import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import moment from 'moment';
import PatientChart from './patientChart.js';
import Tools from './tools.js';

function Patient() {
    let { patient } = useParams();
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

    const addPsaVal = psaVal => {
        let newPsaData = psaData;

        newPsaData[0].data.push({ "x": moment().format('D/MM/YYYY') ,"y": Number(psaVal) });
        setPsaData(newPsaData);

        console.log(psaData)

    }

    return (
        <div>
            <h1> {patient} </h1> 
            <PatientChart psaData={psaData}/>
            <Tools add={addPsaVal} btnTittle="Add psa"/>

        </div>
    );
}

export default Patient;
