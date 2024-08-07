import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

function Users() {
  const [data, setDate] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

 

  const cls = searchParams.get("class");
  console.log(cls);

  useEffect(() => {
    axios("data.json").then((response) => {
      setDate(response.data);
    });
  }, []);
  return (
    <div>
      {data
        .filter((item) => {
          if (!cls) {
            return true;
          }
          return cls === item.class;
        })
        .map((item) => {
          return (
            <div>
              <div>
                <Link to={`/details/${item.id}`}>
                  <h3>{item.name}</h3>
                </Link>
              </div>
              <div>
                <h5>Class:{item.class}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Users;
