import { createFormHook as rootCreateFormHook } from '@tanstack/react-form'
import { lazy } from 'react'
import { fieldContext, formContext } from './form-context'

const FieldInput = lazy(() => import('../components/FieldInput'))
const FieldTextArea = lazy(() => import('../components/FieldTextArea'))
const FieldSelect = lazy(() => import('../components/FieldSelect'))
const FieldCheckBox = lazy(() => import('../components/FieldCheckBox'))
const FieldSwitch = lazy(() => import('../components/FieldSwitch'))
const FieldRadioGroup = lazy(() => import('../components/FieldRadioGroup'))
const SubscribeButton = lazy(() => import('../components/ButtonSubscribe'))

export type createFormProps = Parameters<typeof rootCreateFormHook>[0]

export const createAppForm = (config?: Partial<createFormProps>) => {
  return rootCreateFormHook({
    fieldComponents: {
      Input: FieldInput,
      Select: FieldSelect,
      TextArea: FieldTextArea,
      CheckBox: FieldCheckBox,
      Switch: FieldSwitch,
      RadioGroup: FieldRadioGroup,
      ...config?.fieldComponents
    },
    formComponents: {
      SubscribeButton,
      ...config?.formComponents
    },
    fieldContext,
    formContext,
    ...config
  })
}
