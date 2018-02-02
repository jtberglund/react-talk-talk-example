import '../styles/Memo.scss';

import * as React from 'react';

interface Props {
    title: string;
    body: string;
}

const Memo: React.SFC<Props> = ({ title, body }) => (
    <div className="memo">
        <span className="memo__title">{title}</span>
        <p className="memo__body">{body}</p>
    </div>
);

Memo.defaultProps = {};
Memo.displayName = 'Memo';

export default Memo;
