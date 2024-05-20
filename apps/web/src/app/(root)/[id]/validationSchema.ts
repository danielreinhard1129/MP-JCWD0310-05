import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  comment: Yup.string().required('Comment is required'),
//   rating: Yup.number().required('Category is required'),
//   createdAt: Yup.date().min(1),
 
});
