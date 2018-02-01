import * as React from 'react';

interface Props {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'outline' | 'clear';
}

const Button: React.SFC<Props> = ({ type, text, onClick }) => {
    return (
        <button className={`button${type ? ` button-${type}` : ''}`} type="submit" onClick={e => e}>
            {text}
        </button>
    );
};

Button.defaultProps = {};
Button.displayName = 'Button';

export default Button;
