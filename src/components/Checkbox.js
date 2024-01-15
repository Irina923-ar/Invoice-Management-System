const Checkbox = ({ status }) => {
  const handleClick = (e) => {
    console.log(e);
  };

  console.log(status);

  return <div className="checkbox-test" onClick={handleClick} data-test2="testasdmsadsa" data-test="tes222222t"></div>;
};

export default Checkbox;
