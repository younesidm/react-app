export default function FirstComponent({children,LastName,FirstName,inputName,inputLabel,placeholderName}) {
    return (
        <> 
        <h1>Hello {LastName} {FirstName}</h1>
        <label>{inputLabel}</label>
        <input name={inputName} type='text' placeholder={placeholderName}/>
        <div> {children} </div> 
        </>
)
}

