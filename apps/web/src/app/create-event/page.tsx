'use client';

import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';
import FormTextArea from '@/components/FormTextArea';
import PreviewImages from '@/components/PreviewImages';
import { Button } from '@/components/ui/button';
import AuthGuard from '@/hoc/AuthGuard';
import useCreateEvent from '@/hooks/api/event/useCreateEvent';
import { useAppSelector } from '@/redux/hooks';
import { IFormCreateEvent } from '@/types/event.type';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import AuthGuardOrganizer from '@/hoc/AuthGuardOrganizer';

// import { DateInput } from '@/components/DateInput';
const CreateEvent = () => {
  const { createEvent } = useCreateEvent();
  const { id } = useAppSelector((state) => state.user);
  
  // console.log('gdhdhdhdghdg', id);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFormCreateEvent>({
    initialValues: {
      userId: 0,
      title: '',
      category: '',
      thumbnail: [],
      description: '',
      content: '',
      startDate: '',
      endDate: '',
      city: '',
      venue: '',
      price: 0,
      ticketLimit: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      createEvent({ ...values, userId: id });
    },
    enableReinitialize: true,
  });

  return (
    <main className="">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          <div className="container border-b-2 border-mythemes-scarletgum py-5 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Event Overview</h1>
            <FormInput
              name="title"
              type="text"
              label="Title"
              placeholder="Title"
              value={values.title}
              error={errors.title}
              isError={!!touched.title && !!errors.title}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <FormInput
              name="category"
              type="text"
              label="Category"
              placeholder="Category"
              value={values.category}
              error={errors.category}
              isError={!!touched.category && !!errors.category}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <FormTextArea
              name="description"
              label="Description"
              placeholder="Description"
              value={values.description}
              error={errors.description}
              isError={!!touched.description && !!errors.description}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <FormTextArea
              name="content"
              label="Content"
              placeholder="Content"
              value={values.content}
              error={errors.content}
              isError={!!touched.content && !!errors.content}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />



            <PreviewImages
              fileImages={values.thumbnail}
              onRemoveImage={(idx: number) =>
                setFieldValue('thumbnail', values.thumbnail?.toSpliced(idx, 1))
              }
            />
            <Dropzone
              isError={Boolean(errors.thumbnail)}
              label="Thumbnail"
              onDrop={(files) =>
                setFieldValue('thumbnail', [
                  ...values.thumbnail,
                  ...files.map((file) => file),
                ])
              }
            />
          </div>

          <div className="container border-b-2 border-mythemes-scarletgum pt-3 pb-8 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Date and Location</h1>
            <FormInput
              name="startDate"
              type="datetime-local"
              label="Start Date"
              placeholder="YYYY-MM-DD"
              value={values.startDate}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.startDate as string}
              isError={!!touched.startDate && !!errors.startDate}
            />
            <FormInput
              name="endDate"
              type="datetime-local"
              label="End Date"
              placeholder="YYYY-MM-DD"
              value={values.endDate}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.endDate as string}
              isError={!!touched.endDate && !!errors.endDate}
            />
            <FormInput
              name="venue"
              type="text"
              label="Venue"
              placeholder="Venue"
              value={values.venue}
              error={errors.venue}
              isError={!!touched.venue && !!errors.venue}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <FormInput
              name="city"
              type="text"
              label="City"
              placeholder="City"
              value={values.city}
              error={errors.city}
              isError={!!touched.city && !!errors.city}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>

          <div className="container pt-3 pb-8 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Tickets</h1>
            <FormInput
              name="price"
              type="number"
              label="Price (IDR)"
              placeholder="Price (IDR)"
              value={values.price}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.price}
              isError={!!touched.price && !!errors.price}
            />

            <FormInput
              name="ticketLimit"
              type="number"
              label="Ticket Limit"
              placeholder="Ticket limit"
              value={values.ticketLimit}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.ticketLimit}
              isError={!!touched.ticketLimit && !!errors.ticketLimit}
            />
          </div>

          <div className="mb-4 flex justify-center">
            <Button type="submit" className="w-1/2">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AuthGuardOrganizer(CreateEvent);
