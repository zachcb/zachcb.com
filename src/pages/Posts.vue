<template>
  <Layout>
    <h1>

    </h1>

    <ul class="pt-10">
      <li v-for="{ node } in $page.posts.edges" :key="node.id" class="text-primary mb-5">
        <g-link :to="`/posts/${node.slug}`">
          <h2 class="text-primary text-3xl font-black tracking-wider">{{ node.title }}</h2>
          <span class="text-secondary text-lg">{{ node.date }}</span>
          <p>{{ node.description }}</p>
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
        hero
        content
      }
    }
  }
}
</page-query>

