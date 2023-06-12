const getFollowList = async ()=>{
  const token = localStorage.getItem("token");
  console.log(token)
  const res = await fetch("https://api.mandarin.weniv.co.kr/profile/weniv_won/follower",{
    method:"GET",
    headers:{
      "Authorization" : `Bearer ${token}`, //! 꼭 확인할 것
      "Content-type" : "application/json" //! 꼭 확인할 것
    }
  });
  const json = await res.json();
  console.log(json);
  renderFollowList(json)
}
const renderFollowList = (followList)=>{
  document.querySelector("#followList").innerHTML = JSON.stringify(followList)
}
const getFollowListButton = document.querySelector("#getFollowList");
getFollowListButton.addEventListener("click",getFollowList);