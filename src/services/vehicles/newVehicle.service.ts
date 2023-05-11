import { api } from "src/boot/axios";
import { BaseService } from "../base.service";
import { LocalStorage } from "quasar";
import { ILoginUser } from "src/models/user/loginUser.type";
import { AxiosError } from "axios";

const user = LocalStorage.getItem('user') as ILoginUser;

class NewVehicle extends BaseService {

    async newVehicle(model: string, brand: string, costPrice: number, status: number, user: object) {
        try {
            const newVehicle = await api.post(`vehicles`, {
                model,
                brand,
                costPrice,
                status,
                user
            });
            console.log(newVehicle);
            return this.apiResult(newVehicle);

        } catch (erro) {
            return this.apiError(erro as AxiosError);
        };
    };
};

export default new NewVehicle();