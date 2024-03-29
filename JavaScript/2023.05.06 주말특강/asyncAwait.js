async function message() {
  let hello = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 100)
  })

  let world = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('world');
    }, 100)
  })
  console.log(`${hello} ${world}`);
}
message();


function message() {
  let hello = new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 100)
  }).then((result) => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve((result + " world"));
      }, 100)
    }).then ((message) => {
      console.log(message);
    })
  })
}
message();


function message() {
  Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello');
      }, 100)
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(("world"));
      }, 100)
    })
  ]).then(([hello, world]) => {
    console.log(`${hello} ${world}`);
  });
}
message();


async function message() {
  const [hello, world] = 
  await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello');
      }, 100)
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(("world"));
      }, 100)
    })
  ])
  console.log(`${hello} ${world}`);
}
message();
console.log("i am sync!");