import React from 'react';

import M from 'materialize-css';

function Modal() {
  M.AutoInit();
  document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  });

  return (
    <>
      <button type="button" data-target="modal1" className="btn modal-trigger">Modal</button>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    </>
  );
}

export default Modal;
