import React from 'react'

import PropTypes from 'prop-types'

import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import { Button, DialogActions } from '@mui/material'

const Modal = (props) => {
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      fullWidth={true}
      maxWidth={props.maxWidth || 'sm'}
    >
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.content}</DialogContent>
      <DialogActions>
        <Button type="submit" form={props.idForm} onClick={props.onSubmit}>
          Aceptar
        </Button>
        <Button onClick={props.onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  content: PropTypes.object,
  maxWidth: PropTypes.string,
  idForm: PropTypes.string,
  onSubmit: PropTypes.func,
  title: PropTypes.string
}

export default Modal
