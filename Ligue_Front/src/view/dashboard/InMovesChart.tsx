import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import MouvementsService from 'src/modules/mouvements/mouvementsService';
import moment from 'moment';
import { getHistory } from 'src/modules/store';

export default function InMovesChart(props) {
  const options = {
    onClick: function (evt, element) {
      getHistory().push('/mouvements');
    },
    title: {
      display: true,
      text: i18n('entities.mouvements.menu'),
    },
    tooltips: {
      mode: 'label',
    },
    scales: {
      xAxes: [
        { barPercentage: 0.5 },
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true
          }
        },
      ],
    },
  };

  const [outMoves, setOutMoves] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  let arrayOutMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const filterOut = { typeMouv: "entree" }
  useEffect(() => {
    MouvementsService.list(filterOut, '', '', '',).then(res => {
      for (let i = 0; i < res.rows.length; i++) {
        for (let j = 0; j < arrayOutMoves.length; j++) {
          if (moment(res.rows[i].createdAt).month() === j && moment(res.rows[i].createdAt).year() === moment().year()) {
            arrayOutMoves[j] += res.rows[i].montant;
          }
        }
      }
      setOutMoves(arrayOutMoves);
    });
  }, []);

  const data = {
    labels: [
      i18n('dashboard.charts.months.1'),
      i18n('dashboard.charts.months.2'),
      i18n('dashboard.charts.months.3'),
      i18n('dashboard.charts.months.4'),
      i18n('dashboard.charts.months.5'),
      i18n('dashboard.charts.months.6'),
      i18n('dashboard.charts.months.7'),
      i18n('dashboard.charts.months.8'),
      i18n('dashboard.charts.months.9'),
      i18n('dashboard.charts.months.10'),
      i18n('dashboard.charts.months.11'),
      i18n('dashboard.charts.months.12'),
    ],
    datasets: [
      {
        label: i18n('entities.mouvements.enumerators.typeMouv.entree'),
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
        hoverBackgroundColor: '#36A2EB',
        hoverBorderColor: '#36A2EB',
        data: outMoves,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={options}
      width={100}
      height={50}
    />
  );

}

