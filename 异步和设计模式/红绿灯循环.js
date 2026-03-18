function red(){
	console.log('red')
}


function yellow(){
	console.log('yellow')
}


function green(){
	console.log('green')
}

function start(fn,time){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			fn()
			resolve()
		},time)
	})
}


while(true){
	await start(red,2000)
	await start(yellow,2000)
	await start(green,2000)
}