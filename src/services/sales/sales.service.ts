import { ISalesUser } from "src/models/user/salesUser.type";
import { BaseService, IApiResponse } from "../base.service";
import { AxiosError } from "axios";
import { api } from "src/boot/axios";

class SalesService extends BaseService {
    async salesUser(id: number): Promise<IApiResponse<ISalesUser>> {
        try {
            const { data: sales } = await api.get<ISalesUser>(`sales/user/${id}`);
            return this.apiResult(sales);
        } catch (erro) {
            return this.apiError(erro as AxiosError);
        };
    };
};
export default new SalesService();