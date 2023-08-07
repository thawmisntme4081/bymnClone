import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Popup from '../../../../commons/components/Popup'
import { STATUS_CODE } from '../../../../commons/constants'
import { useAppSelector } from '../../../../commons/hooks/useAppSelector'
import {
  useAppDispatch,
  useThunkDispatch,
} from '../../../../commons/hooks/useDispatch'
import {
  closeConfirmPopup,
  loadPartners,
  selectLoadingPartners,
  selectPartnerId,
} from './utils/slice'
import { deletePartner, getPartners } from './utils/thunk'

interface PopupConfirmProps {}

const PopupConfirm: FC<PopupConfirmProps> = () => {
  const dispatch = useAppDispatch()
  const thunkDispatch = useThunkDispatch()
  const { t } = useTranslation()
  const { t: adminT } = useTranslation('admin')

  const partnerId = useAppSelector(selectPartnerId)
  const loading = useAppSelector(selectLoadingPartners)

  const handleDelete = useCallback(() => {
    dispatch(loadPartners())
    thunkDispatch(deletePartner(partnerId))
      .unwrap()
      .then((res) => {
        if (res.status === STATUS_CODE.OK) {
          thunkDispatch(getPartners())
        }
      })
  }, [dispatch, thunkDispatch, partnerId])

  return (
    <Popup
      onClose={() => dispatch(closeConfirmPopup())}
      size="small"
      loading={loading}
    >
      <div className="px-4 pb-4">
        <p className="mb-4 text-center text-gray-500 dark:text-gray-300">
          {adminT('partners.DELETE_PARTNER_MESSAGE')}
        </p>
        <div className="flex-center space-x-4">
          <button
            onClick={() => dispatch(closeConfirmPopup())}
            className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {t('NO')}
          </button>
          <button
            onClick={handleDelete}
            className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            {t('YES')}
          </button>
        </div>
      </div>
    </Popup>
  )
}

export default PopupConfirm
