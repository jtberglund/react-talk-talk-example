import * as React from 'react';

interface Props {
    title: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.SFC<Props> = ({ title, value, onChange }) => {
    return (
        <>
            <label htmlFor={title}>{title}</label>
            <input type="text" value={value} onChange={onChange} />
        </>
    );
};

TextInput.displayName = 'TextInput';

export default TextInput;
