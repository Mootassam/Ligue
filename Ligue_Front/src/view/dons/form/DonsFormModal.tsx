import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from 'src/i18n';
import Errors from 'src/modules/shared/error/errors';
import DonsForm from 'src/view/dons/form/DonsForm';
import DonsService from 'src/modules/dons/donsService';

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

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DonsService.create(data);
      const record = await DonsService.find(id);
      (window as any).$(modalRef.current).modal('hide');
      props.onSuccess(record);
    } catch (error) {
      (window as any).$(modalRef.current).modal('hide');
    } finally {
      setSaveLoading(false);
    }
  };

  const doCancel = () => {
    (window as any).$(modalRef.current).modal('hide');
  };

  return ReactDOM.createPortal(
    <div ref={modalRef} className="modal" tabIndex={-1}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {i18n('entities.dons.new.title')}
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
            <DonsForm
              saveLoading={saveLoading}
              onSubmit={doSubmit}
              onCancel={doCancel}
              modal
              recordIdprojet={props.recordIdprojet}
              recordIdtitre={props.recordIdtitre}
            />
          </div>
        </div>
      </div>
    </div>,
    (document as any).getElementById('modal-root'),
  );
}

export default DonsFormModal;
