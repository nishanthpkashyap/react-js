import { PureComponent } from "react";
import {HOCFunction} from "./27_ii_hoc_function";

class HOC1_CLICKCOUNTER extends PureComponent
{
    render()
    {
        console.log(this.props.name)
        const {count, increament} = this.props;
        return(
            <div>
                <input type="button" value={`${this.props.name} Clicked ${count} times`} onClick={increament}/>
            </div>
        )
    }
}

export default HOCFunction(HOC1_CLICKCOUNTER, 1)