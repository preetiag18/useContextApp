import CompB from "./CompB";

const CompA = (props) => {
  const { info } = props;
  return (
    <>
      <div>CompA will be here</div>
      <div>{info}</div>
      <CompB info={info} />
    </>
  );
};

export { CompA };
