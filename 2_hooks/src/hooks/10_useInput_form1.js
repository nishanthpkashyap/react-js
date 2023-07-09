import { useInput } from './10_useInput'

export function UseInputForm1()
{
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    const [firstName, onChangeFirst, resetFirst] = useInput('')
    const [lastName, onChangeLast, resetLast] = useInput('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        resetFirst()
        resetLast()
    }
      
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type={"text"} value={firstName} placeholder="Enter your first name" onChange={onChangeFirst}/>
                <br/><br/>
                <input type={"text"} value={lastName} placeholder="Enter your first name" onChange={onChangeLast}/>
                <br/><br/>
                <input type={"submit"} value="Submit"/>
                <br/><br/>
            </form>
            {firstName && lastName && <h2>Hello {firstName} {lastName}</h2>}
        </div>
    )
}