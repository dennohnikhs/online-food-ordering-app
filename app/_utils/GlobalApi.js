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
      categories(first: 20) {
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

const GetBusiness = async (category) => {
  const query = gql`
    query GetBusiness($slug: String!) {
      restaurants(where: { categories_some: { slug: $slug } }) {
        about
        address {
          longitude
        }
        banner {
          url
        }
        categories {
          id
          name
        }
        name
        slug
        workingHours
        restroType
      }
    }
  `;
  try {
    const { data } = await client.query({
      query,
      variables: { slug: category },
    });
    return data;
  } catch (error) {
    console.log("Error Fetching Restaurants :", error);
    return [];
  }
};

export default {
  GetCategory,
  GetBusiness,
};
