import { emailPattern } from "src/utils/validations/regexPatterns/emailPattern.utils";

export function emailRule(value: string) {
    const isValid = emailPattern.test(value);
    return isValid || 'Invalid Email';
};