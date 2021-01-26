// import { computed, watch } from "vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLoginForm(){

    const store = useStore()
    const router = useRouter()

    const { handleSubmit, isSubmitting, submitCount } = useForm();
    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
      "email",
      yup
        .string()
        .trim()
        .required("Введите email")
        .email()
    );
    const {
      value: password,
      errorMessage: pError,
      handleBlur: pBlur
    } = useField(
      "password",
      yup
        .string()
        .trim()
        .required("Введите пароль")
        .min(6, "Длина пароли минимум 6 символов")
    );

    const onSubmit = handleSubmit(async values => {
      await store.dispatch('auth/login',values)
      router.push('/')
    });

    return {
      email,
      password,
      eError,
      pError,
      eBlur,
      pBlur,
      onSubmit,
      isSubmitting
    };
}