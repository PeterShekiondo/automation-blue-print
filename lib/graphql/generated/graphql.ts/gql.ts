/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "fragment userFragment on User {\n  id\n  username\n  password\n  email\n  department\n  position\n  first_name\n  last_name\n  gender\n  joining_status\n  current_status\n  bachelors\n  bachelors_status\n  masters\n  masters_status\n  phd\n  phd_status\n  research_interests\n  joining_skills\n  current_skills\n}": types.UserFragmentFragmentDoc,
    "mutation CreateOneUser($input: CreateUserInput!) {\n  createUser(createUserInput: $input) {\n    ...userFragment\n  }\n}": types.CreateOneUserDocument,
    "query Users {\n  users {\n    ...userFragment\n  }\n}\n\nquery User($id: Int!) {\n  user(id: $id) {\n    ...userFragment\n  }\n}": types.UsersDocument,
};

export function graphql(source: "fragment userFragment on User {\n  id\n  username\n  password\n  email\n  department\n  position\n  first_name\n  last_name\n  gender\n  joining_status\n  current_status\n  bachelors\n  bachelors_status\n  masters\n  masters_status\n  phd\n  phd_status\n  research_interests\n  joining_skills\n  current_skills\n}"): (typeof documents)["fragment userFragment on User {\n  id\n  username\n  password\n  email\n  department\n  position\n  first_name\n  last_name\n  gender\n  joining_status\n  current_status\n  bachelors\n  bachelors_status\n  masters\n  masters_status\n  phd\n  phd_status\n  research_interests\n  joining_skills\n  current_skills\n}"];
export function graphql(source: "mutation CreateOneUser($input: CreateUserInput!) {\n  createUser(createUserInput: $input) {\n    ...userFragment\n  }\n}"): (typeof documents)["mutation CreateOneUser($input: CreateUserInput!) {\n  createUser(createUserInput: $input) {\n    ...userFragment\n  }\n}"];
export function graphql(source: "query Users {\n  users {\n    ...userFragment\n  }\n}\n\nquery User($id: Int!) {\n  user(id: $id) {\n    ...userFragment\n  }\n}"): (typeof documents)["query Users {\n  users {\n    ...userFragment\n  }\n}\n\nquery User($id: Int!) {\n  user(id: $id) {\n    ...userFragment\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;