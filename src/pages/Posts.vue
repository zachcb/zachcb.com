<template>
  <Layout>
    <h1>Blog</h1>
    <ul>
      <li v-for="edge in $page.allPosts.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>

    <Pager :info="$page.allBlogPost.pageInfo"/>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'Posts'
  },

  components: {
    Pager
  }
}
</script>


<page-query>
query {
  posts {
    status
    updatedAt
    createdAt
    id
    title
    jumbotronImage {
      status
      updatedAt
      createdAt
      id
      handle
      fileName
      height
      width
      size
      mimeType
    }
  }
}
</page-query>

