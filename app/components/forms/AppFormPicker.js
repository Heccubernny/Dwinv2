import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
export default function AppFormPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder, width, icon, ...otherProps })
{
    const { setFieldValue, errors, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[ name ]}
                width={width}
                icon={icon}
                {...otherProps}
            />
            <ErrorMessage error={errors[ name ]} visible={touched[ name ]} />
        </>
    );
}
