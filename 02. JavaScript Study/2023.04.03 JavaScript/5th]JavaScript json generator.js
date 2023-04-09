let 회원정보 = [
  {
    "_id": "642a62207fa7d54ee34c0419",
    "index": 0,
    "age": 32,
    "eyeColor": "blue",
    "name": "Diaz Watts",
    "gender": "male",
    "company": "VINCH"
  },
  {
    "_id": "642a622066e1673079c0b5c7",
    "index": 1,
    "age": 27,
    "eyeColor": "green",
    "name": "Hazel Lara",
    "gender": "female",
    "company": "NETPLODE"
  },
  {
    "_id": "642a6220d33c85dcaf3a735b",
    "index": 2,
    "age": 39,
    "eyeColor": "blue",
    "name": "Curtis Patel",
    "gender": "male",
    "company": "HOMETOWN"
  },
  {
    "_id": "642a62206bf1495c2819faf2",
    "index": 3,
    "age": 27,
    "eyeColor": "green",
    "name": "Lucia Ochoa",
    "gender": "female",
    "company": "NSPIRE"
  },
  {
    "_id": "642a62201b33f3dfa971c0ff",
    "index": 4,
    "age": 39,
    "eyeColor": "brown",
    "name": "Fleming Robinson",
    "gender": "male",
    "company": "CENTURIA"
  }
]
console.log(회원정보[0]);
console.log(회원정보[0]["name"]);
console.log(회원정보[0]["company"]);
let 나이평균 = (회원정보[0]["age"] + 회원정보[1]["age"] + 회원정보[2]["age"] + 회원정보[3]["age"] + 회원정보[4]["age"]) / 5;
console.log(나이평균);