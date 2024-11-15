<script lang="ts" >
let time: any = $state(new Date())
let doubled:  number = $state(1000)
let test_value: any = $state(true); 

$inspect(test_value)

$effect(()=>  {
  let timer = setInterval(()=> {
      time(new Date())
  }, doubled) 

  return ()=> {
    clearInterval(timer)
  }

})


  const toogle = ()=> {
    test_value= !test_value
  }

</script>


<div>hello world</div>
<p>{time}</p>
<p>{test_value}</p>
<button onclick={()=> test_value = !test_value} >toogle</button>
