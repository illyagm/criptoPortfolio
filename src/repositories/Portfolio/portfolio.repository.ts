import Portfolio, { IPortfolio } from "../../models/Portfolio/portfolio.model";

//new Portfolio

export const db_newPortfolio = async (portfolio: IPortfolio) => {

    const newPortfolio: IPortfolio = new Portfolio(portfolio);
    await newPortfolio.save();

    return newPortfolio;
};

export const db_allPortfolios = async (): Promise<any> => {
    const allPortfolios = await Portfolio.find({});

    return allPortfolios;
};