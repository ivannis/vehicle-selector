import { gql } from "graphql-request";

const findYears = gql`
    query findYears($limit: Int!) {
        uvdb {
            vehicle_selector {
                uvdb_years(limit: $limit) {
                    cursor {
                        currentPage
                        perPage
                        total
                    }
                    items {
                        id
                    }
                }
            }
        }
    }
`

const findYearsByModel = gql`
    query findYearsByModel($model: Int!, $limit: Int!) {
        uvdb {
            vehicle_selector {
                uvdb_years(uvdb_model_id: $model, limit: $limit) {
                    cursor {
                        currentPage
                        perPage
                        total
                    }
                    items {
                        id
                    }
                }
            }
        }
    }
`

export const YearRepository = {
    findYears,
    findYearsByModel,
}
