export function requiredRule(value: unknown) {
    let isValid = false;

    if (typeof value === 'string') isValid = value.trim().length > 0;

    if (typeof value === 'number') isValid = value !== 0;

    if (Array.isArray(value)) isValid = value.length > 0;

    return isValid || 'Please type something';
};