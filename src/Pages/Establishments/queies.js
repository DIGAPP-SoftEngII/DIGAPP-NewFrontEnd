import { gql } from "@apollo/client"

export const ALL_ESTABLISHMENTS_CARD = gql`
    query{
        allEstablishments {
            id
            coverPicture
            establishmentName
            location
            Statistics {
            IQAverage
            SEAverage
            }
        }
    }
`