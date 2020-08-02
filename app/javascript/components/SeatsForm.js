import React from 'react';
import { TextArea, Input} from "semantic-ui-react";
import { reduxForm, Field } from 'redux-form';


const renderTextArea = (props) => (
    <Input {...props.input}  type='text'  />
);

const onSubmit = values => {
    console.log('on submit values:',values)
    alert(JSON.stringify(values));
}


const SeatsForm = ({handleSubmit}) =>(
    <div>
        <form onSubmit={handleSubmit}>
            <Field
                name='data'
                component = {renderTextArea}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
);


export default reduxForm(
    {
        form:'data-form',
        onSubmit

})(SeatsForm);
