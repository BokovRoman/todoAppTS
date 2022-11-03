import React from 'react';
import { Field } from 'formik';

const FilteredPropsInputField = ({ className, valid, error, ...props }: any) => (
  <Field className={className} {...props} />
);

export default FilteredPropsInputField;
