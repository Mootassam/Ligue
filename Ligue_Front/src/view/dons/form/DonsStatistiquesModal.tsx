import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from 'src/i18n';
import CampagneChart from '../list/DonsMontantStatistique';

function DonsFormModal(props) {
  const modalRef = useRef<any>();
  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    (window as any).$(modalRef.current).modal('show');
    (window as any)
      .$(modalRef.current)
      .on('hidden.bs.modal', props.onClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <div ref={modalRef} className="modal" tabIndex={-1}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {i18n('Statistiques Dons')}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <CampagneChart
              saveLoading={saveLoading}
              recordMontant={props.recordMontant}
              modal
            />
          </div>
        </div>
      </div>
    </div>,
    (document as any).getElementById('modal-root'),
  );
}

export default DonsFormModal;
