export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  yearsBack?: Maybe<Scalars['Int']>;
};

export type CategoryInput = {
  name?: Maybe<Scalars['String']>;
  yearsBack?: Maybe<Scalars['Int']>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int'];
  name: Scalars['String'];
  Dealerships: Array<Maybe<Dealership>>;
  Categories: Array<Maybe<Category>>;
  Models: Array<Maybe<Model>>;
  Source: Array<Maybe<Source>>;
};

export type Contract = {
  __typename?: 'Contract';
  id: Scalars['Int'];
  vin: Scalars['String'];
  make: Scalars['String'];
  model: Scalars['String'];
  year: Scalars['Int'];
  ownersName: Scalars['String'];
  User?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownersEmail?: Maybe<Scalars['String']>;
};

export type CreateBasicInfoInput = {
  name?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['Int']>>>;
  states?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateCompanyInput = {
  name: Scalars['String'];
};

export type CreateContractInput = {
  vin: Scalars['String'];
  make: Scalars['String'];
  model: Scalars['String'];
  year: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type CreateDealershipInput = {
  name: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
  din: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type CreateMakeInput = {
  makeName: Scalars['String'];
  display: Scalars['Boolean'];
};

export type CreateNoteInput = {
  message: Scalars['String'];
  author: Scalars['String'];
  id: Scalars['Int'];
  type: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
};

export type CreateSourceInput = {
  name: Scalars['String'];
  companyId: Scalars['Int'];
  categoryId: Scalars['Int'];
};

export type CreateTermInput = {
  name: Scalars['String'];
  months: Scalars['Int'];
  mileage: Scalars['Int'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
};



export type Dealership = {
  __typename?: 'Dealership';
  id: Scalars['Int'];
  name: Scalars['String'];
  address: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
  din: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  users: Array<Maybe<User>>;
};



export type Make = {
  __typename?: 'Make';
  id?: Maybe<Scalars['Int']>;
  makeName?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MakeInput = {
  makeName?: Maybe<Scalars['String']>;
};

export type Model = {
  __typename?: 'Model';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  make?: Maybe<Make>;
  category?: Maybe<Category>;
};

export type ModelCategoryInput = {
  models?: Maybe<Array<Maybe<ModelInput>>>;
  makeName?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
};

export type ModelInput = {
  name?: Maybe<Scalars['String']>;
};

export type ModelSearch = {
  name?: Maybe<Scalars['String']>;
  makeName?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBasicInfo?: Maybe<Source>;
  createCategory?: Maybe<Category>;
  createMake: Make;
  createNote?: Maybe<Note>;
  createSource?: Maybe<Source>;
  createTerm?: Maybe<Term>;
  deleteCategory?: Maybe<Category>;
  deleteMake: Make;
  deleteModelCategory?: Maybe<Model>;
  deleteNote?: Maybe<Array<Maybe<Note>>>;
  deleteTerm?: Maybe<Term>;
  editTerm?: Maybe<Term>;
  updateCategory?: Maybe<Category>;
  updateMake: Make;
  updateModelCategoryInput?: Maybe<Array<Maybe<Model>>>;
};


export type MutationCreateBasicInfoArgs = {
  id?: Maybe<Scalars['Int']>;
  input?: Maybe<CreateBasicInfoInput>;
};


export type MutationCreateCategoryArgs = {
  input: CategoryInput;
};


export type MutationCreateMakeArgs = {
  input: CreateMakeInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateTermArgs = {
  input?: Maybe<CreateTermInput>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteMakeArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteModelCategoryArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationDeleteNoteArgs = {
  id: Scalars['Int'];
  contractId: Scalars['Int'];
  type: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
};


export type MutationDeleteTermArgs = {
  termId: Scalars['Int'];
};


export type MutationEditTermArgs = {
  input?: Maybe<UpdateTermInput>;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategory;
};


export type MutationUpdateMakeArgs = {
  id: Scalars['Int'];
  input: UpdateMakeInput;
};


export type MutationUpdateModelCategoryInputArgs = {
  input?: Maybe<ModelCategoryInput>;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['Int'];
  message: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author: Scalars['String'];
  Contract?: Maybe<Contract>;
  contractId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  allMakes: Array<Make>;
  categoriesForCompany?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  companies: Array<Company>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  contractsByUser?: Maybe<Array<Maybe<Contract>>>;
  currentUser: User;
  dealerships: Array<Dealership>;
  getSignedUrl?: Maybe<Response>;
  make?: Maybe<Make>;
  makes: Array<Make>;
  model?: Maybe<Model>;
  models?: Maybe<Array<Maybe<Model>>>;
  notes?: Maybe<Array<Maybe<Note>>>;
  redwood?: Maybe<Redwood>;
  source?: Maybe<Source>;
  sources: Array<Source>;
  term: Term;
  terms: Array<Term>;
  termsForCompany?: Maybe<Array<Maybe<Term>>>;
  users: Array<User>;
  vinSearch?: Maybe<VehicleResponse>;
};


export type QueryCategoryArgs = {
  categoryId: Scalars['Int'];
};


export type QueryContractArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryGetSignedUrlArgs = {
  filename: Scalars['String'];
};


export type QueryMakeArgs = {
  id: Scalars['Int'];
};


export type QueryModelArgs = {
  input?: Maybe<ModelSearch>;
};


export type QueryModelsArgs = {
  input?: Maybe<MakeInput>;
};


export type QueryNotesArgs = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};


export type QuerySourceArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryTermArgs = {
  termId: Scalars['Int'];
};


export type QueryVinSearchArgs = {
  vin?: Maybe<Scalars['String']>;
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  signedUrl: Scalars['String'];
};

export type Source = {
  __typename?: 'Source';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  company: Company;
  companyId: Scalars['Int'];
  categories?: Maybe<Scalars['JSON']>;
  states?: Maybe<Scalars['JSON']>;
};

export type Term = {
  __typename?: 'Term';
  id: Scalars['Int'];
  name: Scalars['String'];
  months: Scalars['Int'];
  mileage: Scalars['Int'];
  company: Company;
  companyId: Scalars['Int'];
  Sources: Array<Maybe<Source>>;
};


export type UpdateCategory = {
  id: Scalars['Int'];
  name: Scalars['String'];
  yearsBack?: Maybe<Scalars['Int']>;
};

export type UpdateCompanyInput = {
  name?: Maybe<Scalars['String']>;
};

export type UpdateContractInput = {
  vin?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UpdateDealershipInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  din?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type UpdateMakeInput = {
  makeName?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['Boolean']>;
};

export type UpdateNoteInput = {
  message?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  contractId?: Maybe<Scalars['Int']>;
};

export type UpdateSourceInput = {
  name?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
};

export type UpdateTermInput = {
  name?: Maybe<Scalars['String']>;
  months?: Maybe<Scalars['Int']>;
  mileage?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

export type Upload = {
  __typename?: 'Upload';
  filename: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  dealerships: Array<Maybe<Dealership>>;
  contracts: Array<Maybe<Contract>>;
};

export type VehicleResponse = {
  __typename?: 'VehicleResponse';
  vin?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
  trim?: Maybe<Scalars['String']>;
  engineSize?: Maybe<Scalars['String']>;
};

export type Find_Make_By_IdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Find_Make_By_Id = (
  { __typename?: 'Query' }
  & { make?: Maybe<(
    { __typename?: 'Make' }
    & Pick<Make, 'id' | 'makeName' | 'display' | 'createdAt' | 'updatedAt'>
  )> }
);

export type UpdateMakeMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateMakeInput;
}>;


export type UpdateMakeMutation = (
  { __typename?: 'Mutation' }
  & { updateMake: (
    { __typename?: 'Make' }
    & Pick<Make, 'id' | 'makeName' | 'display' | 'createdAt' | 'updatedAt'>
  ) }
);

export type DeleteMakeMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMakeMutation = (
  { __typename?: 'Mutation' }
  & { deleteMake: (
    { __typename?: 'Make' }
    & Pick<Make, 'id'>
  ) }
);

export type MakeFormQueryVariables = Exact<{ [key: string]: never; }>;


export type MakeFormQuery = (
  { __typename?: 'Query' }
  & { models?: Maybe<Array<Maybe<(
    { __typename?: 'Model' }
    & Pick<Model, 'id'>
  )>>> }
);

export type AllmakesVariables = Exact<{ [key: string]: never; }>;


export type Allmakes = (
  { __typename?: 'Query' }
  & { allMakes: Array<(
    { __typename?: 'Make' }
    & Pick<Make, 'id' | 'makeName' | 'display' | 'createdAt' | 'updatedAt'>
  )> }
);

export type CreateMakeMutationVariables = Exact<{
  input: CreateMakeInput;
}>;


export type CreateMakeMutation = (
  { __typename?: 'Mutation' }
  & { createMake: (
    { __typename?: 'Make' }
    & Pick<Make, 'id'>
  ) }
);

export type ContractQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type ContractQuery = (
  { __typename?: 'Query' }
  & { contract?: Maybe<(
    { __typename?: 'Contract' }
    & Pick<Contract, 'id' | 'vin' | 'ownersName' | 'year' | 'make' | 'model' | 'createdAt' | 'updatedAt' | 'ownersEmail'>
  )> }
);

export type ContractByUserVariables = Exact<{ [key: string]: never; }>;


export type ContractByUser = (
  { __typename?: 'Query' }
  & { contractsByUser?: Maybe<Array<Maybe<(
    { __typename?: 'Contract' }
    & Pick<Contract, 'id' | 'vin' | 'make' | 'model' | 'year' | 'ownersName' | 'createdAt'>
  )>>> }
);

export type NoteQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
}>;


export type NoteQuery = (
  { __typename?: 'Query' }
  & { notes?: Maybe<Array<Maybe<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'createdAt' | 'author' | 'message' | 'userId'>
  )>>> }
);

export type CreateNoteMutationVariables = Exact<{
  input: CreateNoteInput;
}>;


export type CreateNoteMutation = (
  { __typename?: 'Mutation' }
  & { createNote?: Maybe<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'createdAt' | 'author' | 'message' | 'userId'>
  )> }
);

export type DeleteNoteMutationVariables = Exact<{
  id: Scalars['Int'];
  contractId: Scalars['Int'];
  type: Scalars['String'];
  userId: Scalars['Int'];
}>;


export type DeleteNoteMutation = (
  { __typename?: 'Mutation' }
  & { deleteNote?: Maybe<Array<Maybe<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'message' | 'author' | 'createdAt' | 'userId'>
  )>>> }
);

export type GetSignedUrlVariables = Exact<{
  filename: Scalars['String'];
}>;


export type GetSignedUrl = (
  { __typename?: 'Query' }
  & { getSignedUrl?: Maybe<(
    { __typename?: 'Response' }
    & Pick<Response, 'signedUrl'>
  )> }
);

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { currentUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
  ) }
);

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categoriesForCompany?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'yearsBack'>
  )>>> }
);

export type CategoryQueryVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type CategoryQuery = (
  { __typename?: 'Query' }
  & { category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'yearsBack'>
  )> }
);

export type CreateCategoryMutationVariables = Exact<{
  input: UpdateCategory;
}>;


export type CreateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateCategory?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'createdAt'>
  )> }
);

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCategoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteCategory?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
  )> }
);

export type YeetVariables = Exact<{
  input: CategoryInput;
}>;


export type Yeet = (
  { __typename?: 'Mutation' }
  & { createCategory?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'createdAt'>
  )> }
);

export type CreateBasicInfoMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  input: CreateBasicInfoInput;
}>;


export type CreateBasicInfoMutation = (
  { __typename?: 'Mutation' }
  & { createBasicInfo?: Maybe<(
    { __typename?: 'Source' }
    & Pick<Source, 'id'>
  )> }
);

export type ContractBasicInfoQueryVariables = Exact<{
  contractId?: Maybe<Scalars['Int']>;
}>;


export type ContractBasicInfoQuery = (
  { __typename?: 'Query' }
  & { source?: Maybe<(
    { __typename?: 'Source' }
    & Pick<Source, 'id' | 'name' | 'categories' | 'states'>
  )>, categoriesForCompany?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  )>>> }
);

export type TermsQueryVariables = Exact<{ [key: string]: never; }>;


export type TermsQuery = (
  { __typename?: 'Query' }
  & { terms: Array<(
    { __typename?: 'Term' }
    & Pick<Term, 'id' | 'name'>
  )> }
);

export type TestVariables = Exact<{
  input: CategoryInput;
}>;


export type Test = (
  { __typename?: 'Mutation' }
  & { createCategory?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'createdAt'>
  )> }
);

export type SourceQueryVariables = Exact<{ [key: string]: never; }>;


export type SourceQuery = (
  { __typename?: 'Query' }
  & { sources: Array<(
    { __typename?: 'Source' }
    & Pick<Source, 'id'>
  )> }
);

export type CreateContractVariables = Exact<{ [key: string]: never; }>;


export type CreateContract = (
  { __typename?: 'Mutation' }
  & { createSource?: Maybe<(
    { __typename?: 'Source' }
    & Pick<Source, 'id'>
  )> }
);

export type FindPricingStructureQueryVariables = Exact<{
  contractId: Scalars['Int'];
}>;


export type FindPricingStructureQuery = (
  { __typename?: 'Query' }
  & { source?: Maybe<(
    { __typename?: 'Source' }
    & Pick<Source, 'id' | 'name' | 'categories' | 'states'>
  )>, termsForCompany?: Maybe<Array<Maybe<(
    { __typename?: 'Term' }
    & Pick<Term, 'id' | 'name'>
  )>>> }
);

export type MakesVariables = Exact<{ [key: string]: never; }>;


export type Makes = (
  { __typename?: 'Query' }
  & { makes: Array<(
    { __typename?: 'Make' }
    & Pick<Make, 'id' | 'makeName' | 'display' | 'createdAt' | 'updatedAt'>
  )> }
);

export type UpdateModelCategoryInputVariables = Exact<{
  input: ModelCategoryInput;
}>;


export type UpdateModelCategoryInput = (
  { __typename?: 'Mutation' }
  & { updateModelCategoryInput?: Maybe<Array<Maybe<(
    { __typename?: 'Model' }
    & Pick<Model, 'name'>
    & { category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    )> }
  )>>> }
);

export type DeleteModelCategoryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type DeleteModelCategory = (
  { __typename?: 'Mutation' }
  & { deleteModelCategory?: Maybe<(
    { __typename?: 'Model' }
    & Pick<Model, 'id'>
  )> }
);

export type ModelQueryVariables = Exact<{
  input: ModelSearch;
}>;


export type ModelQuery = (
  { __typename?: 'Query' }
  & { model?: Maybe<(
    { __typename?: 'Model' }
    & Pick<Model, 'name' | 'id'>
    & { category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'name' | 'id'>
    )> }
  )> }
);

export type ModelsQueryVariables = Exact<{
  input: MakeInput;
}>;


export type ModelsQuery = (
  { __typename?: 'Query' }
  & { models?: Maybe<Array<Maybe<(
    { __typename?: 'Model' }
    & Pick<Model, 'name'>
    & { category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    )> }
  )>>> }
);

export type TermQueryVariables = Exact<{
  termId: Scalars['Int'];
}>;


export type TermQuery = (
  { __typename?: 'Query' }
  & { term: (
    { __typename?: 'Term' }
    & Pick<Term, 'id' | 'name' | 'mileage' | 'months' | 'companyId'>
  ) }
);

export type EditTermMutationVariables = Exact<{
  input: UpdateTermInput;
}>;


export type EditTermMutation = (
  { __typename?: 'Mutation' }
  & { editTerm?: Maybe<(
    { __typename?: 'Term' }
    & Pick<Term, 'id'>
  )> }
);

export type DeleteTermMutationVariables = Exact<{
  termId: Scalars['Int'];
}>;


export type DeleteTermMutation = (
  { __typename?: 'Mutation' }
  & { deleteTerm?: Maybe<(
    { __typename?: 'Term' }
    & Pick<Term, 'id'>
  )> }
);

export type CreateTermVariables = Exact<{
  input: CreateTermInput;
}>;


export type CreateTerm = (
  { __typename?: 'Mutation' }
  & { createTerm?: Maybe<(
    { __typename?: 'Term' }
    & Pick<Term, 'id'>
  )> }
);

export type Vin_SearchVariables = Exact<{
  vin: Scalars['String'];
}>;


export type Vin_Search = (
  { __typename?: 'Query' }
  & { vinSearch?: Maybe<(
    { __typename?: 'VehicleResponse' }
    & Pick<VehicleResponse, 'year' | 'make' | 'model' | 'vin' | 'trim' | 'engineSize'>
  )> }
);
