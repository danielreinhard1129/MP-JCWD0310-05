import FormTextArea from '@/components/FormTextArea';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import useCreateReviews from '@/hooks/api/reviews/useCreateReviews';
import { useAppSelector } from '@/redux/hooks';
import { IFormCreateReview } from '@/types/review.type';
import { useFormik } from 'formik';
import { validationSchema } from '../validationSchema';
import Rating from 'react-rating';

const CreateReviewDialog = () => {
  const { createReview } = useCreateReviews();
  const { id } = useAppSelector((state) => state.user);
  
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFormCreateReview>({
    initialValues: {
      userId: 0,
      eventId: 0,
      comment: '',
    //   rating: 0,
      createdAt: new Date().toISOString(),
    },
    validationSchema,
    
    onSubmit: (values) => {


        console.log(values);
        createReview({...values, userId: id, eventId: id});
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Your Review</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Your Review</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <FormTextArea
              name="comment"
              label="Comment"
              placeholder="Comment"
              value={values.comment}
              error={errors.comment}
              isError={!!touched.comment && !!errors.comment}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
          {/* <div className='mt-4'>
            <FormTextArea
            name="rating"
            label="Rating"
            placeholder="Rating"
            value={values.rating}
            error={errors.rating}
            isError={!!touched.comment && !!errors.comment}
            handleChange={handleChange}
            handleBlur={handleBlur}
            />
          </div> */}
  
          <div className="mt-4">
            <Button type="submit">Submit Review</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateReviewDialog;
