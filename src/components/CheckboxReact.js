import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Example() {
  const [value, setValue] = React.useState('active');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="display" name="display1" value={value} onChange={handleChange} style={{display:'inline', textAlign:"left"}} >
        <FormControlLabel value="active" control={<Radio />} label="Active" />
        <FormControlLabel value="history" control={<Radio />} label="History" />
      </RadioGroup>
    </FormControl>
  );
}

    