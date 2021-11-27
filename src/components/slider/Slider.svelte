<script>

  let products = [
				{
					"id": 1,
					"name": "product 1",
					"image": "https://picsum.photos/seed/198/280/210",
					"description": "Im a product"
				},{
					"id": 2,
					"name": "product 2",
					"image": "https://picsum.photos/seed/18/280/210",
					"description": "Im product 2"
				},{
					"id": 3,
					"name": "product 3",
					"image": "https://picsum.photos/seed/180/280/210",
					"description": "Im product 3"
				},{
					"id": 4,
					"name": "product 4",
					"image": "https://picsum.photos/seed/111/280/210",
					"description": "Im product 4"
				},{
					"id": 5,
					"name": "product 5",
					"image": "https://picsum.photos/seed/120/280/210",
					"description": "Im product 5"
				}
		];


  import { onMount } from 'svelte';

  let Carousel; // for saving Carousel component class
  let carousel; // for calling methods of the carousel instance
  onMount(async () => {
    const module = await import('svelte-carousel');
    Carousel = module.default;
  });

  const handleNextClick = () => {
    carousel.goToNext()
  }
</script>

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

<style>
  .slide-content {
    margin: 5px;
    width: 300px;
    height: 300px;
  }

  .container {
    max-width: 1380px;
    margin: 0 auto;
  }

  .seemore {
    text-decoration: underline;
  }

  .seemore a {
    color: #0082c3;
  }
</style>