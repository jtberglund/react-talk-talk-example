import * as React from 'react';

interface Props {
    title: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.SFC<Props> = ({ title, value, onChange }) => {
    return (
        <>
            <label htmlFor={title}>{title}</label>
            <textarea value={value} onChange={onChange} />
        </>
    );
};

TextArea.displayName = 'TextArea';

export default TextArea;
