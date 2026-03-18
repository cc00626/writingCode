const retry = (fn,times) => {
	fn.catch(()=>{
		if(times <= 0) throw err
		return retry(fn,times - 1)
	})
}

const retry2 = (fn,maxTimes,baseDelay=1000, attempt = 0)=>{
	if(attempt >= maxTimes) throw err
	const delay = baseDelay * (2 ** attempt)
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve()
		},delay)
	}).then(()=>{
		return retryWithBackoff(fn, maxTimes, baseDelay, attempt + 1)
	})
}