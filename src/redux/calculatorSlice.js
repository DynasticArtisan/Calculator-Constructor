import { createSlice } from "@reduxjs/toolkit";
import { toDisplay, toLogic } from "./utils";

const initialState = {
    currentValue: 0,
    displayValue: 0,
    result: 0,
    operation: null,
    waiting: true,
    ready: true,
    dotAllowed: true
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        pressNumber: (state, action) => {
            if(state.ready){
                state.operation = null
                state.result = 0
                state.ready = false
            }
            if(state.waiting || state.currentValue == 0){
                if(action.payload == ','){
                    state.currentValue = '0,';
                    state.dotAllowed = false
                } else {
                    state.currentValue = action.payload;
                }
                state.displayValue = state.currentValue;
                state.waiting = false;    
            } else {
                if(action.payload == ','){
                    state.dotAllowed = false
                }
                state.currentValue = state.currentValue+action.payload;
                state.displayValue = state.currentValue
            }
        },

        plus: (state) => {
            if(
                state.currentValue || state.result
            ){
                if(state.ready){
                    state.ready = false
                }
                if(!state.operation){
                    state.operation = '+';
                    state.result = toLogic(state.currentValue)
                    state.currentValue = null
                    state.waiting = true;
                    state.dotAllowed = true
                } else if(state.waiting){
                    state.operation = '+';
                    state.currentValue = null
                } else {
                    switch(state.operation){
                        case '+':
                            state.result = state.result + toLogic(state.currentValue)
                            break
                        case '-':
                            state.result = state.result - toLogic(state.currentValue)
                            break
                        case 'x':
                            state.result = state.result * toLogic(state.currentValue)
                            break
                        case '/':
                            state.result = state.result / toLogic(state.currentValue)
                            break
                    }

                    state.displayValue = toDisplay(state.result)
                    state.operation = '+';
                    state.waiting = true;
                    state.dotAllowed = true
            }}
        },

        minus: (state) => {
            if(
                state.currentValue || state.result
            ){
                if(state.ready){
                    state.ready = false
                }
                if(!state.operation){
                    state.operation = '-';
                    state.result = toLogic(state.currentValue);
                    state.currentValue = null
                    state.waiting = true;
                    state.dotAllowed = true
                } else if(state.waiting){
                    state.operation = '-';
                    state.currentValue = null
                } else {
                    switch(state.operation){
                        case '+':
                            state.result = state.result + toLogic(state.currentValue)
                            break
                        case '-':
                            state.result = state.result - toLogic(state.currentValue)
                            break
                        case 'x':
                            state.result = state.result * toLogic(state.currentValue)
                            break
                        case '/':
                            state.result = state.result / toLogic(state.currentValue)
                            break
                    }
                    state.displayValue = toDisplay(state.result)
                    state.operation = '-';
                    state.waiting = true;
                    state.dotAllowed = true
            }}
        },

        multi: (state) => {
            if(
                state.currentValue || state.result
            ){
                if(state.ready){
                    state.ready = false
                }
                if(!state.operation){
                    state.operation = 'x';
                    state.result = toLogic(state.currentValue);
                    state.currentValue = null
                    state.waiting = true;
                    state.dotAllowed = true
                } else if(state.waiting){
                    state.operation = 'x';
                    state.currentValue = null
                } else {
                    switch(state.operation){
                        case '+':
                            state.result = state.result + toLogic(state.currentValue)
                            break
                        case '-':
                            state.result = state.result - toLogic(state.currentValue)
                            break
                        case 'x':
                            state.result = state.result * toLogic(state.currentValue)
                            break
                        case '/':
                            state.result = state.result / toLogic(state.currentValue)
                            break
                    }
                    state.displayValue = toDisplay(state.result)
                    state.operation = 'x';
                    state.waiting = true;
                    state.dotAllowed = true
            }}
        },
        degree: (state) => {
            if(
                state.currentValue || state.result
            ){
                if(state.ready){
                    state.ready = false
                }
                if(!state.operation){
                    state.operation = '/';
                    state.result = toLogic(state.currentValue);
                    state.currentValue = null
                    state.waiting = true;
                    state.dotAllowed = true
                } else if(state.waiting){
                    state.operation = '/';
                    state.currentValue = null
                } else {
                    switch(state.operation){
                        case '+':
                            state.result = state.result + toLogic(state.currentValue)
                            break
                        case '-':
                            state.result = state.result - toLogic(state.currentValue)
                            break
                        case 'x':
                            state.result = state.result * toLogic(state.currentValue)
                            break
                        case '/':
                            state.result = state.result / toLogic(state.currentValue)
                            break
                    }
                    state.displayValue = toDisplay(state.result)
                    state.operation = '/';
                    state.waiting = true;
                    state.dotAllowed = true
            }}
        },

        define: (state) => {
            if( !state.currentValue){
                state.operation = null
                state.displayValue = 0
                state.result = 0
                state.waiting = true
            } else if(state.operation){
                switch(state.operation){
                    case '+':
                        state.result = state.result + toLogic(state.currentValue)
                        break
                    case '-':
                        state.result = state.result - toLogic(state.currentValue)
                        break
                    case 'x':
                        state.result = state.result * toLogic(state.currentValue)
                        break
                    case '/':
                        state.result = state.result / toLogic(state.currentValue)
                        break
                }

                state.displayValue = toDisplay(state.result)
                state.waiting = true;
                state.dotAllowed = true
            }
            state.ready = true
        },
            
    } 
})

export const getValue = (state) => state.calculator.displayValue;
export const dotAllowed = (state) => state.calculator.dotAllowed;
export const oper = (state) => state.calculator.operation;

export const { pressNumber, plus, minus, multi, degree, define } = calculatorSlice.actions;

export default calculatorSlice.reducer