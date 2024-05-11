import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  cache: new InMemoryCache(),
});

/**
 * Used to get API category request
 * @returns Promise
 */
const GetCategory = async () => {
  const query = gql`
    query Categories {
      categories(first: 10) {
        id
        name
        slug
        icon {
          url
        }
      }
    }
  `;
  try {
    const { data } = await client.query({
      query,
    });
    return data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export default {
  GetCategory,
};
