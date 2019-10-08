<template>
    <div class="top-products">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="top-product-1">
                            <div class="product-text">
                                <h5>Top Trending</h5>
                                <h4>Men's</h4>
                                <h5>Collection Sneaker</h5>
                            </div>
                            <img src="../../img/sneaker1.jpg" alt="Top Product">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="top-product-1">
                        <div class="product-text">
                            <h4>Top Trending</h4>
                            <h3>Men's</h3>
                            <h3>Collection Sneaker</h3>
                        </div>
                        <img src="../../img/sneaker1.jpg" alt="Top Product">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="top-product-1">
                        <div class="product-text">
                            <h4>Top Trending</h4>
                            <h3>Men's</h3>
                            <h3>Collection Sneaker</h3>
                        </div>
                        <img src="../../img/sneaker1.jpg" alt="Top Product">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .top-products{
        padding-top: 30px;
    }
    .product-text{
        position: absolute;
        font-family: Rubik, Arial, Helvetica, sans-serif;
        top: 20px;
        left: 20px;
    }
    .top-product-1{
        position: relative;
    }
    .top-product-1:hover img{
        transform: scale(1.05);;
        transition: all .3s ease-out 0s
    }


</style>
