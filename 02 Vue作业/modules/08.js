import Vue from 'vue';
let app = new Vue({
    el: '#app',
    data: {
        books: {
            name: '水浒传',
            author: '施耐庵',
            nums: '123456'
        },
        news:["1国家卫健委派出专家组前往安徽", "2以军方致电加沙居民称导弹将炸你家", "3安徽确诊病例曾2次停留北京", "4网红主播在酒店水壶内撒尿", "5救援队断水驴友却烧水泡茶", "6民政部公布12个涉嫌非法社会组织", "7钟南山:全球通过疫苗免疫需2到3年", "8女子被婆家虐打致死公婆丈夫获刑",  "9安徽合肥一地调整为中风险", "10钟南山晒自己接种新冠疫苗现场图"]
    }
})