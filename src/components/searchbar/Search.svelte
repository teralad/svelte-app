<script>
  export let query;
</script>

<style>
  .search-input {
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 10px 20px;
    font-size: 20px;
    margin-bottom: 50px;
  }
</style>

<div class="search">
  <form class="search-form" >
    <input bind:value={query} class="search-input" type="search"
    placeholder="Search decathlon's library of over 1 million products" />
  </form>
</div>
