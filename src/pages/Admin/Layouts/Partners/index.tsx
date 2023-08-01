import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
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

  return (
    <>
      <Table
        data={partners}
        columns={columns}
        buttonAddTitle="Add partner"
        onOpenPopup={() => dispatch(openAddPartner())}
      />
      {isOpenAddPartner && <AddPartner title="Add partner" />}
    </>
  )
}

export default Partners
