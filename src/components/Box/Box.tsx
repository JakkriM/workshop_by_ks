import "./box.style.scss";

type BoxType = {
  children?: JSX.Element;
  isBox?: boolean;
};

const Box = ({ children, isBox = true }: BoxType) => {
  return (
    <>
      {isBox && <div className={isBox ? "floating-box" : ""}>{children}</div>}
      {isBox ? (
        <div className={isBox ? "floating-box" : ""}>{children}</div>
      ) : (
        <span>sss</span>
      )}
    </>
  );
};

export default Box;
