import Button from "./Button";

const Header = ({ show, onShow }) => {
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button show={show} onShow={onShow} />
    </div>
  );
};

export default Header;
