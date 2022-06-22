import React from "react";
import ReactMarkdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Typography, List, ListItem, Link } from "@material-ui/core";

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,

        variant: "h1",
      },
    },
    h2: {
      component: Typography,
      props: {
        gutterBottom: true,

        variant: "h3",
        component: "h2",
      },
    },
    h3: {
      component: Typography,
      props: {
        gutterBottom: true,

        variant: "h4",
        component: "h3",
      },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,

        variant: "h5",
        component: "h4",
      },
    },
    h5: {
      component: Typography,
      props: { gutterBottom: true, variant: "h5" },
    },
    h6: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6" },
    },
    p: {
      component: Typography,
      props: { gutterBottom: true, paragraph: true },
    },
    a: {
      component: Link,
      props: {
        className: "markdownLink",
      },
    },
    ul: {
      component: List,
      dense: true,
      props: {
        sx: {
          mb: 2,
          pl: 0,
        },
      },
    },
    li: {
      component: ListItem,
      props: {
        sx: {
          display: "list-item",
          listStylePosition: "inside",
          listStyleType: "circle",
          pl: 0,
          py: "0.25rem",
        },
      },
    },
    pre: {
      props: {
        style: {
          borderRadius: 4,
          marginBottom: "1rem",
          overflow: "auto",
          paddingBottom: "1rem",
          paddingTop: "1rem",
        },
      },
    },
  },
};

export const Markdown: React.FC<{
  [key: string]: unknown;
  children: string;
  options?: MarkdownToJSX.Options;
}> = (props) => {
  return <ReactMarkdown options={options} {...props} />;
};
