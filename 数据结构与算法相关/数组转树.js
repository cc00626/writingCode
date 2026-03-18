// 测试数据
const arrayData = [
  { id: 1, name: '部门A', pid: 0 },
  { id: 2, name: '部门B', pid: 1 },
  { id: 3, name: '部门C', pid: 1 },
  { id: 4, name: '部门D', pid: 2 },
  { id: 5, name: '部门E', pid: 2 },
  { id: 6, name: '部门F', pid: 3 },
]

const ToTree = (arrayData,id=0,list)=>{
	for(const item of arrayData){
		if(item.pid === id){
			list.push(item)
		}
	}
	
	for(const item of list){
		item.children = []
		ToTree(arrayData,item.id,item.children)
		if (item.children.length === 0) {
			delete item.children;
		}
	}
	
	return list
}

//时间复杂度优化
function arrayToTreeMap(arr, rootId = 0) {
    const res = []
    const nodesMap = new Map()

    for (const v of arr) {
        const {pid, id, ...k} = v
        const node = {
            ...k,
            id,
            children: []
        }
        nodesMap.set(id, node)
        if (pid === rootId) {
            res.push(node)
        } else { 
            nodesMap.get(pid)?.children.push(node)
        }
    }

    return res
}

const res = ToTree(arrayData, 0, []);
console.log(JSON.stringify(res))