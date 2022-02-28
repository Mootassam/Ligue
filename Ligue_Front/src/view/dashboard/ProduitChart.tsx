import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import ProduitService from 'src/modules/produit/produitService';
import { getHistory } from 'src/modules/store';

export default function ProduitChart(props) {
  const [stock, setStock] = useState(['']);
  const [title, setTitle] = useState(['']);

  const filter = { stockable: true };

  let arrayStock = [''];
  let arrayTitle = [''];
  useEffect(() => {
    ProduitService.list(filter, '', '', '').then((res) => {
      for (let i = 0; i < res.rows.length; i++) {
        arrayStock[i] = res.rows[i].stock;
        arrayTitle[i] = res.rows[i].titre;
      }
      setStock(arrayStock);
      setTitle(arrayTitle);
    });
  }, []);

  const options = {
    onClick: function (evt, element) {
      getHistory().push('/produit');
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
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const data = {
    labels: title,
    datasets: [
      {
        type: 'bar',
        label: i18n('entities.produit.menu'),
        data: stock,
        fill: false,
        backgroundColor: '#6C63FF',
        borderColor: '#6C63FF',
        pointHoverBackgroundColor: '#6C63FF',
        pointHoverBorderColor: '#6C63FF',
        borderWidth: 1,
      },
    ],
  };

  const noData = {
    labels: ['Pas de produits'],
    datasets: [
      {
        type: 'bar',
        label: i18n('entities.produit.menu'),
        data: [0],
        fill: false,
        backgroundColor: '#6C63FF',
        borderColor: '#6C63FF',
        pointHoverBackgroundColor: '#6C63FF',
        pointHoverBorderColor: '#6C63FF',
        borderWidth: 1,
      },
    ],
  };
  if (title[0] === '') {
    return <Bar data={noData} options={options} />;
  } else {
    return <Bar data={data} options={options} />;
  }
}
