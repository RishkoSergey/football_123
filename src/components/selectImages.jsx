import cn from "classnames";

const SelectImages = ({ variantObj, activeVariant, onChoose }) => {
  return (
    <div className="selectImages">
      {Object.keys(variantObj).map(item => <div className={cn("selectImage", {active: item == activeVariant})}>
        <img src={variantObj[item]} onClick={() => onChoose(item)} /> 
      </div>)}
    </div>
  );
};

export default SelectImages;