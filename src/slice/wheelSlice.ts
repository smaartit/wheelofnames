import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WheelArrayModel, WheelModel } from "../models/Wheel";

const initialWheelState: WheelArrayModel={
    all_wheels: []
}
const wheelSlice = createSlice({
    name: 'wheel',
    initialState: initialWheelState,
    reducers:{
        setAllWheels(state, action: PayloadAction<WheelModel[]>){
            state.all_wheels = action.payload
        },
        addWheel(state, action: PayloadAction<WheelModel>){
            const wheel: WheelModel ={
                id :state.all_wheels.length + 1,
                totalParticipants: action.payload.totalParticipants,
                title: action.payload.title,
                createdAt: new Date().toLocaleString(),
                updatedAt: new Date().toLocaleString()
            }
            state.all_wheels.push(wheel);
            
        },
        removeWheel(state, action: PayloadAction<number>){
            state.all_wheels.filter((wheel)=> wheel.id!==action.payload);
        }
    }
});
export const {setAllWheels, addWheel, removeWheel} = wheelSlice.actions;
export default wheelSlice;