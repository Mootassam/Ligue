import React, { useState, useEffect } from 'react';
import { i18n } from 'src/i18n';
import ProjetChart from 'src/view/dashboard/ProjetChart';
import OutMovesChart from 'src/view/dashboard/OutMovesChart';
import CampagneChart from 'src/view/dashboard/CampagneChart';
import DashboardHorizontalBarChart from 'src/view/dashboard/DashboardHorizontalBarChart';
import DashboardLineChart from 'src/view/dashboard/DashboardLineChart';
import ProduitChart from 'src/view/dashboard/ProduitChart';
import InMovesChart from 'src/view/dashboard/InMovesChart';
import DashboardPolarChart from 'src/view/dashboard/DashboardPolarChart';
import DashboardRadarChart from 'src/view/dashboard/DashboardRadarChart';

const DashboardPage = (props) => {
  return (
    <>
      <div
        style={{
          padding: 0,
          marginLeft: '-12px',
          marginRight: '-12px',
        }}
      >
        <div className="row no-gutters">
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border rounded">
              <CampagneChart />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border rounded">
              <ProduitChart />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border rounded">
              <ProjetChart />
            </div>
          </div>

          {/* <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardLineChart />
            </div>
          </div> */}

          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border rounded">
              <OutMovesChart />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border rounded">
              <InMovesChart />
            </div>
          </div>
          {/* <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardPolarChart />
            </div>
          </div> */}

          {/* <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardHorizontalBarChart />
            </div>
          </div> */}
          {/* <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardRadarChart />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
