import {
    gql
    } from "@apollo/client";

const ALL_COUNTRIES = gql`
    
    query countries($code: ID!){
    country(code: $code) {
        name
        native
        capital
        emoji
        currency
            languages {
                code
                name
            }
        }
    }
`
export { ALL_COUNTRIES }; 