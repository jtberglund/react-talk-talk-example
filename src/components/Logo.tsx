import '../styles/Logo.scss';

import * as React from 'react';

interface Props {}

// SVG: icon-home from Hawcons (http://hawcons.com/)
const Logo: React.SFC<Props> = props => (
    <>
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
                position: 'absolute',
                width: 0,
                height: 0,
                overflow: 'hidden'
            }}
        >
            <defs>
                <symbol id="icon-note-add" viewBox="0 0 32 32">
                    <title>note-add</title>
                    <path d="M25 25h-3v-1h3v-3h1v3h3v1h-3v3h-1v-3zM20.022 28h-13.021c-1.105 0-2.001-0.902-2.001-2.001v-14.999h23v7.498c-0.77-0.321-1.614-0.498-2.5-0.498-3.59 0-6.5 2.91-6.5 6.5 0 1.289 0.375 2.49 1.022 3.5v0 0zM5 10v-2.999c0-1.105 0.902-2.001 2.001-2.001h18.998c1.105 0 2.001 0.902 2.001 2.001v2.999h-23zM25.5 30c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5v0z" />
                </symbol>
            </defs>
        </svg>
        <svg className="logo">
            <use xlinkHref="#icon-note-add" />
        </svg>
    </>
);

Logo.displayName = 'Logo';

export default Logo;
