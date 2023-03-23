
import { api } from 'src/boot/axios';
import * as c from './constantsApi';

export async function user(params: string) {
    try {
        let res = await api.get(params);

        return res.data;
    } catch (e) {
        return e;
    };
};