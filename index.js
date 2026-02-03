var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/app.css?url
var app_default = "/build/_assets/app-TAEKP2O2.css?url";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: app_default }
], loader = async ({ context }) => json({
  shop: context.queryShop.getShopName()
});
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/apps.proxy.tsx
var apps_proxy_exports = {};
__export(apps_proxy_exports, {
  action: () => action,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";

// app/shopify.server.ts
import { shopifyApp } from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import { restResources } from "@shopify/shopify-api/rest/admin/2024-01";

// app/db.server.ts
import { PrismaClient } from "@prisma/client";
var prisma;
global.__db__ || (global.__db__ = new PrismaClient()), prisma = global.__db__;
var db_server_default = prisma;

// app/shopify.server.ts
var shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecret: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  isEmbeddedApp: !0,
  sessionStorage: new PrismaSessionStorage(db_server_default),
  restResources
}), authenticate = shopify.authenticate, apiVersion = shopify.apiVersion;

// app/services/design.service.ts
var DesignService = class {
  async getDesigns(shop) {
    try {
      return await db_server_default.design.findMany({
        where: { shop },
        orderBy: { createdAt: "desc" }
      });
    } catch (error) {
      throw console.error("Error fetching designs:", error), new Error("Failed to fetch designs");
    }
  }
  async saveDesign(shop, designData) {
    try {
      return await db_server_default.design.create({
        data: {
          shop,
          name: designData.name,
          modelUrl: designData.modelUrl,
          customText: designData.customText,
          data: designData.data
        }
      });
    } catch (error) {
      throw console.error("Error saving design:", error), new Error("Failed to save design");
    }
  }
  async deleteDesign(shop, designId) {
    try {
      return await db_server_default.design.delete({
        where: { id: designId }
      }), { success: !0 };
    } catch (error) {
      throw console.error("Error deleting design:", error), new Error("Failed to delete design");
    }
  }
  async getDesignById(shop, designId) {
    try {
      return await db_server_default.design.findFirst({
        where: { id: designId, shop }
      });
    } catch (error) {
      throw console.error("Error fetching design:", error), new Error("Failed to fetch design");
    }
  }
}, designService = new DesignService();

// app/routes/apps.proxy.tsx
var loader2 = async ({ request }) => {
  try {
    let { session } = await authenticate.public.appProxy(request);
    if (!session)
      return json2({ error: "Unauthorized" }, { status: 401 });
    let designs = await designService.getDesigns(session.shop);
    return json2({ designs, success: !0 });
  } catch (error) {
    return console.error("Loader error:", error), json2({ error: "Failed to load designs" }, { status: 500 });
  }
}, action = async ({ request }) => {
  if (request.method !== "POST")
    return json2({ error: "Method not allowed" }, { status: 405 });
  try {
    let { session } = await authenticate.public.appProxy(request);
    if (!session)
      return json2({ error: "Unauthorized" }, { status: 401 });
    let formData = await request.formData(), designData = formData.get("designData"), designName = formData.get("designName");
    if (!designData || !designName)
      return json2(
        { error: "Missing required fields" },
        { status: 400 }
      );
    let savedDesign = await designService.saveDesign(
      session.shop,
      {
        name: designName,
        data: JSON.parse(designData)
      }
    );
    return json2({ success: !0, design: savedDesign });
  } catch (error) {
    return console.error("Action error:", error), json2({ error: "Failed to save design" }, { status: 500 });
  }
};

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var loader3 = async ({ context }) => json3({
  welcomeMessage: "Welcome to Sudae 3D Builder"
});
function Index() {
  let { welcomeMessage } = useLoaderData();
  return /* @__PURE__ */ jsxDEV3("div", { className: "app-container", children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: welcomeMessage }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("p", { children: "Your Shopify 3D customization app is ready." }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("p", { children: "Configure your app in the admin panel to get started." }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-E6HA5J5U.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-JDKQUI7I.js", "/build/_shared/chunk-MGIEZ2GD.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WGYRUHSW.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.proxy": { id: "routes/apps.proxy", parentId: "root", path: "apps/proxy", index: void 0, caseSensitive: void 0, module: "/build/routes/apps.proxy-HC5UQU4F.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-CRPNZZ56.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "64dd4ab0", hmr: { runtime: "/build/_shared\\chunk-MGIEZ2GD.js", timestamp: 1770032248112 }, url: "/build/manifest-64DD4AB0.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/apps.proxy": {
    id: "routes/apps.proxy",
    parentId: "root",
    path: "apps/proxy",
    index: void 0,
    caseSensitive: void 0,
    module: apps_proxy_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
