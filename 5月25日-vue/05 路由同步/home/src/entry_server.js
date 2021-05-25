// 服务器

// 引入app
import router from './router';
import app from './main';

// 暴露对象
// export default app;

// 暴漏函数
export default ({url}) => {
    // 添加
    router.push(url);

    return new Promise((resolve, reject) =>{
        // 判断请求的路由是否存在 --- 前端的路由
        // 待路由解析完毕，进行判断
        router.onReady(() => {
            // 判断路由是否存在
            if (router.getMatchedComponents().length) {
                resolve(app);
            } else {
                reject({status: 404,msg: '找不到'})
            }
        })
    })
}