import { Stack, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useStore } from "zustand";
import myStore from "../../../store/Create/Create";
import { ChangeEvent, useState } from "react";

export default function CreateNoteButton(){
    const [counter, setCounter] =useState({text:'', title:'', id:0})
    const {addObject} = useStore(myStore)
    const handleCreate = ()=>{
        addObject({text:counter.text, title:counter.title, id:counter.id});
        setCounter({text:'', title:'',id:counter.id+1})
    }
    const handleTextChange = (e:ChangeEvent<HTMLInputElement>)=>{
        // Only update the 'text'
        setCounter(prevState => ({...prevState, text: e.target.value}));
    }
    const handleTitleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        // Only update the 'title'
        setCounter(prevState => ({...prevState, title: e.target.value}));
    }
    return(
    <>
    <Stack sx={{justifyContent:'center', flexDirection:'row', width:'100%'}}>
        <Stack gap={2}>

            <Stack sx={{
                justifyContent:'center', 
                alignItems:'center',
                width:'170px', 
                height:'170px', 
                borderRadius:'6px', 
                border:'5px dashed #000'}}
                onClick={handleCreate}>
                <AddIcon sx={{width:50, height:50}}/>
            </Stack>
            <TextField placeholder='Write your title' sx={{width:'100%', maxWidth:'170px'}} type="text" onChange={handleTitleChange} value={counter.title}/>
            <TextField placeholder='Write your text' sx={{width:'100%', maxWidth:'170px'}} type="text" onChange={handleTextChange} value={counter.text}/>
        </Stack>
    </Stack>
    </>)
}