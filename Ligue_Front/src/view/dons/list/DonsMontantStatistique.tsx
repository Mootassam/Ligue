import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'src/modules/dons/list/donsListSelectors';





export default function CampagneChart(props) {
  const rows = useSelector(selectors.selectRows);
  let total = 0
  rows.map((item) => { total = total + item.montant });


  const recordMontant = props.recordMontant
  const data = {
    labels: [
      i18n('Mantant donné'),
      i18n('Total des dons'),
    ],
    datasets: [
      {
        data: [recordMontant, total],
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: [
          '#36A2EB',
          '#FFCE56',
        ],
      },
    ],
  };

  return <Doughnut
    data={data}
    width={100}
    height={40} />;
}





