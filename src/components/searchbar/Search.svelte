<script>
  export let query;
</script>

<style>
  .search{
    width:100%;
    padding: 10px 0;
  }
  .search-form {
    padding: 0 15px;
    display: flex;
  }
  .search-input {
    width: calc(100% - 55px);
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 1rem 0.5rem 1rem 1.5rem;
    font-size: 20px;
    background-color: #edeff1;
    border: 0.1rem solid #d4d7d9;
    font-size: 1rem;
  }
  .search-input::placeholder{
    text-transform: uppercase;
  }
  .search-button{
    position: relative;
    width: 40px;
    background-color: #FFF;
    border: 0.1rem solid #d0d5da;
    border-left: none;
  }
  .search-button::after{
    content: '';
    position: absolute;
    top: -0.1rem;
    bottom: -0.1rem;
    width: 1rem;
    background-color: #fff;
    border-top: 0.1rem solid #d0d5da;
    border-bottom: 0.1rem solid #d0d5da;
    -webkit-transform: skewX(
-10deg);
    transform: skewX(
-10deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    left: auto;
    right: -1rem;
    border-right: 0.1rem solid #d0d5da;
  }
  
</style>

<div class="search">
  <form class="search-form" >
    <input bind:value={query} class="search-input" type="search"
    placeholder="Search For A Product, A Sport or A Brand" />
    <button type="submit" class="search-button dec-icon dec-icon-search"></button>
  </form>
</div>
