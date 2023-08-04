import { yupResolver } from '@hookform/resolvers/yup'
import { ChangeEvent, FC } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import Checkbox from '../../../../commons/components/Form/Checkbox'
import Input from '../../../../commons/components/Form/Input'
import InputFile from '../../../../commons/components/Form/InputFile'
import Popup from '../../../../commons/components/Popup'
import { convertFileToBase64 } from '../../../../commons/helpers'

import {
  useAppDispatch,
  useThunkDispatch,
} from '../../../../commons/hooks/useDispatch'
import { ONE_MB, allowedExtensions } from './utils/constants'
import { IAddPartnerProps, IFormValues } from './utils/interfaces'
import {
  changeFilename,
  closeAddPartner,
  removeFilename,
  selectFilename,
} from './utils/slice'
import { addPartner } from './utils/thunk'

const schema = yup.object({
  name: yup.string().required('Please enter a name'),
  isPrimary: yup.boolean().required(),
  logo: yup.string().required('Please select a file'),
  link: yup.string().url().nullable().notRequired(),
})

const AddPartner: FC<IAddPartnerProps> = ({ title }) => {
  const dispatch = useAppDispatch()
  const thunkDispatch = useThunkDispatch()
  const filename: string = useSelector(selectFilename)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({ resolver: yupResolver(schema), mode: 'onTouched' })

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase()
      if (!allowedExtensions.includes(`.${fileExtension}`)) {
        setError('logo', {
          type: 'manual',
          message: 'Invalid type file',
        })
        return
      }
      if (file.size > ONE_MB) {
        setError('logo', {
          type: 'manual',
          message: 'File size should be less than 1MB',
        })
        return
      }
      clearErrors('logo')
      dispatch(changeFilename(file.name))
      const base64 = await convertFileToBase64(file)
      setValue('logo', base64)
    }
  }

  const handleRemoveFile = () => {
    setValue('logo', '')
    dispatch(removeFilename())
  }

  const onSubmit = (data: IFormValues) => {
    thunkDispatch(addPartner(data))
  }

  const handleReset = () => {
    dispatch(removeFilename())
    reset()
  }
  return (
    <Popup title={title} onClose={() => dispatch(closeAddPartner())}>
      <form
        className="p-6 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
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
        <InputFile
          onChange={handleFileChange}
          error={errors.logo?.message}
          filename={filename}
          onRemoveFile={handleRemoveFile}
        />
        <Checkbox
          id="isPrimary"
          label="Partner primary"
          {...register('isPrimary')}
        />
        <div className="flex-end p-6 space-x-2 rounded-b dark:border-gray-600">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Reset
          </button>
        </div>
      </form>
    </Popup>
  )
}

export default AddPartner
