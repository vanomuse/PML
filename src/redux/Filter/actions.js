import * as types from './types'

export const setFilterCategory = data => ({
    type: types.SET_CATEGORY,
    payload: data,
});

export const setFilterProfession = data => ({
    type: types.SET_PROFESSION,
    payload: data
});

export const setFilterQualification = data => ({
    type: types.SET_QUALIFICATION,
    payload: data
});

export const setFilterAgeTo = data => ({
    type: types.SET_AGE_TO,
    payload: data
});

export const setFilterAgeFrom = data => ({
    type: types.SET_AGE_FROM,
    payload: data
});

export const setFilterCity = data => ({
    type: types.SET_CITY,
    payload: data
});

export const setFilterSalaryFrom = data => ({
    type: types.SET_SALARY_FROM,
    payload: data,
});
export const setFilterSalaryTo = data => ({
    type: types.SET_SALARY_TO,
    payload: data,
});

export const setFilterCurrency = data => ({
    type: types.SET_CURRENCY,
    payload: data,
});