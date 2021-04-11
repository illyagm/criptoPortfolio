import { IPortfolio } from "./../../models/Portfolio/portfolio.model";
import { IResponse } from "../../interfaces/IResponse.interface";
import { PORTFOLIO_CREATED, PORTFOLIO_DELETED, PORTFOLIO_EDITED } from "../../constants/logs";

export const serv_getAllPortfolios = async (): Promise<IResponse> => {
    try {
        const allPortfolios = await db_allPortfolios();
        return { status: 200, msg: allPortfolios};
    } catch (e) {
        return { status: 400, msg: e.message };
    }
};

export const serv_createPortfolio = async (portfolio: IPortfolio): Promise<IResponse> => {
    try {
        const newPortfolio = await db_newPortfolio(portfolio);
        return { status: 201, msg: PORTFOLIO_CREATED };
    } catch (e) {
        return { status: 400, msg: e.message};
    }
};

export const serv_editPortfolio = async (portfolio: IPortfolio): Promise<IResponse> => {
    try {
        return { status: 201, msg: PORTFOLIO_EDITED };
    } catch (e) {
        return { status: 400, msg: e.message};
    }
}

export const serv_deletePortfolio = async (portfolio: IPortfolio): Promise<IResponse> => {
    try {
        return { status: 201, msg: PORTFOLIO_DELETED };
    } catch (e) {
        return { status: 400, msg: e.message};
    }
}