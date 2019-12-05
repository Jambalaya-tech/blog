import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import categorySchema from './category-schema'
import postSchema from './post-schema'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    categorySchema,
    postSchema
  ])
})
