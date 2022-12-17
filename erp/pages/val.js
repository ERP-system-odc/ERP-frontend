import { useState } from "react";

const [item1, setItem1] = useState([]);

fetch("http://localhost:5000/api/standard/manage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((response) => response.json())

      .then((data) => setItem1(data.standard));

    //   export  item1;  