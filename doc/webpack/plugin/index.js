const path=require('path');
let fs = require('fs');


class MyPlugin {
    constructor(options){
        console.log('constructor----------MyPlugin:',options)
    }
    apply(compiler){
        
        console.log(console.log('compiler----------compiler:',compiler))
        compiler.plugin('compilation', compilation => {
            console.log(path,'--path')
            console.log('compiler----------compilation:',compilation)
            let files = fs.readdirSync('del');
            console.log(files,'------files')
            fs.rmdirSync('del')
        })
        // compiler.plugin('emit', (compilation,callback) => {
        //     console.log('compiler----------emit:',compilation.assets)
        //     for(let filePathName in  compilation.assets){
        //         console.log('compiler----------emit---filePathName:',filePathName);
        //         let content = compilation.assets[filePathName].source() || '';
        //         console.log(content,'---content')
        //         compilation.assets[filePathName]={
        //             source(){
        //                 return content;
        //             },
        //             size(){
        //                 return content.length;
        //             }
        //         }

        //     }
        //     return callback()
        // })
    }
}

module.exports=MyPlugin;