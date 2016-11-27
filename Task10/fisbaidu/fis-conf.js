
//js打包配置
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});
// 图片打包
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
//css打包配置
fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});
//html打包配置
fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});

// 开启simple插件
fis.config.set('modules.postpackager', 'simple');
//设置文件合并
fis.config.set('pack', {
    '/pkg/lib.js': [
        'js/main.js',
        'js/weather.js',
    ],
    // 取消下面的注释设置CSS打包规则，CSS打包的同时会进行图片合并
    //图片合并这里要说明一下，不是所有图片都合并的只有指定了"?__sprite"才行，如css：background: url(/img/1px_bg.png?__sprite)的形式，如果有特殊的个性化合并需求就查看api吧
    '/pkg/css/common.css': '**.css'
});
 
// 开启simple对零散资源的自动合并
//如果开启，每一个页面用到的js都会被合并成为一个js，不同页面调用了不同的js也会被分别合并：比如a页面引入了a.js,b.js，b页面引入了b.js,c.js，那么ab将被合并为一个js被a页面引用，bc将合并为另一个js被b页面引用，并都被存放在pkg/下
fis.config.set('settings.postpackager.simple.autoCombine', true);