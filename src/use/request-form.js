// import { computed, watch } from "vue";
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useRequestForm(fn) {
  const store = useStore()
  const router = useRouter()

  const { handleSubmit, isSubmitting, submitCount } = useForm({
    initialValues: {
      status: 'active',
    },
  })
  const { value: fio, errorMessage: fError, handleBlur: fBlur } = useField(
    'fio',
    yup
      .string()
      .trim()
      .required('Введите ФИО')
  )
  const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
    'phone',
    yup
      .string()
      .trim()
      .required('Введите телефон')
  )
  const { value: sum, errorMessage: sError, handleBlur: sBlur } = useField(
    'sum',
    yup
      .number()
      .required('Введите сумму')
      .min(0, 'Сумма не может быть меньше 0')
  )
  const { value: status } = useField('status')

  const onSubmit = handleSubmit(fn)

  return {
    fio,
    fError,
    fBlur,
    phone,
    pError,
    pBlur,
    sum,
    sError,
    sBlur,
    status,
    onSubmit,
    isSubmitting,
  }
}
