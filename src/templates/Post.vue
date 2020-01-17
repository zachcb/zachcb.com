<template>
  <Layout>
    <header class="mb-8">
      <h1 class="text-primary text-4xl font-black">
        {{ $page.post.title }}
      </h1>
      <span class="text-secondary text-lg">{{ $page.post.date }}</span>
    </header>

    <hr>

    <div
      class="content text-secondary text-lg"
      v-html="$page.post.content"
    />
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
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

<style lang="postcss" scoped>
.header {

}

.content {
  font-family: 'Karla', sans-serif;

  & >>> code {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }

  & >>> h2 {
    font-size: responsive 16px 24px;
    font-weight: bold;
    line-height: 3rem;
    margin-top: 2rem;
  }

  & >>> p {
    font-size: responsive 12px 18px;
    font-weight: normal;
    line-height: 1.75rem;
    max-width: 800px;
    margin-bottom: 0.75rem;
  }
}
</style>
