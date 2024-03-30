import { useState } from "react"

export const useFrom = (initialFrom,validateForm) => {
 const [form, setForm] = useState(initialFrom)
 const [errors, setErros] = useState({})
 const[loading,setLoading]=useState(false);
 const[response,setresponse]=useState(null);
 const[acepTerminos,setAcepTerminos]=useState(false);


 
 const handleChange = (e)=>{
    
    const {name,value }= e.target;
    setForm({
        ...form,
        [name]:value}
    )

 }
 const handleBlur = (e)=>{

 handleChange(e)
 setErros(validateForm(form))
 }
 const handleSubmit = (e)=>{
   e.preventeDefault()
    setErros(validateForm(form))
    if(Object.keys(errors).length===0){
            setLoading(true)
            setresponse(true)
            console.log(form)
    }else{
        return;
    }

 }

 return {
    form ,
    errors,
    loading,
    response,
    acepTerminos,
    setAcepTerminos,
    handleChange, 
    handleBlur,
    handleSubmit

 }
}