function checkTime(){
            let time = new Date();
            let seconds = time.getSeconds();
            return new Promise((resolve, reject)=>
            {
                if (seconds%2 === 0)
                resolve('success')
                else
                reject('try again')                
            })
        }
        checkTime().then(result=>{console.log('Well done,',result)}).catch(failure=>{console.error("You've missed",failure)
          return checkTime()
        })
 
        
function checkTime(){
            let time = new Date();
            let seconds = time.getSeconds();
            console.log(seconds)
            return new Promise((resolve, reject)=>
            {
                if (seconds%2 === 0)
                resolve('success')
                else
                reject('try again')                
            })
        }
checkTime().then(result=>{console.log('Well done,',result)})
.catch(()=>
  { console.log('Wait a second')
    return new Promise((resolve, reject)=>
   {
     setTimeout(()=>{resolve(checkTime())},1000
     )
   }).then(result=>{console.log('Success')})
        })
        
