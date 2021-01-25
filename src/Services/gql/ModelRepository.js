import { gql } from "graphql-request";

const findModels = gql`
    query findModels($limit: Int!) {
        uvdb {
            vehicle_selector {
                uvdb_models(limit: $limit) {
                    cursor {
                        currentPage
                        perPage
                        total
                    }
                    items {
                        id
                        name
                    }
                }
            }
        }
    }
`

const findModelsByMake = gql`
    query findModelsByMake($make: Int!, $limit: Int!) {
        uvdb {
            vehicle_selector {
                uvdb_models(uvdb_make_id: $make, limit: $limit) {
                    cursor {
                        currentPage
                        perPage
                        total
                    }
                    items {
                        id
                        name
                    }
                }
            }
        }
    }
`

export const ModelRepository = {
    findModels,
    findModelsByMake,
}
