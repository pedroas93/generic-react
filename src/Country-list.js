import React from 'react'
import styled from 'styled-components'
import Country from './Country'

const CountryListStyled = styled.div`
    display:grid;
    background: var (--black);
`

function CountryList({
}) {
    return (
        <CountryListStyled>
            <Country
                flag="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Peru_%281825-1950%29.svg/220px-Flag_of_Peru_%281825-1950%29.svg.png"
                name="Peru"
                population={1234567}
                region="America"
                capital="Lima"
            />
        </CountryListStyled>
    )
}

export default CountryList

