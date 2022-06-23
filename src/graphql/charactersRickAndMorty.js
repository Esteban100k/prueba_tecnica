import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
query findCharacters($pageData: Int) {
  characters(page: $pageData) {
    info {
      count,
      pages
    },
    results {
      id,
      name,
      status,
      species,
      gender,
      origin: location {
        name,
        dimension
      },
      location: location {
        name,
        dimension
      },
      image
    }
  }
}`

export const GET_CHARACTER_BY_ID = gql`
query findCharacterById($idCharacter: ID!) {
  character(id:$idCharacter) {
    id,
    name,
    status,
    species,
    type,
    gender,
    origin: location {
        name,
        dimension
      },
      location: location {
        name,
        dimension
      },
    image
  }
}`