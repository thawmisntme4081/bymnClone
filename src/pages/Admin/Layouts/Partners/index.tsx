import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { Cell, flexRender } from '@tanstack/react-table'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../../app/store'
import Table from '../../../../commons/components/Table'
import AddPartner from './AddPartner'
import { columns } from './constants'
import { openAddPartner, selectAddPartner, selectPartners } from './slice'
import { getPartners } from './thunk'

interface IAdminPartners {}

const Partners: FC<IAdminPartners> = () => {
  const isOpenAddPartner = useSelector(selectAddPartner)
  const partners = useSelector(selectPartners)

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

  return (
    <>
      <Table
        data={partners}
        columns={columns}
        buttonAddTitle="ADD_PARTNER"
        onOpenPopup={() => dispatch(openAddPartner())}
        renderCell={renderCell}
        haveAction
      />
      {isOpenAddPartner && <AddPartner title="ADD_PARTNER" />}
    </>
  )
}

export default Partners
