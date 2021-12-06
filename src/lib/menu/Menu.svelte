<nav >
    <ul class="container">
        <li><a href="/">All Sports</a></li>
        <li><a href="/">Men</a></li>
        <li><a href="/">Women</a></li>
        <li><a href="/">Kids</a></li>
        <li><a href="/">Accessories</a></li>
        <li><a href="/">Nutrition & Body Care</a></li>
    </ul>
</nav>
<style>
    nav{
        background-color: #fff;
        border-top: 3px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    ul{
        display: flex;
        margin: 0 auto;
    }
    li{
        flex: 1;
        list-style: none;
        position: relative;
        padding: 1rem;
        text-align: center;
    }
    li a{
        color: #000;
        text-align: center;
        font-weight: 700;
        
    }
    li:not(:last-child)::after{
        content: '';
        position: absolute;
        height: 2.5rem;
        width: 0.1rem;
        border-right: 0.1rem solid #ccc;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        z-index: 1;
    }
    @media screen and (max-width: 768px){
        nav{
            display: none;
        }
    }
    
</style>