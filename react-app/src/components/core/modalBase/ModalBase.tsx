import React from 'react'
import * as S from './styled'
import { Modal } from '@mui/material'

export default function ModalBase({children, open, handleClose}: {children: React.ReactNode, open: boolean, handleClose: () => void}) {
  return (
    <Modal
    style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", zIndex: 1 }}
    open={open}
    onClose={handleClose}>
    <S.ModalWrapper>
        {children}
        </S.ModalWrapper>
    </Modal>
  )
}
