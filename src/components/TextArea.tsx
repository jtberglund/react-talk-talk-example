import * as React from 'react';

interface Props {
    title?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
}

const TextArea: React.SFC<Props> = ({ title, value, onChange, placeholder }) => (
    <>
        {title && <label htmlFor={title}>{title}</label>}
        <textarea value={value} onChange={onChange} placeholder={placeholder} />
    </>
);

TextArea.displayName = 'TextArea';

export default TextArea;
