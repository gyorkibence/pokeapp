import { gql } from '@apollo/client';

export const GET_TYPES = gql`
  query types {
    types {
      results {
        url
        name
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      weight
      height
      sprites {
        front_default
      }
      abilities @include(if: true) {
        is_hidden
        ability {
          name
        }
      }
    }
  }
`;
