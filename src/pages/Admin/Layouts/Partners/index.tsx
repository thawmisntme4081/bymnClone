import { Cell, flexRender } from '@tanstack/react-table'
import { FC, useEffect } from 'react'
import Table from '../../../../commons/components/Table'
import { useAppSelector } from '../../../../commons/hooks/useAppSelector'
import {
  useAppDispatch,
  useThunkDispatch,
} from '../../../../commons/hooks/useDispatch'
import AddPartner from './AddPartner'
import PopupConfirm from './PopupConfirm'
import { columns } from './utils/constants'
import {
  clickDeletePartner,
  openAddPartner,
  openUpdatePartner,
  selectAddPartner,
  selectEditMode,
  selectPartners,
  selectPopupConfirm,
} from './utils/slice'
import { getPartners } from './utils/thunk'

interface IAdminPartners {}

const Partners: FC<IAdminPartners> = () => {
  const isOpenAddPartner = useAppSelector(selectAddPartner)
  const partners = useAppSelector(selectPartners)
  const openConfirm = useAppSelector(selectPopupConfirm)
  const isEditMode = useAppSelector(selectEditMode)

  const thunkDispatch = useThunkDispatch()
  const dispatch = useAppDispatch()

  useEffect(() => {
    thunkDispatch(getPartners())
  }, [thunkDispatch])

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

  const handleUpdate = (id: string) => {
    dispatch(openUpdatePartner(id))
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
        onUpdate={handleUpdate}
      />
      {isOpenAddPartner && (
        <AddPartner title="partners.ADD_PARTNER" editMode={isEditMode} />
      )}
      {openConfirm && <PopupConfirm />}
    </>
  )
}

export default Partners
