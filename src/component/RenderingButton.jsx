import React from "react";
import {useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from "../recoil/atom";

function RenderingButton() {
    const networkNotificationCount = useRecoilValue(networkAtom);
    //const messageNotificationCount = useRecoilValue(messageAtom);
    const notificationCount = useRecoilValue(notificationAtom);
    const jobsCount = useRecoilValue(jobsAtom);   // useRecoilvalue hook return the value that is stored in an atom
    const [messageNotificationCount, setMessageNotification] = useRecoilState(messageAtom) //Its works useState..
    
    //This is Recoil Selector code or import done in frontend...
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);
    
   return (
    <>
      <button>Home</button>
      <button>My network ({networkNotificationCount >100?"99+": networkNotificationCount})</button>
      <button>Jobs ({jobsCount >100?"99+": jobsCount})</button>
      <button>Messaging ({messageNotificationCount >100?"99+": messageNotificationCount})</button>
      <button>Notification ({notificationCount >100?"99+": notificationCount})</button>
      <button onClick={()=>{
        setMessageNotification(c=>c+1);
      }}>Me ({totalNotificationCount})</button>
    </>
  );
}

export default RenderingButton;
