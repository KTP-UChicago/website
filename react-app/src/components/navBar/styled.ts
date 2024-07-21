import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { BLUE } from '../../constants';

export const StyledAppBar = styled(AppBar)`
    background-color: white;
    position: static;
    font-weight: 600;
    z-index: 10;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
`

export const StyledTab = styled(Button)`
    color: ${BLUE};
    font-weight: 600;font-weight: 600;
`