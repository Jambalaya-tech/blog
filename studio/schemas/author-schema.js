export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
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
      title: 'Biography',
      name: 'bio',
      type: 'markdown'
    },
    {
      title: 'Awesome portrait',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}