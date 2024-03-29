/** @type {import('@docusaurus/types').DocusaurusConfig} */

const SLACK_URL =
  "https://join.slack.com/t/commonfatecommunity/shared_invite/zt-q4m96ypu-_gYlRWD3k5rIsaSsqP7QMg";

module.exports = {
  title: "IAM Zero",
  tagline: "IAM simplified and secure",
  url: "https://iamzero.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Common Fate",
  projectName: "IAM Zero",
  themeConfig: {
    announcementBar: {
      id: "infrastructure_as_code_preview", // Any value that will identify this message.
      content:
        'Developer Preview: apply least privilege findings directly to your AWS CDK or Terraform code. <a target="_blank" rel="noopener noreferrer" href="/infrastructure-as-code">Find out more.</a>',
      backgroundColor: "#1f72fe", // Defaults to `#fff`.
      textColor: "#fff", // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    image: "img/meta.png",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "IAM Zero",
      logo: {
        alt: "IAM Zero Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "getting-started",
          position: "left",
          label: "Docs",
        },
        {
          to: "enterprise",
          activeBasePath: "enterprise",
          label: "Enterprise",
          position: "left",
        },
        {
          to: "infrastructure-as-code",
          activeBasePath: "infrastructure-as-code",
          label: "Infrastructure as Code",
          position: "left",
        },
        {
          href: SLACK_URL,
          label: "Slack",
          position: "right",
        },
        {
          href: "https://github.com/common-fate/iamzero",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        alt: "Common Fate Logo",
        src: "img/common_fate_logo_dark_purple.png",
        href: "https://commonfate.io",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
            {
              label: "Security",
              to: "/docs/security",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: SLACK_URL,
            },
            {
              label: "Twitter",
              href: "https://twitter.com/CommonFateTech",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Common Fate.`,
    },
  },
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Rubik:wght@300;400;500",
  ],
  scripts: [
    {
      src: "https://stats.iamzero.dev/js/index.js",
      async: true,
      defer: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/common-fate/iamzero-website/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
