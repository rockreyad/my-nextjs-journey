import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

// use Segment Options to specify the caching options for a particular page     👇
// export const revalidate = 5;

/** way to fetch the client, use it directly in oyur server components */
const query = gql`
  query Now {
    now(id: "1")
  }
`;
export default async function Page() {
  /** If we deploy this to Vercel and hit this page, we’ll see the same behavior as the page with the plain fetch request. The data is cached at build time! */
  //   const { data, networkStatus, error } = await getClient().query({ query, });

  const { data, error, networkStatus } = await getClient().query({
    query,

    /** we used the context argument to pass fetchOptions to our client (HTTPLink will read them and pass them to the underlying fetch call). */
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  if (error) {
    return <main>{error.message}</main>;
  }
  return (
    <main>
      <p>Nextwork Status : {networkStatus}</p>
      {data.now}
    </main>
  );
}
