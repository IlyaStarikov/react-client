import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { ImageInput } from 'formik-file-and-image-input/lib';
import { string } from 'prop-types';

import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

import { addNews, editProfile } from '../../redux/actions/actions';

import './Modal.css';

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
  const dispatch = useDispatch();
  const isCreation = type === 'add';
  const classEdit = `btn-floating btn-large waves-effect waves-light red ${type}`;
  const imageFormats = ['image/png', 'image/svg', 'image/jpeg'];
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validateForm = ({
    header,
    content,
    tag,
    picture,
    name,
    login,
    avatar,
  }) => {
    const addFields = [header, content, tag, picture];
    const editFields = [name, login, avatar];
    const currentFields = isCreation ? addFields : editFields;
    return currentFields.every((elem) => Boolean(elem));
  };

  const submitLogin = (values) => {
    if (validateForm(values)) {
      const currentValue = isCreation ? addNews(values) : editProfile(values);
      dispatch(currentValue);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <button onClick={handleOpen} type="button" className={classEdit}>
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
              header: '',
              content: '',
              tag: '',
              picture: null,
              name: '',
              login: '',
              avatar: null,
            }}
            onSubmit={submitLogin}
          >
            <Form>
              {error && <h6>Some fields are empty!</h6>}
              <h5>{isCreation ? 'Add news' : 'Update profile'}</h5>
              {isCreation
                ? (
                  <>
                    <Field name="header" type="text" className="validate" placeholder="News title" />
                    <Field name="content" type="text" className="validate" placeholder="News content" />
                    <Field name="tag" type="text" className="validate" placeholder="Tag" />
                    <ImageInput name="picture" className="validate file" validFormats={imageFormats} />
                  </>
                )
                : (
                  <>
                    <Field name="name" type="text" className="validate" placeholder="Name" />
                    <Field name="login" type="text" className="validate" placeholder="Nickname" />
                    <ImageInput name="avatar" className="validate file" validFormats={imageFormats} />
                  </>
                )}
              <button className="btn waves-effect waves-light" type="submit">{isCreation ? 'Add' : 'Save'}</button>
            </Form>
          </Formik>
        </Box>
      </StyledModal>
    </>
  );
}

Modal.propTypes = {
  type: string.isRequired,
};

export default memo(Modal);
