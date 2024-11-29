console.log("Hello");

const getPosition = () => {
  const promise = new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        resolve(position.timestamp);
      },
      (error) => {
        reject(error);
      }
    );
  });

  return promise;
};

const timer = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Content");
      resolve("Resolved successfully");
    }, 0);
  });

  return promise;
};

/*
//Chaining

getPosition()
  .catch((error) => console.error(error))
  .then((timestamp) => {
    console.log("Now the timer starts");
    return timer(timestamp);
  })
  .then((message) => {
    console.log("Message:", message);

    console.log("End");
  });
*/

//Async/ AWAIT

async function execute() {
  try {
    const position = await getPosition();
    const time = await timer();

    // const result = await Promise.all([getPosition(), timer()]);
    // const result = await Promise.allSettled([getPosition(), timer()]);
    // const result = await Promise.race([getPosition(), timer()]);

    console.log(result);
    console.log("End");
  } catch (error) {
    console.error(error);
  }
}

// execute();

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
