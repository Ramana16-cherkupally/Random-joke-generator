
const mainbody=document.querySelector(".fetchbody")
const fetchUrl="https://icanhazdadjoke.com/"

const fetchdata=()=>{
    fetch(fetchUrl,{
        headers:{
            Accept:"Application/json"
        }
    })
    .then((res)=>{
        console.log(res)
        return res.json()
    }).then((data)=>{
        console.log(data.joke)
        mainbody.innerHTML=data.joke;
    })
    .catch((res)=>{
        console.log(res);
    })

}
fetchdata()
document.getElementById("ApiClick").addEventListener("click",fetchdata)