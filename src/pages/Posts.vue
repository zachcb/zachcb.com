<template>
  <Layout>
    <ul>
      <li v-for="{ node } in $page.posts.edges" :key="node.id" class="text-primary mb-5 hover:bg-gray-800">
        <g-link :to="`/posts/${node.slug}`">
          <span class="text-secondary text-base">{{ node.date }}</span>
          <h2 class="text-primary text-3xl font-black tracking-wider">{{ node.title }}</h2>
          <p class="text-secondary text-lg">{{ node.description }}</p>
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Posts'
  }
}
</script>

<page-query>
query Post {
  posts: allPost {
    edges {
      node {
        title
        date (format: "DD MMMM, YYYY")
        slug
        description
        content
      }
    }
  }
}
</page-query>

