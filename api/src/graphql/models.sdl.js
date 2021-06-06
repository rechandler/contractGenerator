export const schema = gql`
  type Model {
    id: Int
    name: String
    make: Make
    category: Category
  }

  type Query {
    models(input: MakeInput): [Model]
    model(input: ModelSearch): Model
  }

  type Mutation {
    updateModelCategoryInput(input: ModelCategoryInput): [Model]
    deleteModelCategory(id: Int): Model
  }

  input ModelCategoryInput {
    models: [ModelInput]
    makeName: String
    categoryId: Int
  }

  input ModelInput {
    name: String,
  }

  input ModelSearch {
    name: String,
    makeName: String
  }
`
