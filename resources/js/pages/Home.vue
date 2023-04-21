<template>
    <div class="container mt-5">
        <!--        <div class="row justify-content-center">-->
        <!--            <div class="col-md-8">-->
        <!--                <div class="card">-->
        <!--                    <div class="card-header">Home</div>-->
        <!--                    <button class="btn btn-success">123</button>-->

        <!--                    <div class="card-body">Home Page</div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->

        <!--        <div class="container mt-5">-->
        <!--            <h3 class="text-center text-muted">Our clients</h3>-->
        <!--        </div>-->



        <!--        <trend-->
        <!--            :data="[0, 2, 3, 4, 5, 6,5,6,6,7,9,9,8,10 ]"-->
        <!--            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"-->
        <!--            auto-draw-->
        <!--            smooth>-->
        <!--        </trend>-->
        <!--        <div class="container">-->


        <p>
            In our modern era, it is essential for businesses to have a strong online presence in order to attract more
            customers and increase sales. If you want your business to be successful and recognizable, it must be
            present online, where a huge number of your potential customers are now.
        </p>
        <p>
            Our company specializes in creating and promoting business on the Internet. You just need to contact us and
            we will take care of this matter. We will provide you with a full range of services.
        </p>
        <p>
            We can create an Instagram page for your business and promote it to the point of bringing a lot of potential
            customers to your site. We can also create an online store with a quality design that will work on all
            devices and will be comfortable for customers.
        </p>
        <p>
            We can raise your site to the top of Google so that customers can find you on their own without having to
            call and clarify information. As a result of our work, your business will noticeably increase and you will
            be able to receive more profit. Reliability, quality and results are guaranteed!
        </p>
        <p>
            The chart you can see shows the increase in sales of one company that ordered a full package of our
            services. The data is given as a percentage per order unit. As you can see, after our work, sales increased
            by 46 percent
        </p>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <apexchart :width="width" type="bar" :options="chartOptions" :series="series"></apexchart>
                <p style=" font-size: 0.5rem;">This is just an illustration, the data may not match reality</p>
            </div>
        </div>

    </div>
</template>

<script>


export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    id: 'profit-graphs',
                    toolbar: {
                        show: false
                    },
                },
                xaxis: {
                    categories: ['start', 'instagram', 'site', 'google'],
                    labels: {}
                },
                colors: ["grey", "#42729d"]
            },
            series: [{
                name: 'Before you come to us',
                data: [30, 40, 35, 34]
            },
                {
                    name: 'After',
                    data: [30, 50, 55, 80]
                }],
            width: 500
        }
    },
    beforeMount() {
        this.checkWidth();
    },
    methods: {
        checkWidth() {
            if (window.screen.width < 500) {
                this.width = 300;
            }
        }
    }
}
</script>
<style scoped>
.test {
    border: 1px solid yellow;
}
.center {
    margin: 0 auto;
    /*width: 80%;*/
}

.text-center {
    text-align: center;
}
</style>
