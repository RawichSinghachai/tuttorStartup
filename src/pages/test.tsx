import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function InputComponent() {
  const [value, setValue] = useState('Last Value');
  const [previousValue, setPreviousValue] = useState('');

  const handleInputChange = (event:any) => {
    setValue(event.target.value);
    setPreviousValue(value)
  };

  const handleEditClick = () => {
    setPreviousValue(value); // Store the current value as the previous value
    setValue('New Value'); // Update the input field with the desired new value
  };

  const handleUndoClick = () => {
    setValue(previousValue); // Restore the previous value
  };

  const handleSendClick = () => {
    console.log(value+'  send')
    console.log(previousValue+'  before') // Restore the previous value
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleUndoClick}>Undo</button>
      <button onClick={handleSendClick}>Send</button>

      <TextField id="filled-basic" label="Filled" variant="filled"  defaultValue={value}/>
    </div>
  );
}

export default InputComponent;
