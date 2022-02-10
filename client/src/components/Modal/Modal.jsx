import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { string } from 'prop-types';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent; 
`;

const style = {
  width: 400,
  bgcolor: '#fff',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

function Modal({ type }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} id={type} type="button" className="btn-floating btn-large waves-effect waves-light red">
        <i className="material-icons">{type}</i>
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">Text in a modal</h2>
          <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
        </Box>
      </StyledModal>
    </div>
  );
}

Modal.propTypes = {
  type: string.isRequired,
};

export default Modal;
