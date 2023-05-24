import './form-input.styles.scss';

const FormInput = ({ label, inputOptions }) => {
    return (
        <section className="group">
            <input className="form-input" {...inputOptions} />
            { label && (
                <label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}> 
                    {label} 
                </label>
            )}
        </section>
    );
}
 
export default FormInput;