import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

export default function AppFormImagePicker({ name })
{
    const { errors, setFieldValue, touched, values } = useFormikContext();

    const imageUris = values[ name ];

    const handleAdd = (image) =>
    {
        setFieldValue(name, [ ...imageUris, image ]);
    };

    const handleRemove = (image) =>
    {
        setFieldValue(name, imageUris.filter((imageUri) => imageUri !== image));
    };

    return (
        <>
            <ImageInputList resourcePath={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
            <ErrorMessage error={errors[ name ]} visible={touched[ name ]} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
