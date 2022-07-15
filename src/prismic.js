import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'wimhof'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5Zc2xpU1JBQUFDRUFYT2pJ.VkLvv70B77-9EO-_vUPvv73vv71GBgpZZ--_vTHvv71gFO-_vUvvv73vv73vv73vv71s77-977-977-9fCo',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [/* 
    {
      type: 'udalost',
      path: '/',
    },
   */],
})