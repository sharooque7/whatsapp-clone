import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "./firebases";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useStateValue } from "./StateProvider";
const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  let arr = [];
  useEffect(() => {
    const unsubscribe = db
      .collection("rooms")
      .onSnapshot((snapshot) =>
        setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(rooms);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            {" "}
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            {" "}
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

// const read = async () => {
//   const room = collection(db, "rooms");
//   const roomSnapshot = await getDocs(room);
//   const cityList = roomSnapshot.docs.map((doc) => ({
//     id: doc.id,
//     data: doc.data(),
//   }));
//   setRooms(cityList);
//   console.log(cityList);
// };
// const data = read();
// // console.log(data);
// data.then((res) => {
//   console.log(res);
//   arr.push(res);
// });
// return () => {
//   read();
// };
