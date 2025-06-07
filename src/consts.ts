import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "喵落阁",
  DESCRIPTION: "克喵的个人博客",
  EMAIL: "me@kemiaosw.top",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "主页",
  DESCRIPTION: "克喵的主页",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "克喵的文章",
};

export const PROJECTS: Metadata = {
  TITLE: "项目",
  DESCRIPTION:
    "克喵部署过的项目",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/kemiaosw",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/Kemeow815",
  },
  {
    NAME: "Website",
    HREF: "https://blog-v5.kemiaosw.top",
  },
];
