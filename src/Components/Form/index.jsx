import "./Form.css"
const Form = () => {
    return ( 
        <div className="form-ui">
             <div className="input-container">
            <div className="input-form">
                <label>Title</label>
                <input type="text" placeholder="Title" />
            </div>
            <div className="input-form">
                <label>Describe</label>
                <input type="text" placeholder="Describe" />
            </div>
            </div>
            <button className="form-btn-ui">Submit</button>
        </div>
     );
}
 
export default Form;