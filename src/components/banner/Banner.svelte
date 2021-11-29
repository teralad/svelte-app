<div class="banner-wrapper">
    <div class="container banner-wrapper2">
        <div class="banner-content">
            <h1>Get ready to wrap up</h1>
            <h3>Decathlon, Discover yourself</h3>
            <button class="btn btn-yellow">DISCOVER ></button>
        </div>
        <div class="banner-image">
            <img src="../../../desktopimage.jpg" alt="desktopimage">
        </div>
    </div>
</div>
<div class="clearfix"></div>

<style>
    .banner-wrapper2 {
        min-width: 320px;
    }
    .banner-content{
        width: 35%;
        float: left;
    }
    .banner-content h1{
        font-size: 4rem;
        font-weight: bold;
        font-style: italic;
        line-height: normal;
        letter-spacing: normal;
        color: #0082c3;
        text-align: left;
        margin-bottom: 0;
    }
    .banner-content h1::after{
        content: " ";
        width: 100%;
        height: 3px;
        margin-top: 10px;
        margin-bottom: 10px;
        display: block;
        background-color: #0082c3;

    }
    .banner-content h3{
        margin: 8px 43px 8px 0;
        font-size: 26px;
        font-weight: bold;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #1a171b;
    }
    .banner-image{
        width: 60%;
        float: right;
    }
    .banner-image img{
        width: 100%;
    }
    @media screen and (max-width:1200px){
        .banner-content h1{
            font-size: 3rem;
            margin-top: 10px;
        }
        .banner-content h3{
            font-size: 18px;
        }
    }
    @media screen and (max-width:768px){
        .banner-content h1{
            font-size: 1.8rem;
        }
    }
    @media screen and (max-width:480px){
        .banner-content h1{
            font-size: 1.5rem;
            margin-top: 10px;
        }
        .banner-content h3{
            font-size: 14px;
        }
    }
</style>