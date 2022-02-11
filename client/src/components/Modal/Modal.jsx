import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { string } from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import './Modal.css';
import { addNews } from '../../redux/actions/actions';

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
  const isAdd = type === 'add';
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitLogin = (values) => {
    dispatch(addNews(values));
    console.log(values);
    handleClose();
  };

  const { error } = useSelector((state) => state.posts);
  console.log(error);

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
          <Formik
            initialValues={{
              header: '', content: '', tag: '', picture: '', name: '', login: '', avatar: '',
            }}
            onSubmit={submitLogin}
          >
            <Form>
              <h5>{isAdd ? 'Add news' : 'Update profile'}</h5>
              {isAdd && <Field name="header" type="text" className="validate" placeholder="News title" />}
              {isAdd && <Field name="content" type="text" className="validate" placeholder="News content" />}
              {isAdd && <Field name="tag" type="text" className="validate" placeholder="Tag" />}
              {isAdd && <Field name="picture" type="file" className="validate file" placeholder="Picture" />}
              {!isAdd && <Field name="name" type="text" className="validate" placeholder="Name" />}
              {!isAdd && <Field name="login" type="text" className="validate" placeholder="Nickname" />}
              {!isAdd && <Field name="avatar" type="file" className="validate file" placeholder="Avatar" />}
              <button className="btn waves-effect waves-light" type="submit">{isAdd ? 'Add' : 'Save'}</button>
            </Form>
          </Formik>
        </Box>
      </StyledModal>
    </div>
  );
}

Modal.propTypes = {
  type: string.isRequired,
};

export default Modal;
