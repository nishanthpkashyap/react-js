import { PureComponent } from "react"
import {HOCFunction} from "./27_ii_hoc_function"

export class HOC1_HOVERCOUNTER extends PureComponent
{
    render()
    {
        console.log(this.props.name)
        const {count, increament} = this.props;
        return(
            <div>
                <h1 onMouseOver={increament}>{this.props.name} Clicked {count} times</h1>
            </div>
        )
    }
}

export default HOCFunction(HOC1_HOVERCOUNTER, 1)