import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const filterByRegionAction = (regionSelected) => {
    return {
        type: 'FILTER_BY_REGION',
        payload: {regionSelected},
    }
}

export const Region = () => {
    const dispatch = useDispatch();
    const filterByRegion = useSelector((state) => state.filterByRegion);

    const onRegionChange = (selectEvent) =>{
        const value = selectEvent.target.value;

        dispatch(filterByRegionAction(value));
    }

    return(
        <select onChange={onRegionChange} value={filterByRegion}>
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}