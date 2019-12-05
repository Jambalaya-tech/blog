export default {
  title: 'Blog post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'URL slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Content',
      name: 'content',
      type: 'markdown'
    },
    {
      title: 'Code test',
      name: 'code',
      type: 'code'
    },
    {
      title: 'Author(s)',
      name: 'authors',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'reference',
      to: [{type: 'category'}]
    }
  ]
}