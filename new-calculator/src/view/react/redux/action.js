
export const CHANGE_INPUT = "CHANGE_INPUT";

export function createChangeInputAction(value) {
    return {
        type: CHANGE_INPUT,
        value: value,
    };
}