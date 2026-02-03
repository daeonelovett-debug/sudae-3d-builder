import { json, type LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { ShopifyProvider } from "@shopify/remix-oxygen";
import styles from "./styles/app.css?url";

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export const loader = async ({ context }: LoaderFunctionArgs) => {
  return json({
    shop: context.queryShop.getShopName(),
  });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
