import '../styles/AddButton.scss';

import * as React from 'react';

import { connect } from 'react-redux';

interface Props {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const AddButton: React.SFC<Props> = ({ onClick }) => <div className="add-button" title="Add a memo" onClick={onClick} />;

AddButton.displayName = 'AddButton';

export default AddButton;
