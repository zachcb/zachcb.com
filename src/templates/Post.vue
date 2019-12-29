<template>
  <Layout>
    <div class="">
      <h1>{{ $page.post.title }}</h1>
      <span>{{ $page.post.date }}</span>
    </div>

    <div class="article__content" v-html="$page.post.content" />
  </Layout>
</template>

<script>
  export default {
    metaInfo () {
      return {
        title: this.$page.post.title
      }
    }
  }
</script>

<page-query>
  query Post ($path: String!) {
    post (path: $path) {
      title
      date (format: "DD MMMM, YYYY")
      content
    }
  }
</page-query>
