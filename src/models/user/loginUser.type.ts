export interface ILoginUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    vehicles: {
        brand: string,
        model: string,
        costPrice: number,
        totalCost: number,
        status: number,
    }
};