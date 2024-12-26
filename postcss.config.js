module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 16, // 根元素字体大小
            propList: ['*'], // 需要转换的属性，可以是 '*' 或指定的属性
        },
    },
};