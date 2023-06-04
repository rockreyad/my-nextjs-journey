### What is SSR ?

Server-Side Rendering is a technique that allows to pre-render website pages on the server and serve them to the client as HTML files. SSR improve SEO and optimize performance for users with slow interent connections.

### What is SSG ?

Static site generation is a method of building websites that pre-renders all pages of a website at build time and serves those pre-rendered pages.

### Page Directory

all pages inside Next.Js app directory are server components by default so we can't use anything that uses context, state and so on.

using `use client` top of the component making it client component.
