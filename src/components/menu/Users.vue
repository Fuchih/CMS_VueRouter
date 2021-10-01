<template>
  <div>
    <h2 class="text-center p-3">Books Management</h2>
    <div class="list">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Unit</th>
            <th scope="col">Title</th>
            <th scope="col">HitRate</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in books" :key="item.UID">
            <th scope="row">{{ item.showUnit }}</th>
            <td>{{ item.title }}</td>
            <td>{{ item.hitRate }}</td>
            <td>
              <a href="#" @click.prevent="toDetails(item.UID)">Details</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      books: []
    }
  },
  methods: {
    toDetails(id) {
      this.$router.push('/home/userinfo/' + id)
    },
    async initList() {
      try {
        const { data: res } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
          return this.books = res

      }
      catch (error) {
        console.log(alert(error));
      }
    }
  },
  created() {
    this.initList()
  }
}
</script>

<style lang="scss" scoped>
h2 {
  background-color: #ccc;
}

.list {
  height: 500px;
  overflow-y:auto;
}
</style>
