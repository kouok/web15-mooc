<template>
    <div class="bg-light pt-4 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-12 p-xl-4 bg-white">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/home/lesson">课程</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/home/ask">问答</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/home/power">动态</router-link>
                        </li>
                    </ul>
                    <router-view></router-view>
                </div>
                <div class="col-xl-4 col-12">
                    <div class="bg-white mt-3">
                        <div class="py-2 px-3  border-bottom">
                            <span>最近访客</span>
                            <span class="float-right">更多&gt;</span>
                        </div>
                        <div class="d-flex justify-content-around p-2 hei">
                            <div class="p-2">
                                <img alt="Card image cap" class="rounded-circle" src="../assets/imgs/tou.png">
                                <div class="">
                                    <p class="card-text">BANGBANG</p>
                                </div>
                            </div>
                            <div class="p-2">
                                <img alt="Card image cap" class="rounded-circle" src="../assets/imgs/tou.png">
                                <div class="">
                                    <p class="card-text">BANGBANG</p>
                                </div>
                            </div>
                            <div class="p-2">
                                <img alt="Card image cap" class="rounded-circle" src="../assets/imgs/tou.png">
                                <div class="">
                                    <p class="card-text">BANGBANG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white mt-3">
                        <div class="py-2 px-3  border-bottom">
                            <span>感兴趣的人</span>
                            <span class="float-right">更多&gt;</span>
                        </div>
                        <div class="d-flex justify-content-around p-2 hei">
                            <div class="p-2">
                                <img alt="Card image cap" class="rounded-circle" src="../assets/imgs/tou.png">
                                <div class="">
                                    <p class="card-text">BANGBANG</p>
                                </div>
                            </div>
                            <div class="p-2">
                                <img alt="Card image cap" class="rounded-circle" src="../assets/imgs/tou.png">
                                <div class="">
                                    <p class="card-text">BANGBANG</p>
                                </div>
                            </div>
                            <div class="p-2">
                                <img alt="Card image cap" class="rounded-circle" src="../assets/imgs/tou.png">
                                <div class="">
                                    <p class="card-text">BANGBANG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/lib/bootstrap.min.css'

    export default {
        name: "Home",
        data() {
            return {}
        },
        mounted() {

        }
    }


</script>

<style scoped>

    @media (min-width: 768px) {
        .hei {
            height: 230px;
        }
    }


    .router-link-exact-active {
        color: #f00;
    }
</style>
