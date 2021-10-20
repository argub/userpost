import axios from "axios"

async function getData(){

    const {data:user}=await axios ('https://jsonplaceholder.typicode.com/posts?userId=1')
    const {data:post}=await axios ('https://jsonplaceholder.typicode.com/posts?userId=1')

    console.log("user",user)
    console.log("post",post)
  }
function App(){
  getData();
  return(
    <div>
      <h1>
        Hello World
      </h1>
    </div>
  )
}

export default App;

