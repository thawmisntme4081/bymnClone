import { yupResolver } from '@hookform/resolvers/yup'
import { ChangeEvent, FC, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import * as yup from 'yup'

import Input from '../../../../commons/components/Form/Input'
import InputFile from '../../../../commons/components/Form/InputFile'
import Popup from '../../../../commons/components/Popup'
import {
  convertFileToBase64,
  filterObjectByFormField,
  removeUnchangedFields,
} from '../../../../commons/helpers'

import { useTranslation } from 'react-i18next'
import {
  selectLoadingTypePartners,
  selectTypePartners,
} from '../../../../app/slice'
import Loading from '../../../../commons/components/Loading'
import { STATUS_CODE } from '../../../../commons/constants'
import { useAppSelector } from '../../../../commons/hooks/useAppSelector'
import {
  useAppDispatch,
  useThunkDispatch,
} from '../../../../commons/hooks/useDispatch'
import { ERRORS, ONE_MB, allowedExtensions } from './utils/constants'
import { IAddPartnerProps, IPartners } from './utils/interfaces'
import {
  changeImage,
  closeAddPartner,
  loadPartners,
  removeImage,
  selectLoadingPartners,
  selectLogo,
  selectPartnerById,
  selectPartnerId,
  selectPrimaryLogo,
} from './utils/slice'
import { addPartner, getPartners, updatePartner } from './utils/thunk'

const schema = yup.object({
  name: yup.string().required(ERRORS.NAME_REQUIRED),
  type: yup.string().required(ERRORS.NAME_REQUIRED),
  logo: yup.string().required(ERRORS.LOGO_REQUIRED),
  primaryLogo: yup.string().required(ERRORS.LOGO_REQUIRED),
  link: yup
    .string()
    .url('partners.errors.INVALID_URL')
    .nullable()
    .notRequired(),
})

const AddPartner: FC<IAddPartnerProps> = ({ title, editMode }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const thunkDispatch = useThunkDispatch()

  const partnerId = useAppSelector(selectPartnerId)
  const loadingSubmit = useAppSelector(selectLoadingPartners)
  const loadingTypePartners = useAppSelector(selectLoadingTypePartners)
  let typePartners = useAppSelector(selectTypePartners)

  const logo = useAppSelector(selectLogo)
  const primaryLogo = useAppSelector(selectPrimaryLogo)
  const partnerById = useAppSelector(selectPartnerById)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<IPartners>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  })

  useEffect(() => {
    if (partnerById) {
      const filteredPartnerById = filterObjectByFormField(
        partnerById,
        Object.keys(schema.fields),
      )
      for (const key in filteredPartnerById) {
        setValue(key as keyof IPartners, filteredPartnerById[key])
      }
      dispatch(changeImage({ type: 'logo', data: filteredPartnerById.logo }))
      dispatch(
        changeImage({
          type: 'primaryLogo',
          data: filteredPartnerById.primaryLogo,
        }),
      )
    }
  }, [partnerById, setValue, dispatch])

  const handleFileChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>, field: 'logo' | 'primaryLogo') => {
      const file = e.target.files?.[0]
      if (file) {
        const fileExtension = file.name.split('.').pop()?.toLowerCase()
        if (!allowedExtensions.includes(`.${fileExtension}`)) {
          setError(field, {
            type: 'manual',
            message: ERRORS.INVALID_FILE,
          })
          return
        }
        if (file.size > ONE_MB) {
          setError(field, {
            type: 'manual',
            message: ERRORS.INVALID_FILE_SIZE,
          })
          return
        }
        clearErrors(field)
        const base64 = await convertFileToBase64(file)
        setValue(field, base64)
        dispatch(changeImage({ type: field, data: base64 }))
      }
    },
    [dispatch, setValue, setError, clearErrors],
  )

  const handleRemoveFile = useCallback(
    (field: 'logo' | 'primaryLogo') => {
      setValue(field, '')
      dispatch(removeImage(field))
    },
    [dispatch, setValue],
  )

  const handleReset = () => {
    dispatch(removeImage('logo'))
    dispatch(removeImage('primaryLogo'))
    reset()
  }

  const onSubmit = useCallback(
    (data: IPartners, editMode: boolean) => {
      dispatch(loadPartners())
      if (editMode) {
        removeUnchangedFields(partnerById, data)
        thunkDispatch(updatePartner({ id: partnerId, params: data }))
          .unwrap()
          .then((res) => {
            if (res.status === STATUS_CODE.OK) {
              thunkDispatch(getPartners()).unwrap().then(reset)
            }
          })
      } else {
        thunkDispatch(addPartner(data))
          .unwrap()
          .then((res) => {
            if (res.status === STATUS_CODE.CREATED) {
              thunkDispatch(getPartners()).unwrap().then(reset)
            }
          })
      }
    },
    [thunkDispatch, dispatch, reset, partnerId, partnerById],
  )

  const handleClosePopup = () => {
    dispatch(closeAddPartner())
    reset()
  }

  return (
    <Popup title={title} onClose={handleClosePopup} loading={loadingSubmit}>
      <form
        className="p-6 space-y-6"
        onSubmit={handleSubmit((data) => onSubmit(data, editMode))}
        noValidate
      >
        <Input
          type="text"
          placeholder="Name"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          type="text"
          placeholder="Link"
          error={errors.link?.message}
          {...register('link')}
        />
        {!loadingTypePartners ? (
          <Select
            {...register('type')}
            options={typePartners}
            styles={{
              option: (base, { isSelected }) => ({
                ...base,
                color: isSelected ? 'white' : '#475569',
                backgroundColor: isSelected ? '#dc052d' : 'inherit',
              }),
            }}
            onChange={(value) => {
              setValue('type', value?._id ?? '')
            }}
          />
        ) : (
          <Loading type="block" className="w-full h-11" />
        )}
        <div className="flex gap-2">
          <InputFile
            onChange={(e) => handleFileChange(e, 'logo')}
            error={errors.logo?.message}
            onRemoveFile={() => handleRemoveFile('logo')}
            image={logo}
          />
          <InputFile
            onChange={(e) => handleFileChange(e, 'primaryLogo')}
            error={errors.primaryLogo?.message}
            onRemoveFile={() => handleRemoveFile('primaryLogo')}
            image={primaryLogo}
          />
        </div>
        <div className="flex-end px-6 space-x-2 rounded-b dark:border-gray-600">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {editMode ? t('EDIT') : t('ADD')}
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {t('RESET')}
          </button>
        </div>
      </form>
    </Popup>
  )
}

export default AddPartner
