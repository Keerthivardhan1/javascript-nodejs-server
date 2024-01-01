// every file is modules 

const name1 =" keerthi"
const name2 = "Frooti"
const name3 =  "ruhi"

console.log(module)
/* 
Module {
  id: '.',
  path: 'C:\\Users\\tekul\\OneDrive\\Desktop\\Nodejs\\Modules',
  -------- ****  exports: {},
  filename: 'C:\\Users\\tekul\\OneDrive\\Desktop\\Nodejs\\Modules\\name.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\tekul\\OneDrive\\Desktop\\Nodejs\\Modules\\node_modules',  
    'C:\\Users\\tekul\\OneDrive\\Desktop\\Nodejs\\node_modules',
    'C:\\Users\\tekul\\OneDrive\\Desktop\\node_modules',
    'C:\\Users\\tekul\\OneDrive\\node_modules',
    'C:\\Users\\tekul\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}

*/

module.exports ={ name1, name2}

// like this other files does not have access to the name3 ---

// what ever we dump in the export we can acess any where
