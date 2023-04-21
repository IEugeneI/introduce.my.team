<template>
    <div class="container mt-5">
                <VueSlickCarousel v-bind="settings">
                    <div class="test">1</div>
                    <div class="test">2</div>
                    <div class="test">3</div>
                    <div class="test">4</div>
                    <template #prevArrow="arrowOption">
                        <div class="custom-arrow">
                            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                        </div>
                    </template>

                    <template #nextArrow="arrowOption">
                        <div class="custom-arrow">
                            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                        </div>
                    </template>

                </VueSlickCarousel>

    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: {VueSlickCarousel},
    data() {
        return {
            settings: {
                "centerMode": true,
                "centerPadding": "20px",
                "focusOnSelect": true,
                "infinite": true,
                "slidesToShow": 3,
                "speed": 500
            },
        }
    },

}
</script>
<style scoped>
.slick-prev:before {
    color: grey;
    font-size: 20px;
}

.slick-next:before {
    color: grey;
    font-size: 20px;
}
</style>
