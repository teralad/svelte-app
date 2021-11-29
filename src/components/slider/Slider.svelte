<script>

  let products = [
				{
					"id": 1,
					"name": "Weights",
					"image": "https://picsum.photos/seed/198/280/210",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu hendrerit turpis"
				},{
					"id": 2,
					"name": "product 2",
					"image": "https://picsum.photos/seed/18/280/210",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu hendrerit turpis"
				},{
					"id": 3,
					"name": "product 3",
					"image": "https://picsum.photos/seed/180/280/210",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu hendrerit turpis"
				},{
					"id": 4,
					"name": "product 4",
					"image": "https://picsum.photos/seed/111/280/210",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu hendrerit turpis"
				},{
					"id": 5,
					"name": "product 5",
					"image": "https://picsum.photos/seed/120/280/210",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu hendrerit turpis"
				}
		];


  import { onMount } from 'svelte';

  let Carousel; // for saving Carousel component class
  let carousel; // for calling methods of the carousel instance
  onMount(async () => {
    const module = await import('svelte-carousel');
    Carousel = module.default;
  });

</script>
<div class="container">
  <h3 class="title">Most Searched Products</h3>
  <svelte:component this={Carousel} bind:this={carousel} particlesToShow={3}>
    {#each products as product (product.id)}
      <div class="slide-content"> 
        <img src={product.image} alt={product.name}/>
        <p>
          {product.description}
        </p>
        <span class="seemore"><a href={product.image} target="_blank">See More ></a></span>
      </div>
    {/each}
  </svelte:component>
</div>

<style>
  .title{
    font-size: 24px;
    color: #1a2a34;
    position: relative;
    font-weight: bold;
    text-align: center;
  }
  .title::after{
    content: ' ';
    position: absolute;
    left: 50%;
    width: 70px;
    height: 2px;
    margin-top: 35px;
    background-color: #007dbc;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
  }
  .slide-content {
    width: 300px;
    padding: 10px;
  }
  .slide-content img{
    width: 100%;
    height: auto;
  }
  .seemore {
    text-decoration: underline;
  }
  .seemore a {
    color: #0082c3;
  }
  @media screen  and (max-width:480px){
    .title{
      font-size: 18px;
    }
  }
</style>