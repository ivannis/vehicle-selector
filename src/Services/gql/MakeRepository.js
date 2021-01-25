import { gql } from "graphql-request";

const findMakes = gql`
    query findMakes($limit: Int!) {
        uvdb {
            vehicle_selector {
                uvdb_makes(limit: $limit) {
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

const findMakesByYear = gql`
    query findMakesByYear($year: Int!, $limit: Int!) {
        uvdb {
            vehicle_selector {
                uvdb_makes(uvdb_year_id: $year, limit: $limit) {
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

export const MakeRepository = {
    findMakes,
    findMakesByYear,
}
