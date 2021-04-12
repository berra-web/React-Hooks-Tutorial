import {useState} from 'react';

export default function useFormFields(init) {
    const [fields, setFields] = useState(init)

    function handleFields(e) {
        const target = e.target.value;
        setFields({
            ...fields,
            [target.name] : target
        })
    }
    return {fields, handleFields}
}
