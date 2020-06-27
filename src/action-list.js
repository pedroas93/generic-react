import React from 'react';
import styled from 'styled-components';
import Search from './search';
import { Region as FilterByRegion} from './Region';

const ActionListStyled = styled.div`
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 40px;
    }
`

function ActionList(){
    return(
        <ActionListStyled>
            <Search/>
            <FilterByRegion />
        </ActionListStyled>
    )
}

export default ActionList