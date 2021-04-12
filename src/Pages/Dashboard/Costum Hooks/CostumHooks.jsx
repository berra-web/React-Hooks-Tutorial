import useFormFields from './useFormFields'

export default function CostumHooks() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const {fields, handleFields} = useFormFields({
        email: '',
        password: ''
    })
   

    return (
        <div>
            <h1>Costum Hooks</h1>
            <form>  
                <div>   
                    <label>Username : </label>   
                    <input 
                    type="text" 
                    placeholder="Enter Username" 
                    name="username"
                    value={fields.email} 
                    onChange={handleFields}/>  
                </div> 
                <div>
                    <label>Password : </label>   
                    <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="password"
                    value={fields.password}
                    onChange={handleFields}/>      
                </div>  
            <button type="submit" className='submitBtn'>Submit</button>
            </form>    
        </div>
    )
}
