const createPosts = require(`./src/utiles/createPosts`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
}
