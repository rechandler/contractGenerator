import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Category: ResolverTypeWrapper<Category>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CategoryInput: CategoryInput;
  Company: ResolverTypeWrapper<Company>;
  Contract: ResolverTypeWrapper<Contract>;
  CreateBasicInfoInput: CreateBasicInfoInput;
  CreateCompanyInput: CreateCompanyInput;
  CreateContractInput: CreateContractInput;
  CreateDealershipInput: CreateDealershipInput;
  CreateMakeInput: CreateMakeInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateNoteInput: CreateNoteInput;
  CreateSourceInput: CreateSourceInput;
  CreateTermInput: CreateTermInput;
  CreateUserInput: CreateUserInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Dealership: ResolverTypeWrapper<Dealership>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Make: ResolverTypeWrapper<Make>;
  MakeInput: MakeInput;
  Model: ResolverTypeWrapper<Model>;
  ModelCategoryInput: ModelCategoryInput;
  ModelInput: ModelInput;
  ModelSearch: ModelSearch;
  Mutation: ResolverTypeWrapper<{}>;
  Note: ResolverTypeWrapper<Note>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  Response: ResolverTypeWrapper<Response>;
  Source: ResolverTypeWrapper<Source>;
  Term: ResolverTypeWrapper<Term>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateCategory: UpdateCategory;
  UpdateCompanyInput: UpdateCompanyInput;
  UpdateContractInput: UpdateContractInput;
  UpdateDealershipInput: UpdateDealershipInput;
  UpdateMakeInput: UpdateMakeInput;
  UpdateNoteInput: UpdateNoteInput;
  UpdateSourceInput: UpdateSourceInput;
  UpdateTermInput: UpdateTermInput;
  UpdateUserInput: UpdateUserInput;
  Upload: ResolverTypeWrapper<Upload>;
  User: ResolverTypeWrapper<User>;
  VehicleResponse: ResolverTypeWrapper<VehicleResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Category: Category;
  Int: Scalars['Int'];
  String: Scalars['String'];
  CategoryInput: CategoryInput;
  Company: Company;
  Contract: Contract;
  CreateBasicInfoInput: CreateBasicInfoInput;
  CreateCompanyInput: CreateCompanyInput;
  CreateContractInput: CreateContractInput;
  CreateDealershipInput: CreateDealershipInput;
  CreateMakeInput: CreateMakeInput;
  Boolean: Scalars['Boolean'];
  CreateNoteInput: CreateNoteInput;
  CreateSourceInput: CreateSourceInput;
  CreateTermInput: CreateTermInput;
  CreateUserInput: CreateUserInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Dealership: Dealership;
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Make: Make;
  MakeInput: MakeInput;
  Model: Model;
  ModelCategoryInput: ModelCategoryInput;
  ModelInput: ModelInput;
  ModelSearch: ModelSearch;
  Mutation: {};
  Note: Note;
  Query: {};
  Redwood: Redwood;
  Response: Response;
  Source: Source;
  Term: Term;
  Time: Scalars['Time'];
  UpdateCategory: UpdateCategory;
  UpdateCompanyInput: UpdateCompanyInput;
  UpdateContractInput: UpdateContractInput;
  UpdateDealershipInput: UpdateDealershipInput;
  UpdateMakeInput: UpdateMakeInput;
  UpdateNoteInput: UpdateNoteInput;
  UpdateSourceInput: UpdateSourceInput;
  UpdateTermInput: UpdateTermInput;
  UpdateUserInput: UpdateUserInput;
  Upload: Upload;
  User: User;
  VehicleResponse: VehicleResponse;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  yearsBack?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Dealerships?: Resolver<Array<Maybe<ResolversTypes['Dealership']>>, ParentType, ContextType>;
  Categories?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType>;
  Models?: Resolver<Array<Maybe<ResolversTypes['Model']>>, ParentType, ContextType>;
  Source?: Resolver<Array<Maybe<ResolversTypes['Source']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  vin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  make?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ownersName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ownersEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DealershipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dealership'] = ResolversParentTypes['Dealership']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  din?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MakeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Make'] = ResolversParentTypes['Make']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  makeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Model'] = ResolversParentTypes['Model']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  make?: Resolver<Maybe<ResolversTypes['Make']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBasicInfo?: Resolver<Maybe<ResolversTypes['Source']>, ParentType, ContextType, RequireFields<MutationCreateBasicInfoArgs, never>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'input'>>;
  createMake?: Resolver<ResolversTypes['Make'], ParentType, ContextType, RequireFields<MutationCreateMakeArgs, 'input'>>;
  createNote?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType, RequireFields<MutationCreateNoteArgs, 'input'>>;
  createSource?: Resolver<Maybe<ResolversTypes['Source']>, ParentType, ContextType>;
  createTerm?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType, RequireFields<MutationCreateTermArgs, never>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteMake?: Resolver<ResolversTypes['Make'], ParentType, ContextType, RequireFields<MutationDeleteMakeArgs, 'id'>>;
  deleteModelCategory?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType, RequireFields<MutationDeleteModelCategoryArgs, never>>;
  deleteNote?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType, RequireFields<MutationDeleteNoteArgs, 'id' | 'contractId' | 'type'>>;
  deleteTerm?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType, RequireFields<MutationDeleteTermArgs, 'termId'>>;
  editTerm?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType, RequireFields<MutationEditTermArgs, never>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'input'>>;
  updateMake?: Resolver<ResolversTypes['Make'], ParentType, ContextType, RequireFields<MutationUpdateMakeArgs, 'id' | 'input'>>;
  updateModelCategoryInput?: Resolver<Maybe<Array<Maybe<ResolversTypes['Model']>>>, ParentType, ContextType, RequireFields<MutationUpdateModelCategoryInputArgs, never>>;
};

export type NoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Contract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType>;
  contractId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allMakes?: Resolver<Array<ResolversTypes['Make']>, ParentType, ContextType>;
  categoriesForCompany?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'categoryId'>>;
  companies?: Resolver<Array<ResolversTypes['Company']>, ParentType, ContextType>;
  contract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<QueryContractArgs, never>>;
  contracts?: Resolver<Array<ResolversTypes['Contract']>, ParentType, ContextType>;
  contractsByUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contract']>>>, ParentType, ContextType>;
  currentUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  dealerships?: Resolver<Array<ResolversTypes['Dealership']>, ParentType, ContextType>;
  getSignedUrl?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<QueryGetSignedUrlArgs, 'filename'>>;
  make?: Resolver<Maybe<ResolversTypes['Make']>, ParentType, ContextType, RequireFields<QueryMakeArgs, 'id'>>;
  makes?: Resolver<Array<ResolversTypes['Make']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType, RequireFields<QueryModelArgs, never>>;
  models?: Resolver<Maybe<Array<Maybe<ResolversTypes['Model']>>>, ParentType, ContextType, RequireFields<QueryModelsArgs, never>>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType, RequireFields<QueryNotesArgs, never>>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['Source']>, ParentType, ContextType, RequireFields<QuerySourceArgs, never>>;
  sources?: Resolver<Array<ResolversTypes['Source']>, ParentType, ContextType>;
  term?: Resolver<ResolversTypes['Term'], ParentType, ContextType, RequireFields<QueryTermArgs, 'termId'>>;
  terms?: Resolver<Array<ResolversTypes['Term']>, ParentType, ContextType>;
  termsForCompany?: Resolver<Maybe<Array<Maybe<ResolversTypes['Term']>>>, ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  vinSearch?: Resolver<Maybe<ResolversTypes['VehicleResponse']>, ParentType, ContextType, RequireFields<QueryVinSearchArgs, never>>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = {
  signedUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Source'] = ResolversParentTypes['Source']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  categories?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  states?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TermResolvers<ContextType = any, ParentType extends ResolversParentTypes['Term'] = ResolversParentTypes['Term']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  months?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mileage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Sources?: Resolver<Array<Maybe<ResolversTypes['Source']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UploadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Upload'] = ResolversParentTypes['Upload']> = {
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dealerships?: Resolver<Array<Maybe<ResolversTypes['Dealership']>>, ParentType, ContextType>;
  contracts?: Resolver<Array<Maybe<ResolversTypes['Contract']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VehicleResponse'] = ResolversParentTypes['VehicleResponse']> = {
  vin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  make?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trim?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  engineSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Contract?: ContractResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Dealership?: DealershipResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Make?: MakeResolvers<ContextType>;
  Model?: ModelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  Source?: SourceResolvers<ContextType>;
  Term?: TermResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Upload?: UploadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  VehicleResponse?: VehicleResponseResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
