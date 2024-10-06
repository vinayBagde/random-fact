let url = "https://catfact.ninja/fact";

let btn = document.querySelector("#btn");
btn.addEventListener("click", async () => {
    let info =  await getInfo();
    let p1 = document.querySelector("#para");
    p1.innerText = info.data.fact;
   
})

async function getInfo() {
    let info = await axios.get(url);
    return info;
    
}
