import { useFormikContext } from 'formik';
import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({ name, ...otherProps })
{
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />

            {/* {touched.email && <ErrorMessage error={errors.email} />} */}
            <ErrorMessage error={errors[ name ]} visible={touched[ name ]} />

        </>
    );
}
