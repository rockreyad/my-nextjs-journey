### Why Sever Components ?

- **Performance** - Server components are rendered on the server, so they don't need to be hydrated on the client. This means that the client doesn't need to wait for the server to send the HTML and JavaScript bundle, and then wait for the client to hydrate the components. Instead, the client can render the components immediately. This can significantly improve the time to first paint and time to interactive for your app.

when a route loaded in Next Js the initial HTML rendered on the server.

### Client Components

Client component enable enable us to add client-side interactivity. They pre-rendered on the server and hydrated on the client.

"use client" sits between server-only and client code. It's placed at the top of a file, above imports, to define the cut-off point where it crosses the boundary from the server-only to the client part. Once "use client" is defined in a file, all other modules imported into it, including child components, are considered part of the client bundle.

#### [When to use Server and Client Components](https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components)
