import { gql } from "graphql-request";

const findDefinitions = gql`
    query findDefinitions($model: Int!, $year: Int!, $limit: Int!) {
        uvdb {
            vehicle_selector {
                uvdb_vehicle_definitions(uvdb_model_id: $model, uvdb_year_id: $year, limit: $limit) {
                    cursor {
                        currentPage
                        perPage
                        total
                    }
                    items {
                        id
                        name
                        description
                        uvdb_make {
                            name
                        }
                        uvdb_model {
                            name
                        }
                    }
                }
            }
        }
    }
`

export const CarRepository = {
    findDefinitions,
}
