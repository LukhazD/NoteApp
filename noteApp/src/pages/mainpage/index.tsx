import { Stack } from "@mui/material";
import CreateNote from "./components/CreateNoteButton";
import NoteCard from "./components/NoteCard";
import { useStore } from "zustand";
import myStore from "../../store/Create/Create";

export default function Mainpage(){
    const getData = useStore(myStore).objects
    return(
    <>
        <Stack sx={{gap:5}}>
            <Stack sx={{
                flexDirection:"row", 
                fontWeight:"Bold", 
                fontSize:42, 
                justifyContent:'center', 
                width:'100%'}}>
                NoteApp
            </Stack>
            <CreateNote/>
            <Stack sx={{
                flexDirection:"row", 
                gap:2.5, 
                justifyContent:'center', 
                width:'100%', 
                flexWrap:'wrap'}}>
                <NoteCard children={getData}/>
            </Stack>
        </Stack>
    </>)
}