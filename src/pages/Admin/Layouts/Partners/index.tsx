import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { Cell, flexRender } from '@tanstack/react-table'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../../app/store'
import Table from '../../../../commons/components/Table'
import AddPartner from './AddPartner'
import PopupConfirm from './PopupConfirm'
import { columns } from './utils/constants'
import {
  clickDeletePartner,
  openAddPartner,
  selectAddPartner,
  selectPartners,
  selectPopupConfirm,
} from './utils/slice'
import { getPartners } from './utils/thunk'

interface IAdminPartners {}

const Partners: FC<IAdminPartners> = () => {
  const isOpenAddPartner = useSelector(selectAddPartner)
  const partners = useSelector(selectPartners)
  const openConfirm = useSelector(selectPopupConfirm)

  const dispatch: ThunkDispatch<State, void, AnyAction> = useDispatch()

  useEffect(() => {
    dispatch(getPartners())
  }, [dispatch])

  const renderCell = (cell: Cell<any, unknown>, link: string) => {
    switch (cell.column.id) {
      case 'name':
        return link ? (
          <a href={link} className="hover:text-blue-400">
            {cell.renderValue() as string}
          </a>
        ) : (
          <span>{cell.renderValue() as string}</span>
        )
      case 'logo':
        return (
          <img
            src={cell.renderValue() as string}
            alt=""
            loading="lazy"
            width={60}
          />
        )
      default:
        return flexRender(cell.column.columnDef.cell, cell.getContext())
    }
  }

  const handleClickDelete = (id: string) => {
    dispatch(clickDeletePartner(id))
  }

  return (
    <>
      <Table
        data={partners}
        columns={columns}
        buttonAddTitle="partners.ADD_PARTNER"
        onOpenPopup={() => dispatch(openAddPartner())}
        renderCell={renderCell}
        haveAction
        onDelete={handleClickDelete}
      />
      {isOpenAddPartner && <AddPartner title="partners.ADD_PARTNER" />}
      {openConfirm && <PopupConfirm />}
    </>
  )
}

export default Partners
