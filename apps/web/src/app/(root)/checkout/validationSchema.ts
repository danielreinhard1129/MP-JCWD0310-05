import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  quantity: Yup.number().required('Quantity is Required'),
});