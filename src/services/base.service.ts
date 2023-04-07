import { AxiosError } from "axios";

export type IApiResponse<T> = [null, T] | [AxiosError];

export class BaseService {
    apiResult<T>(apiResponse: T): IApiResponse<T> {
        return [null, apiResponse];
    };
    apiError(erro: AxiosError): [AxiosError] {
        return [erro as AxiosError];
    };
}