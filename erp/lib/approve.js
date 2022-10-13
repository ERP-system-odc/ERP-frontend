export async function getStaticProps(login) {
    const res = await
    fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
          })
    const allPostsData = await res.json();
      //   fetch("https://jsonplaceholder.typicode.com/users", {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(login),
  //   })

  //   .then((response) => response.json())
  // .then((result) => {
  //   if(result.message === "SUCCESS"){
  //     alert("You are logged in.");
  //     this.goToMain();
  //    } else {
  //        alert("Please check your login information.");
  //    }
  // });
    return {
        props: {
            allPostsData,
        },
        revalidate: 30,
    };

}
export default function Pass({allPostsData},login) {
<ul>
  {allPostsData.email}
  {allPostsData.username}
</ul>
}