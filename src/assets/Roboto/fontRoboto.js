import { createGlobalStyle } from 'styled-components';

import Roboto from './Roboto-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: Roboto;
        src: url(${Roboto});
        font-style: normal;
    }
`;