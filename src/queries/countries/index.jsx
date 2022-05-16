import {
    gql
    } from "@apollo/client";

const GET_NAME_COUNTRY = gql`
    {
        countries {
            name
            code
            phone
            emoji
            emojiU
            currency
            languages{
                code
                name
                native
            }
            capital
            continent {
                code
                name
            }
        }
    }
`

// Intenté hacer la consulta por nombre, pero solo encontré esta por ID.
// Viendome en esa circunstancia donde la bd no me permitía hacer una query diferente, 
// decidí hacer una consulta general. Para así filtrar por nombre como mostraba la imagen.

// const ALL_COUNTRIES = gql`
    
//     query countries($code: ID!){
//     country(code: $code) {
//         name
//         native
//         capital
//         emoji
//         currency
//         continent {
//             code
//             name
//         }
//         languages {
//             code
//             name
//         }
//         }
//     } 
// `

export { GET_NAME_COUNTRY }; 