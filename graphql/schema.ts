import { gql } from '@apollo/client';

export default gql`
extend type Query {
  hello: String
}`;
