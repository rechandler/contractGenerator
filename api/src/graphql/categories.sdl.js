export const schema = gql`
  type Category {
    id: Int!
    name: String
    createdAt: DateTime
    updatedAt: DateTime
    yearsBack: Int
  }

  type Query {
    categoriesForCompany: [Category]
    category(categoryId: Int!): Category
  }

  type Mutation {
    createCategory(input: CategoryInput!): Category
    updateCategory(input: UpdateCategory!): Category
    deleteCategory(id: Int!): Category
  }

  input CategoryInput {
    name: String
    yearsBack: Int
  }

  input UpdateCategory {
    id: Int!
    name: String!
    yearsBack: Int
  }
`
