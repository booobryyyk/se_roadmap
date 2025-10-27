import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",

  title: "SE Roadmap",
  description: "Cool view for concepts and tasks",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Client-Server Architecture',
        link: '/modules/client-server-architecture',
      },
    ],

    sidebar: [
      {
        text: 'Client-Server Architecture',
        link: '/modules/client-server-architecture',
        items: [
          {
            text: 'Concepts',
            link: '/modules/client-server-architecture/concepts/'
          },
          {
            text: 'Practice',
            link: '/modules/client-server-architecture/practice/',
            collapsed: false,
            base: '/modules/client-server-architecture/practice/',
            items: [
              {
                text: 'Local Network Config',
                link: '/local-network-config'
              },
              {
                text: 'Remote Server Availability',
                link: '/remote-server-availability'
              },
              {
                text: 'Website Availability',
                link: '/website-availability'
              }
            ]
          }
        ]
      },
      {
        text: 'Backend',
        link: '/modules/backend',
        base: '/modules/backend',
        items: [
          {
            text: 'Concepts',
            link: '/concepts'
          },
          {
            text: 'Practice',
            link: '/practice',
            items: [],
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/booobryyyk/se_roadmap' }
    ]
  }
})
