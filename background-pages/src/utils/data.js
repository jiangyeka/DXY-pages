function createUsers(count) {
    const nameList = ["张三", "佛寺", "汉隶", "立新", "王旭", "瓯江", "谢琪", "王五", "里斯"]
    const professionList = ["后端", "ic", "算法", "开发", "测试", "医生", "主播", "间谍", "特务", "厨师", "保安", "司机", "工人"]
    return new Array(count).fill({
        checked: false,
    }).map((item, index) => {
        return {
            ...item,
            name: nameList[Math.floor(Math.random() * nameList.length)],
            profession: professionList[Math.floor(Math.random() * professionList.length)],
            id: index + 1
        }
    })
}
//Create
const userList = createUsers(12)

//Retrieve
export function getInfo(data) {
    const { pageSize, currentPage, keyword } = data
    const temp = userList.filter(item => item.name.indexOf(keyword) !== -1)
    return {
        showingItems: JSON.parse(JSON.stringify(temp.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
        ))),
        totalCount: temp.length,
        pageCount: Math.ceil(temp.length / pageSize) || 1
    }
}
// Delete
export function removeItem(target) {
    const index = userList.findIndex(item => item.id === target.id)
    userList.splice(index, 1)
}
// Update
export function updateItem(value, target) {
    const index = userList.findIndex((item) => item.id === target.id)
    userList[index].name = value

}
// 格式化当前url
export function parseHash(hash) {
    const obj = {}
    let res
    hash = decodeURIComponent(hash)
    const reg = /([^#&?]+)=([^&]*)/g
    while ((res = reg.exec(hash))) {
        obj[res[1]] = res[2]
    }
    return obj
}





