import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import authorSchema from './author-schema'
import categorySchema from './category-schema'
import postSchema from './post-schema'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    authorSchema,
    categorySchema,
    postSchema
  ])
})
