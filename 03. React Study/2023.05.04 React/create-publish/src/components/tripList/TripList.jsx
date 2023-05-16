import './TripList.css'

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function TripList() {
  
  let areas = list.map((item) => {
    return (
      <li key={item.no} className={item.visited ? "list-area-item active" : "list-area-item"}>{item.area}</li>
      // li안에는 key라는 prop이 존재해야 한다.
      )
  });
  return <ul className='list-area'>{areas}</ul>
}

export default TripList;