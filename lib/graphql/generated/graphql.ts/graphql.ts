/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
};

export type AuthCredentialsDto = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateDepartmentInput = {
  name: Scalars['String'];
};

export type CreatePositionInput = {
  name: Scalars['String'];
};

export type CreateUserInput = {
  department: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  position: Scalars['String'];
  username: Scalars['String'];
};

export type Department = {
  __typename?: 'Department';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDepartment: Department;
  createPosition: Position;
  createUser: User;
  removeDepartment: Department;
  removePosition: Position;
  removeUser: User;
  updateDepartment: Department;
  updatePosition: Position;
  updateUser: User;
};


export type MutationCreateDepartmentArgs = {
  createDepartmentInput: CreateDepartmentInput;
};


export type MutationCreatePositionArgs = {
  createPositionInput: CreatePositionInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveDepartmentArgs = {
  id: Scalars['Int'];
};


export type MutationRemovePositionArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateDepartmentArgs = {
  updateDepartmentInput: UpdateDepartmentInput;
};


export type MutationUpdatePositionArgs = {
  updatePositionInput: UpdatePositionInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Position = {
  __typename?: 'Position';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  department: Department;
  departments: Array<Department>;
  position: Position;
  positions: Array<Position>;
  signIn: AccessToken;
  user: User;
  users: Array<User>;
};


export type QueryDepartmentArgs = {
  id: Scalars['Int'];
};


export type QueryPositionArgs = {
  id: Scalars['Int'];
};


export type QuerySignInArgs = {
  authCredentailsDto: AuthCredentialsDto;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type UpdateDepartmentInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UpdatePositionInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UpdateUserInput = {
  bachelors: Scalars['String'];
  bachelors_status: Scalars['String'];
  current_skills: Scalars['String'];
  current_status: Scalars['String'];
  department: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Int'];
  joining_date: Scalars['DateTime'];
  joining_skills: Scalars['String'];
  joining_status: Scalars['String'];
  last_name: Scalars['String'];
  masters: Scalars['String'];
  masters_status: Scalars['String'];
  password: Scalars['String'];
  phd: Scalars['String'];
  phd_status: Scalars['String'];
  position: Scalars['String'];
  research_interests: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  bachelors: Scalars['String'];
  bachelors_status: Scalars['String'];
  current_skills: Scalars['String'];
  current_status: Scalars['String'];
  department: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Int'];
  joining_date: Scalars['DateTime'];
  joining_skills: Scalars['String'];
  joining_status: Scalars['String'];
  last_name: Scalars['String'];
  masters: Scalars['String'];
  masters_status: Scalars['String'];
  password: Scalars['String'];
  phd: Scalars['String'];
  phd_status: Scalars['String'];
  position: Scalars['String'];
  research_interests: Scalars['String'];
  username: Scalars['String'];
};

export type UserFragmentFragment = { __typename?: 'User', id: number, username: string, password: string, email: string, department: string, position: string, first_name: string, last_name: string, gender: string, joining_status: string, current_status: string, bachelors: string, bachelors_status: string, masters: string, masters_status: string, phd: string, phd_status: string, research_interests: string, joining_skills: string, current_skills: string } & { ' $fragmentName': 'UserFragmentFragment' };

export type CreateOneUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateOneUserMutation = { __typename?: 'Mutation', createUser: (
    { __typename?: 'User' }
    & { ' $fragmentRefs': { 'UserFragmentFragment': UserFragmentFragment } }
  ) };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<(
    { __typename?: 'User' }
    & { ' $fragmentRefs': { 'UserFragmentFragment': UserFragmentFragment } }
  )> };

export type UserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserQuery = { __typename?: 'Query', user: (
    { __typename?: 'User' }
    & { ' $fragmentRefs': { 'UserFragmentFragment': UserFragmentFragment } }
  ) };

export const UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"department"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"joining_status"}},{"kind":"Field","name":{"kind":"Name","value":"current_status"}},{"kind":"Field","name":{"kind":"Name","value":"bachelors"}},{"kind":"Field","name":{"kind":"Name","value":"bachelors_status"}},{"kind":"Field","name":{"kind":"Name","value":"masters"}},{"kind":"Field","name":{"kind":"Name","value":"masters_status"}},{"kind":"Field","name":{"kind":"Name","value":"phd"}},{"kind":"Field","name":{"kind":"Name","value":"phd_status"}},{"kind":"Field","name":{"kind":"Name","value":"research_interests"}},{"kind":"Field","name":{"kind":"Name","value":"joining_skills"}},{"kind":"Field","name":{"kind":"Name","value":"current_skills"}}]}}]} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const CreateOneUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userFragment"}}]}}]}},...UserFragmentFragmentDoc.definitions]} as unknown as DocumentNode<CreateOneUserMutation, CreateOneUserMutationVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userFragment"}}]}}]}},...UserFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userFragment"}}]}}]}},...UserFragmentFragmentDoc.definitions]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;