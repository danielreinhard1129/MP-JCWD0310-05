'use client';

import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';
import FormTextArea from '@/components/FormTextArea';
import PreviewImages from '@/components/PreviewImages';
import RichTextEditor from '@/components/RichTextEditor';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import useCreateEvent from '@/hooks/api/useCreateEvent';

const Write = () => {
    const {create} = useCreateEvent()
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      title: '',
      category: '',
      thumbnail: [],
      description: '',
      content: '',
    },
    onSubmit: (values) => {
        create(values)
    },
  });

  return (
    <main className="container mx-auto px-4 my-6">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
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
          <RichTextEditor
            onChange={(html: string) => setFieldValue('content', html)}
            label="Content"
            value={values.content}
            isError={Boolean(errors.content)}
          />
          <Button type='submit' >Save</Button>
        </div>
      </form>
    </main>
  );
};

export default Write;