import { Stack } from "@mui/material"
import { ReactElement } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
interface Iprops{
    child:ReactElement,
    handler:()=>void
}

export default function NoteModal(props:Iprops){

    return(<>
     <Stack sx={{
        flexDirection:'row',
        justifyContent:'center',
        width:'100%', 
        transform:{
            md: 'translate(-123%, -123%)', 
            xs:'translate(-28%, -20%)'}, 
        alignItems:'center', height:'100%'}}
        >
        <Stack sx={{
            maxWidth:{md:'27em', xs:'20em'}, 
            width:'100%', 
            height:'100%', 
            maxHeight:{md:'26em', xs:'28em'}, 
            position:{md:'fixed', xs:'fixed'}, 
            top:{md:'143%', xs:'40%'}, 
            left:{md:'160%', xs:'35%'}, 
            bgcolor:'#fff', 
            overflow:'scroll',
            padding:'2em',
            alignItems:'center'}}>
            {props.child}
            <DeleteIcon sx={{fill:'#000'}} onClick={props.handler}/>
        </Stack>
    </Stack>
    </>)
}