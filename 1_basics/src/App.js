// import logo from './logo.svg';
import "./App.css";
// import { Greet } from './components/1_function_component'
// import { Welcome } from "./components/2_class_component"
// import { UsingJSX } from './components/3_with_jsx';
// import { WithoutJSX } from './components/3_without_jsx';
// import { Props } from "./components/4_i_props_or_properties";
// import { ChildProps } from "./components/4_ii_child_props";
// import { ClassProps } from "./components/4_iii_class_props";
// import { ClassState } from "./components/5_class_state";
// import { SetState } from "./components/6_i_set_state";
// import { SetStatePrevState } from "./components/6_ii_prev_state";
// import { DestructureAtParameter } from "./components/7_i_destructure_at_parameters";
// import { DestructureInsideBody } from "./components/7_ii_destructure_inside_body";
// import { EventHandlingFunction } from "./components/8_i_event_handling_function";
// import { EventHandlingClass } from "./components/8_ii_event_handling_class";
// import { UndefinedThisKeyWord } from "./components/9_i_undefined_this_keyword_without_event_binding";
// import { EventBindingUsingBindMethod } from "./components/9_ii_event_binding_using_bind_method";
// import { EventBindingUsingArrowKeyFunc } from "./components/9_iii_event_binding_using_arrow_key_function";
// import { EventBindingInConstructor } from "./components/9_iv_event_binding_using_bind_method_in_constructor";
// import { EventBindingArrowKeyToClassParameter } from "./components/9_v_event_binding_using_arrow_key_func_as_a_class_parameter";
// import { ParentComponent } from "./components/10_i_method_import as_props_parent";
// import { IfElseCondtionalRendering } from "./components/11_i_if_else_conditional_rendering";
// import { ElementVariableCondRendering } from "./components/11_ii_element_variable_conditional_rendering";
// import { TernaryOperatorCondRendering } from "./components/11_iii_ternary_operator_conditional_rendering";
// import { ShortCircuitCondRendering } from "./components/11_iv_short_circuit_operator_conditional_rendering";
// import { SimpleListRendering } from "./components/12_i_simple_list_rendering";
// import { ComplexListRendering } from "./components/12_ii_complex_list_rendering";
// import { MakingComplexListRenderingEasy } from "./components/12.iii.making_complex_list_rendering_easy";
// import { UniqueKeyListItem } from "./components/13_list_and_key";
// import { IndexAsKey } from "./components/14_index_as_key_in_list_rendering";
// import { Stylesheets } from "./components 2/15_i_css_stylesheets";
// import { InlineCss } from "./components 2/15_ii_inline_css";
// import { ModuleStyling } from "./components 2/15_iii_module_styling";
// import { FormHandling } from "./components 2/16_form_handling";
// import { ParentLifeCycle } from "./components 2/17_i_life_cycle_method_Parent";
// import { Fragments } from "./components 2/18_i_fragments";
// import { TableFragments } from "./components 2/18_ii_a_table";
// import { ListFragment } from "./components 2/18_iii_list_render_using_fragments";
// import { PureClassComponents } from "./components 2/19_pure_components";
// import { RegularClassComponent } from "./components 2/19_regular_class_component";
// import { ParentClassComponent } from "./components 2/19_parent_component";
// import { ParentClassComponent } from "./components 2/20_parent_component";
// import { Refs } from "./components 2/21_refs";
// import { ClassRef } from "./components 2/22_refs_with_class_component";
// import { ForwardRefParent } from "./components 2/23_forwarding_refs";
// import { ContextProvider } from "./components 2/24_context";
// import { A } from "./components 2/24_nested_components";
// import Portals from "./components 2/25_portals";
// import { ErrorBoundary, Hero } from "./components 2/26_error_boundary";
// import HOC1_CLICKCOUNTER from "./components 2/27_i_hoc_click_counter";
// import HOC1_HOVERCOUNTER from "./components 2/27_i_hoc_hover_counter";
// import  {RenderPropsClickCounter} from "./components 2/28_i_render_props_click_counter";
// import  {RenderPropsHoverCounter}  from "./components 2/28_i_render_props_hover_counter";
// import { Counter } from "./components 2/28_ii_render_props_counter";
import { HttpGet } from "./components 2/29_http_get";



function App() {
  return (
    <div className="App">
      <HttpGet/>
    </div>
  );
}
export default App;




/* 
  <Greet></Greet>

  <Welcome></Welcome>

  <UsingJSX/>

  <WithoutJSX></WithoutJSX>

  <Props name="Mould" age="32"></Props>

  <ChildProps name="Vince" age="32">
    <p>This is a Child Prop</p>
  </ChildProps>

  <ChildProps name="Adrian" age="22">
    <input
      type={"button"}
      value={"Click Me!!"}
      onClick={function(){
        let num = prompt("Enter something:");
        alert(`You have entered, ${num}`);
      }}
    ></input>

  </ChildProps> 
  <ClassProps name="Nish" age="21"></ClassProps>
  <ClassState/>

  <SetState></SetState>
  <SetStatePrevState></SetStatePrevState>

  <DestructureAtParameter name="Fringe" age="35"></DestructureAtParameter>
  <DestructureInsideBody name="Fringe" age="35"></DestructureInsideBody>

  <EventHandlingFunction></EventHandlingFunction>
  <EventHandlingClass></EventHandlingClass>

  <UndefinedThisKeyWord/>
  <EventBindingUsingBindMethod></EventBindingUsingBindMethod>
  <EventBindingUsingArrowKeyFunc/>
  <EventBindingInConstructor/>
  <EventBindingArrowKeyToClassParameter></EventBindingArrowKeyToClassParameter>

  <ParentComponent></ParentComponent>

  <IfElseCondtionalRendering></IfElseCondtionalRendering>
  <ElementVariableCondRendering></ElementVariableCondRendering>
  <TernaryOperatorCondRendering/>
  <ShortCircuitCondRendering></ShortCircuitCondRendering>

  <SimpleListRendering/>
  <MakingComplexListRenderingEasy/>
  <UniqueKeyListItem></UniqueKeyListItem>

  <IndexAsKey></IndexAsKey>

  <Stylesheets primary={true}></Stylesheets>
  <InlineCss></InlineCss>
  <ModuleStyling></ModuleStyling>

  <FormHandling></FormHandling>

  <ParentLifeCycle></ParentLifeCycle>

  <Fragments></Fragments>
  <TableFragments/>
  <ListFragment/>

  <ParentClassComponent/> //pure component for class

  <ParentClassComponent/> //memo

  <Refs></Refs>
  <ClassRef></ClassRef>
  <ForwardRefParent></ForwardRefParent>

  <A/>
  {comment the below tag to use default context value instead of "Ash" }
  <ContextProvider value="Ash">  
  <A></A>
  </ContextProvider>

  <Portals></Portals>

  <ErrorBoundary>
    <Hero name="Batman"></Hero>
  </ErrorBoundary>
  <ErrorBoundary>
    <Hero name="Joker"/>
  </ErrorBoundary>

  <HOC1_CLICKCOUNTER name="nosh"/>
  <HOC1_HOVERCOUNTER name="nish"/>

  <Counter render={(count, increament)=>{
        return <RenderPropsClickCounter count={count} increament={increament}/>
      }}/>

      <Counter render={(count, increament)=>{
        return <RenderPropsHoverCounter count={count} increament={increament}/>
      }}/>
*/