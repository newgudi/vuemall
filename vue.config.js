module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            //系统默认已经有一个别名配置：
              // '@': 'src',
              'assets': "@/assets",
              'common': "@/common",
              'components': "@/components",
              'network': "@/network",
              'views': '@/views'
          }
        }
    }
};