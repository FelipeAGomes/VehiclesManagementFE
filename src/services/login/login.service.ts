import { ILoginUser } from "src/models/user/loginUser.type";
import { BaseService, IApiResponse } from "../base.service";
import { AxiosError } from "axios";
import { api } from "src/boot/axios";

class LoginService extends BaseService {
    async loginUser(email: string, password: string): Promise<IApiResponse<ILoginUser>> {
        try {
            const { data: user } = await api.get<ILoginUser>(`users/login/${email}&${password}`)
            return this.apiResult(user);
        } catch (erro) {
            return this.apiError(erro as AxiosError);
        };
    };
};
export default new LoginService();