import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'vojtikuvreactapp'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5ZckhIZUJFQUFDY0F6NXdG.77-9RxQ_77-977-9G--_ve-_ve-_ve-_vW4977-9Gxk777-9Lhrvv71z77-977-977-977-977-9CAvvv73vv73vv70',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'udalost',
      path: '/',
    },
  ],
})