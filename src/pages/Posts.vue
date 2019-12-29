<template>
  <Layout>
    <h1>Blog</h1>
    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
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
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

