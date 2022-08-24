import fs from 'fs'
import path from 'path'
// 根据dir 遍历查找md文件并返回vuepress的sidebar，如果是文件夹  文件名将作为标题
const getSidebarList = (dir, currentRootName = '') => {
  // 获取当前文件名
  const currentName = path.basename(dir)
  // 读取文件夹下的所有文件
  const childrenFiles = fs.readdirSync(dir);
  // 基础路径 用于后面拼接页面路径
  const baseName = currentRootName + `/${currentName}`

  // 遍历文件 如果是文件夹则返回vuepress的sidebar组格式{title:"",collapsable:"",children:[]}
  // 否则判断是否是md文件 如果是则拼接路径并返回
  const children = childrenFiles.map((filename) => {
    const currentFile = path.resolve(dir, filename);
    const statDirInfo = fs.statSync(currentFile)
    const name = path.basename(currentFile);
    if (statDirInfo.isDirectory()) {
      return {
        text: name,
        collapsible: true,
        children: getSidebarList(currentFile, baseName)
      }
    } else {
      const name = path.basename(currentFile); // 文件或者文件夹的名称
      const ext = path.extname(currentFile); // 获取后缀名
      const fileName = name.substring(0, name.lastIndexOf(ext))
      if (ext === '.md') {
        if (fileName.toUpperCase() === 'README'){
          return baseName + '/'
        }else{
          return baseName + `/${fileName}`
        }
      } else {
        return ""
      }
    }
  })

  // 过滤数据 如果文件夹下面没有下级文件则不需要生成侧边栏
  return children.filter((item) => {
    if (Object.prototype.toString.call(item) === '[object Object]') {
      return item?.children?.length > 0
    } else {
      return !!item
    }
  })
}

export {
  getSidebarList
}
