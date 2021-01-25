import { GraphQLClient } from "graphql-request";
import {Config} from "../Config";

export const apiClient = (): GraphQLClient => {
    return new GraphQLClient(Config.API_URL, {
        headers: {
            "x-api-key": Config.API_PUBLIC_KEY,
        },
    })
}