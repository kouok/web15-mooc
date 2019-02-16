<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="#">
                            <img alt="" src="../assets/imgs/h_03.jpg">
                        </a>
                        <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                                class="navbar-toggler" data-target="#navbarNav" data-toggle="collapse" type="button">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav li_hei">
                                <li class="nav-item active ml-4">
                                    <a class="nav-link" href="#">首页 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item ml-xl-4">
                                    <a class="nav-link" href="#">课程体系</a>
                                </li>
                                <li class="nav-item ml-xl-4">
                                    <a class="nav-link" href="#">答疑社区</a>
                                </li>
                                <li class="nav-item ml-xl-4">
                                    <a class="nav-link" href="#">共享资料</a>
                                </li>
                                <li class="nav-item ml-xl-4">
                                    <a class="nav-link iconfont" href="#">
                                        <input class="hidd" type="text">
                                        <span>&#xe624;</span>
                                    </a>
                                </li>
                                <li class="nav-item ml-xl-4">
                                    <a class="nav-link" href="#">个人中心</a>
                                </li>
                                <li class="nav-item ml-xl-4">
                                    <a class="nav-link" href="#">
                                        <span>怒切萝卜</span>
                                        <img alt="" class="rounded-circle wid" src="../assets/imgs/tou.png">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div class="bg_img">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4">
                        <div class="media mt-5">
                            <img alt="Generic placeholder image" class="rounded-circle align-self-start mr-3"
                                 src="../assets/imgs/tou.png">
                            <div class="media-body text-white">
                                <h5 class="mt-0">怒切萝卜</h5>
                                <p>身份类别： 学员</p>
                                <p>个性签名.....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row iconfont hei">
                <div class="col-xl-2 col-4">
                    <router-link class="ml-xl-3" to="/home">&#xe600;我的主页</router-link>
                </div>
                <div class="col-4 col-xl-2">
                    <router-link class="ml-xl-5" to="/Dynamic">&#xe602;好友动态</router-link>
                </div>
                <div class="col-4 col-xl-2">
                    <router-link class="ml-xl-5" to="/collect">&#xe60c;收藏夹</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import '../assets/fonts/iconfont.css'
    import '../assets/lib/bootstrap.min.css'

    export default {
        name: ""
    }
</script>

<style scoped>
    .li_hei {
        line-height: 40px;
    }

    .hidd {
        width: 100px;
        border: 0;
        outline: none;
    }

    .wid {
        width: 2rem;
    }

    .bg_img {
        background: url("../assets/imgs/banner.png") no-repeat center;
        height: 240px;
    }

    .hei {
        height: 2.8rem;
        line-height: 2.8rem;
        font-weight: 700;
    }

    @media (min-width: 768px) {

    }

    .router-link-active {
        color: #f00;
    }
</style>
