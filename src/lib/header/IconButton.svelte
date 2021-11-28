<script>
  import Icon from './Icon.svelte'
  export let title
  export let className
</script>


<div class="iconbutton {className}"  {title}>
  <Icon {title}/>
  <p>
    {title.replaceAll('-', ' ').toUpperCase()}
  </p>  
</div>

<style>
  .iconbutton {
    justify-content: center;
    margin: 10px 10px;
    position: relative;
    text-align: center;
  }

  .iconbutton p {
    align-items: center;
    font-size: xx-small;
    font-weight: bold;
    align-content: center;
    margin: 0;
  }
</style>