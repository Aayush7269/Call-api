const apiurl = "https://randomuser.me/api/"
// const fethUser = ()=> {
//     fetch(apiurl)
//     .then((response)=>{
//         return response.json()
//     })
//     .then ((data)=>{
//         console.log(data)
//     })
// }

let userlist =[]


const fetchUser = async (params = "?results=10") =>{
    try {
    const response = await fetch(apiurl + params)
    const data = await response.json()
    console.log(data)
    userList = data.results
 displayUser(data.results)
}
catch (error){
    console.log(error)
}
}
fetchUser()
const displayElm = document.getElementById("result")//get element ma #use nagarni
const userElm = document.getElementById("count")


const displayUser = (user)=>{
    console.log(user)
    let str= ""
     user.map((item,i)=>{
        str +=`
        <div class="card" style="width: 18rem;">
  <img src="${item?.picture.large}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item?.name.title} ${item?.name.first} ${item?.name.last}</h5>
    <div class="card-text">
    <div>
    <i class="fa-solid fa-phone"></i>
     ${item?.phone}</div>

    </div>
    <div>
    <i class="fa-solid fa-phone"></i>
     ${item?.email}</div>

    </div>
    <div>
    <i class="fa-solid fa-phone"></i>
     ${item?.location}</div>

    </div>
    
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
     })
     displayElm.innerHTML = str
     userElm.innerHTML= user.length

}

 document.getElementById("select").addEventListener("change", (e) => {
    const {value} = e.target
    const path = "?results=10&gender=" + value
    console.log(e.target.value)
    fetchUser(path)
 })
document.getElementById("search-input")
.addEventListener("keyup", (e)=>{
    const {value} = e.target
    console.log(value)


let filteredUser = userList.filter((item)=>{
    const fullName = (item.name.first + "").toLowerCase()
    return fullName.includes(value.toLowerCase())
})
displayUser(filteredUser)
})