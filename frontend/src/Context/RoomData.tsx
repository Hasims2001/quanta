import { createContext, useState } from "react";

export const RoomContext = createContext(({
    roomData: {
      title: "",
      content: "",
      language: ""
    },
    change: (val: any) => {}
  }));
function RoomDataContextProvider(props: any) {
    const [roomData, setRoomData] = useState({
        title: "",
        content: "",
        language: ""
      });

    const change = (val: any)=>{
        setRoomData({
            ...roomData,
            title: val.title,
            content: val.content,
            language: val.language
          });
    } 
  return (
    <RoomContext.Provider value={{roomData, change}}>
      {props.children}
    </RoomContext.Provider>
  );
}

export default RoomDataContextProvider;
