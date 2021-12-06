<script>

  let products = [
				{
					"id": 1,
					"name": "Weights",
					"image": "https://picsum.photos/seed/198/280/210",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu hendrerit turpis",
          "icon": '../../static/weights.svg'
				},{
					"id": 2,
					"name": "product 2",
					"image": "https://picsum.photos/seed/18/280/210",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu hendrerit turpis",
          "icon": '../../static/weights.svg'
				},{
					"id": 3,
					"name": "product 3",
					"image": "https://picsum.photos/seed/180/280/210",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu hendrerit turpis",
          "icon": '../../static/weights.svg'
				},{
					"id": 4,
					"name": "product 4",
					"image": "https://picsum.photos/seed/111/280/210",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu hendrerit turpis",
          "icon": '../../static/weights.svg'
				},{
					"id": 5,
					"name": "product 5",
					"image": "https://picsum.photos/seed/120/280/210",
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu hendrerit turpis",
          "icon": '../../static/weights.svg'
				}
		];


  import { onMount } from 'svelte';

  let Carousel; // for saving Carousel component class
  let carousel; // for calling methods of the carousel instance
  let particlesToShow=3;

	const setWindowWidth = () => {
    if(window.innerWidth < 480){
      particlesToShow = 1
    }
    else {
      particlesToShow = 3
    }
	};

	const debounce = (func, delay) => {
		let timer;

		return function () {
			const context = this;
			const args = arguments;
			clearTimeout(timer);
			timer = setTimeout(() => func.apply(context, args), delay);
		};
	};

  const debouncedSetWindowWidth = debounce(setWindowWidth, 300);

  onMount(async () => {
    const module = await import('svelte-carousel');
    Carousel = module.default;
    setWindowWidth();
		window.addEventListener('resize', debouncedSetWindowWidth);
		
		return () => {
			window.removeEventListener('resize', debouncedSetWindowWidth);
		}

  });

	
	
</script>

<div class="container">
  <h3 class="title">Most Searched Products</h3>
  <svelte:component this={Carousel} bind:this={carousel} particlesToShow={particlesToShow} infinite=false>
    {#each products as product (product.id)}
      <div class="slide-content"> 
        <img src={product.icon} alt={product.name} class="mobile-visible mobile-icon"/>
        <img src={product.image} alt={product.name} class="mobile-hide"/>
        <h4> {product.name} </h4>
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
  .slide-content img{
    width: 90%;
    height: auto;
  }
  .slide-content img.mobile-icon {
    width: 45px;
  }
  .slide-content p{
    width: 90%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;    
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