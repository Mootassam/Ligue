import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import selectors from 'src/modules/commandLine/commandLineSelectors';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CommandLineListItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    // if (hasPermissionToRead) {
    //   return (
    //     <div key={record.id}>
    //       <Link
    //         className="btn btn-link"
    //         to={`/command-line/${record.id}`}
    //       >
    //         {record.subTotal}
    //       </Link>
    //     </div>
    //   );
    // }

    // return <div key={record.id}>{record.productTitle}</div>;
      return (
        <div key={record.id}>
          <Row>
            <Col sm={12}>
              <div>{record.productTitle}</div>
            </Col>
            {/* <Col sm={4}>
              <div>{record.subTotal}</div>
            </Col> */}
          </Row>
        </div>
      );
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </>
  );
}

CommandLineListItem.propTypes = {
  value: PropTypes.any,
};

export default CommandLineListItem;
