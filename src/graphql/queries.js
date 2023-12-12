/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactForm = /* GraphQL */ `
  query GetContactForm($id: ID!) {
    getContactForm(id: $id) {
      id
      name
      phone
      email
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContactForms = /* GraphQL */ `
  query ListContactForms(
    $filter: ModelContactFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
