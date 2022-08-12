import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './CustomFloatingButton.css';

const CustomFloatingButton = ({ onClick }) => {
  return (
    <div className="custom-floating">
      <Fab
        style={{
          backgroundColor: '#B17DA4',
          color: '#FFF',
        }}
        aria-label="add"
        onClick={onClick}
        size="small"
      >
        <AddIcon style={{ width: 20 }} />
      </Fab>
    </div>
  );
};

export default CustomFloatingButton;
