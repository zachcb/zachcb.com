<template>
  <Layout>
    <ul>
      <template v-for="({ node }, index) in $page.posts.edges">
        <li
          :key="node.id"
          :class="[{
            'border-b-2 border-gray-700 pb-4': index + 1 < $page.posts.edges.length
          }, 'text-primary mb-5']"
        >
          <g-link :to="`/posts/${node.slug}`">
            <span class="text-secondary text-base opacity-75">{{ node.date }}</span>
            <h2 class="text-primary text-3xl font-black tracking-wider">{{ node.title }}</h2>
            <p class="text-secondary text-lg">{{ node.description }}</p>
            <p class="text-secondary text-sm opacity-75">
              <span
                v-for="(tag, index) of node.tags"
                :key="tag"
                class="pr-1"
              >
                #{{ tag }}<span class="pl-2">{{ index + 1 < node.tags.length ? '&#8226' : '' }}</span>
              </span>
            </p>
          </g-link>
        </li>
      </template>
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
        tags
        content
      }
    }
  }
}
</page-query>

