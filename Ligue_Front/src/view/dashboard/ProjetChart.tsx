import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import ProjetService from 'src/modules/projet/projetService';
import { getHistory } from 'src/modules/store';

export default function ProjetChart(props) {
  const options = {
    onClick: function (evt, element) {
      getHistory().push('/projet');
    },
    legend: {
      display: true,
    },
    tooltips: {
      mode: 'label',
    },
    scales: {
      xAxes: [
        { barPercentage: 0.3 },
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

  const [budget, setBudget] = useState(['']);
  const [title, setTitle] = useState(['']);

  let arrayBudget = [''];
  let arrayTitle = [''];
  useEffect(() => {
    ProjetService.list('', '', '', '',).then(res => {
      for (let i = 0; i < res.rows.length; i++) {
        arrayBudget[i] = res.rows[i].budget;
        arrayTitle[i] = res.rows[i].titre;
      }
      setBudget(arrayBudget);
      setTitle(arrayTitle);
    });
  }, []);

  const data = {
    labels: title,
    datasets: [
      {
        label: i18n('entities.projet.menu'),
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: budget,
      },
    ],
  };

  const noData = {
    labels: ['Pas de projets'],
    datasets: [
      {
        label: i18n('entities.projet.menu'),
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [0],
      },
    ],
  };

  if (title[0] === '') {
    return (
      <Bar
        data={noData}
        options={options}
        width={100}
        height={50}
      />
    );
  }
  else {
    return (
      <Bar
        data={data}
        options={options}
        width={100}
        height={50}
      />
    );
  }
}

