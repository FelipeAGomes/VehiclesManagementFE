import { IVehiclesUser } from "src/models/user/vehiclesUser.type";
import { BaseService, IApiResponse } from "../base.service";
import { AxiosError } from "axios";
import { api } from "src/boot/axios";

class VehiclesService extends BaseService {
    async vehiclesUser(id: number): Promise<IApiResponse<IVehiclesUser>> {
        try {
            const { data: vehicles } = await api.get<IVehiclesUser>(`vehicles/user/${id}`);
            return this.apiResult(vehicles);
        } catch (erro) {
            return this.apiError(erro as AxiosError);
        };
    };
};
export default new VehiclesService();