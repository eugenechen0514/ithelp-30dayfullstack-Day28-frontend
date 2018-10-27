export const identityOnClickSubmit = 'identityOnClickSubmit';

export function onClickSubmit(data) {
    return {
        type: identityOnClickSubmit,
        payload: data,
    };
};