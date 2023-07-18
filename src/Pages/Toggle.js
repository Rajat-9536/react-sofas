import useToggle from "../Components/useToggle";

const ToggleExample = () => {
  const { show, toggle } = useToggle(true);

  return (
    <div className="text-center p-t-50">
      <h4>Toggle Example</h4>
      <button className="button tiny" onClick={toggle}>toggle</button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};

export default ToggleExample;
