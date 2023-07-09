import './App.css';
// import { useReducer } from 'react';
// import { UseStateCounter } from "./hooks/1_i_use_state";
// import { UseStatePrevstate } from "./hooks/1_ii_use_state_with_prev_state";
// import { UseStateWithObject } from "./hooks/1_iii_use_state_with_object";
// import { UseStateWithArray } from './hooks/1_iv_use_state_with_array';
// import { UseEffect } from './hooks/2_i_useEffect';
// import { ConditionallyRenderUseEffect } from './hooks/2_ii_conditionally_render_useEffect';
// import { UseEffectOnlyOnce } from './hooks/2_iii_useEffect_only_once';
// import { UseEffectWithCleanUp } from './hooks/2_iv_use_effect_with_cleanup';
// import { UseEffectWithIncorrectDependency } from './hooks/2_v_use_effect_with_incorrect_dependency';
// import { UseEffectDataFetch1 } from './hooks/2_vi_use_effect_data_fetch';
// import { UseEffectDataFetch2 } from './hooks/2_vii_use_effect_data_fetch';
// import { UseEffectDataFetch3 } from './hooks/2_viii_use_effect_data_fetch';
// import { ContextProvider1, ContextProvider2 } from './hooks/3_i_use_context_api';
// import { C } from './hooks/3_i_component_tree';
// import { X } from './hooks/3_ii_useContext_hook';
// import { UserReducerSimpleCounter } from './hooks/4_i_use_reducer_counter';
// import { UseReducerComplexCounter } from './hooks/4_ii_use_reducer_counter';
// import { MultplipleUserReducerCounter } from './hooks/4_iii_multiple_reducer';
// import {A, B, C} from "./hooks/4_iv_component_tree"
// import { ContextProvider1 } from './hooks/3_i_use_context_api';
// import { FetchDataUseReducer } from './hooks/4_fetch_data_use_reduce';
// import _useCallback_parent from './hooks/5_useCallback._parent';
// import { UseMemo } from './hooks/6_useMemo';
// import { UseRefFocusInput } from './hooks/7_i_useRef_focus_input';
// import { UseRefTimer } from './hooks/7_ii_useRef_timer';
// import { UseDocumentTitleCustomHook1 } from './hooks/8_useDocumentTitle-1';
// import { UseDocumentTitleCustomHook2 } from './hooks/8_useDocumentTitle-2';
// import { UseCounter1 } from './hooks/9_counter1';
// import { UseCounter2 } from './hooks/9_counter2';
import { UseInputForm1 } from './hooks/10_useInput_form1';





// const initialState = 0
// const reducer = (currentState, action)=>{
//     let newState
//     switch(action)
//     {
//         case "increament": newState = currentState + 1; break;
//         case "decreament": newState = currentState - 1; break;
//         case "reset": newState = initialState; break;
//         default: newState = currentState; break;
//     }
//     return newState
// }

function App() {
  
  return (
    <div className="App">
      <UseInputForm1/>
    </div>
  );
}

export default App;
 /* 
  <UseStateCounter/>
  <UseStatePrevstate></UseStatePrevstate>
  <UseStateWithObject></UseStateWithObject>
  <UseStateWithArray/>

  <UseEffect/>
  <ConditionallyRenderUseEffect/>
  <UseEffectOnlyOnce/>
  <UseEffectWithCleanUp/>
  <UseEffectWithIncorrectDependency/>
  <UseEffectDataFetch1/>
  <UseEffectDataFetch2/>
  <UseEffectDataFetch3/>

  <ContextProvider1 value="Nish">
    <ContextProvider2 value="Wapool's Aerobatics">
      <C/>
    </ContextProvider2>
  </ContextProvider1>
  <ContextProvider1 value="Nish">
    <ContextProvider2 value="Wapool's Aerobatics">
      <X/>
    </ContextProvider2>
  </ContextProvider1>

  <UserReducerSimpleCounter/>
  <UseReducerComplexCounter/>
  <MultplipleUserReducerCounter/>

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <ContextProvider1 value={{countState: count, countDispatch: dispatch}}>
      <A/>
      <B/>
      <C/>
      </ContextProvider1>
    </div>
  );

  <FetchDataUseReducer/>

  <_useCallback_parent/>

  <UseMemo/>

  <UseRefFocusInput/>

  <UseRefTimer/>

  <UseDocumentTitleCustomHook1/>
  <UseDocumentTitleCustomHook2/>

  <UseCounter1/>
  <UseCounter2/>

 */