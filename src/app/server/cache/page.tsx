/** If we deploy this to Vercel and hit our production page a few times, we’ll see the same value repeatedly.

This is Next.js’ default caching strategy, if we don’t pass any caching option to our fetch requests or to the page, then Next.js will cache the results when building the page.

 */
export default async function Page() {
  const data = await fetch(
    "https://main--time-pav6zq.apollographos.net/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: '{now (id: "1")}',
      }),
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }, // This is an extension to the standard fetch API from Node.js, and it tells Next.js to revalidate this specific request every 10 seconds
    }
  ).then((res) => res.json());

  return <main>{data.now}</main>;
}
