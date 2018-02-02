import * as React from 'react';

interface Props {
    title?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const TextInput: React.SFC<Props> = ({ title, value, onChange, placeholder }) => (
    <>
        {title && <label htmlFor={title}>{title}</label>}
        <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
    </>
);

TextInput.displayName = 'TextInput';

export default TextInput;
