import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 50,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Pages(props) {
  const classes = useStyles();
  const { totalItemsCount } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItemsCount / 8); i++) {
    pageNumbers.push(i);
  }

  const handleChange = (event) => {
    props.setCurrentPage(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Páginas
        </InputLabel>
        <NativeSelect onChange={handleChange}>
          {pageNumbers.map((number) => (
            <option value={number}>{number}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default Pages;
