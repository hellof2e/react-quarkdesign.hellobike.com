/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Index from "@/views/Index.vue";
import Main from "@/views/Main.vue";
import Guide from "@/views/Guide.vue";
import Component from "@/views/Component.vue";

const pagesRouter: Array<RouteRecordRaw> = [];
const pagesEnRouter: Array<RouteRecordRaw> = [];
const guideRouters: Array<RouteRecordRaw> = [];
const guideEnRouters: Array<RouteRecordRaw> = [];

/** react 中英文文档 */
const modulesPageReact = (import.meta as any).glob(
  "/src/docs_react/docs/**/doc-react.zh-CN.md"
);
for (const path in modulesPageReact) {
  const name = (
    /docs_react\/docs\/(.*)\/doc-react.zh-CN.md/.exec(path) as any[]
  )[1];
  pagesRouter.push({
    path: `/zh-CN/component/${name}`,
    component: modulesPageReact[path],
    name: `zh-CN/component/${name}`,
  });
}

const modulesEnPageReact = (import.meta as any).glob(
  "/src/docs_react/docs/**/doc-react.en-US.md"
);
for (const path in modulesEnPageReact) {
  const name = (
    /docs_react\/docs\/(.*)\/doc-react.en-US.md/.exec(path) as any[]
  )[1];
  pagesEnRouter.push({
    path: `/en-US/component/${name}`,
    component: modulesEnPageReact[path],
    name: `en-US/component/${name}`,
  });
}

/** 指南部分: 本工程 src/docs 文档 */
const modulesDocs = (import.meta as any).glob("/src/docs/*.zh-CN.md");
for (const path in modulesDocs) {
  const name = (/docs\/(.*).zh-CN.md/.exec(path) as any[])[1];

  guideRouters.push({
    path: `/zh-CN/guide/${name}`,
    component: modulesDocs[path],
    name: `zh-CN/guide/${name}`,
  });
}
const modulesEnDocs = (import.meta as any).glob("/src/docs/*.en-US.md");
for (const path in modulesEnDocs) {
  const name = (/docs\/(.*).en-US.md/.exec(path) as any[])[1];

  guideEnRouters.push({
    path: `/en-US/guide/${name}`,
    component: modulesEnDocs[path],
    name: `en-US/guide/${name}`,
  });
}

// 自定义路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "/",
    component: Main,
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    children: [
      {
        path: "/zh-CN/guide",
        name: "guide",
        component: Guide,
        children: guideRouters,
      },
      {
        path: "/en-US/guide",
        name: "enGuide",
        component: Guide,
        children: guideEnRouters,
      },
      {
        path: "/zh-CN/component",
        name: "component",
        component: Component,
        children: pagesRouter,
      },
      {
        path: "/en-US/component",
        name: "enComponent",
        component: Component,
        children: pagesEnRouter,
      },
    ],
  },
];

// 404 路由
routes.push({
  name: "notFound",
  path: "/:path(.*)+",
  redirect: {
    name: "/",
  },
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const id = to.hash.split("#")[1];
      const ele = document.getElementById(id);
      setTimeout(() => {
        ele && ele.scrollIntoView(true);
      });
    }
  },
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
