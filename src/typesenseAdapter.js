import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: process.env.TYPESENSE_API_KEY, // Be sure to use the search-only-api-key
    nodes: [
      {
        host: "localhost",
        port: process.env.TYPESENSE_PORT,
        protocol: process.env.TYPESENSE_PROTOCOL,
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  additionalSearchParameters: {
    query_by: "firstName,lastName",
    num_typos: 2,
  },
});

export const searchClient = typesenseInstantsearchAdapter.searchClient;

// const search = instantsearch({
//   searchClient,
//   indexName: "users",
// });
