import { useState, useEffect } from "react";
import Table from "../components/Table";
import axios from "../axios";

export default function Dashboard() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("/members")
      .then((res) => {
        console.log("response of the members api .... ", res.data);
        setMembers([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <p> this is the table ..</p>
      {members.length > 0 && <Table list={members} />}
    </div>
  );
}
