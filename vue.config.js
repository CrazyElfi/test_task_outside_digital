module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production'
        ? '/test_task_outside_digital/'
        : '/',
    assetsDir: '',
    productionSourceMap: false,
    filenameHashing: true,
}
