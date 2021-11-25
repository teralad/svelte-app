<script>
  import Icon from './Icon.svelte'
  export let title
</script>


<div class="iconbutton" {title}>
  <Icon {title}/>
  <p>
    {title.replaceAll('-', ' ').toUpperCase()}
  </p>  
</div>

<style>
  .iconbutton {
    justify-content: center;
    margin: 3px;
    position: relative;
  }

  .iconbutton p {
    align-items: center;
    font-size: xx-small;
    font-weight: bold;
    align-content: center;
  }
</style>