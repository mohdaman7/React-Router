import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const { userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios("/data.json")
      .then((response) => {
         const item = response.data.find(
        (userItem) => userItem.id === parseInt(userId)
      );
      setUser(item);
    });
  }, [userId]);
  return (
    <div>
      <h1>{user.name}</h1>
      <h5>{user.phone}</h5>
      <h5>{user.class}</h5>
    </div>
  );
}

export default Details;
