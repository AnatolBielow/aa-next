import dynamic from "next/dynamic";
import { Meetings } from "./Meetings";
export default function MeetingsM() {
 
// dynamic(() => import("../../pages/meetings/Meetings"), {
//       ssr: false,
//     })
    return (
        <>
        <Meetings/>
        </>
    )
    }
    
 