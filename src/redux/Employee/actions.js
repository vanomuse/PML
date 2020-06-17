import * as types from './types';


export const updateLanguage = language => ({
    type: types.UPDATE_LANGUAGE,
    payload: language
})

export const updateCity = city => ({
    type: types.UPDATE_CITY,
    payload: city
})

export const updateProfession = profession => ({
    type: types.UPDATE_PROFESSION,
    payload: profession
})

export const updateName = name => ({
    type: types.UPDATE_NAME,
    payload: name
})

export const updatePhone = phone => ({
    type: types.UPDATE_PHONE,
    payload: phone
})

export const updateQualification = qualif => ({
    type: types.UPDATE_QUALIFICATION,
    payload: qualif
})

export const updateExp = exp => ({
    type: types.UPDATE_EXPERIENCE,
    payload: exp
})

export const updateTools = tools => ({
    type: types.UPDATE_TOOLS,
    payload: tools
})