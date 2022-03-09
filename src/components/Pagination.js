import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
   
          <ArrowBackIosIcon  color="primary" />
      
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
         
          <ArrowForwardIosIcon  color="primary" />
        
      </button>
    </div>
  );
};

export default Pagination