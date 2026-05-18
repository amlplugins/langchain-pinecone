/**
 * @amlplugins/langchain-pinecone
 *
 * Thin namespaced re-export of the native @langchain/pinecone SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * LangChain Pinecone integration — PineconeStore vector store for similarity search and RAG retrieval.
 */

import * as _sdk from "@langchain/pinecone";
export * from "@langchain/pinecone";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "@langchain/core";
export * as secondary from "@langchain/core";
export { _secondary };
