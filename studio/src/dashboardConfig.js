export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6055b76d9d1382bc6c0c6304",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-pdm854e4",
                  apiId: "742db144-a0e3-4723-8701-4a85410f865c",
                },
                {
                  buildHookId: "6055b76efc8a06a83344c1fb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-kx1heiz5",
                  apiId: "57dda6e9-e040-4c20-98dc-2db4b1322453",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/valdepeace/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-kx1heiz5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
