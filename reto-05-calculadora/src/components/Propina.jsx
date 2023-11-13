export default function Propina({
  porcen1,
  onporcen1,
  porcen2,
  onporcen2,
  Tip,
}) {
  return (
    <>
      <Porcentage porcent={porcen1} select={onporcen1}>
        how did you like the service?
      </Porcentage>
      <Porcentage porcent={porcen2} select={onporcen2}>
        how did your friend like the service?
      </Porcentage>
      {/* <Porcentaje nam={"i"} tip={Tip}>
        how did you like the service?
      </Porcentaje>
      <Porcentaje nam={"F"} tip={Tip}>
        how did your friend like the service?
      </Porcentaje> */}
    </>
  );
}

function Porcentage({ porcent, nam, tip, children, select }) {
  return (
    <>
      <label>{children}</label>
      <select value={porcent} onChange={(e) => select(Number(e.target.value))}>
        {/* <select name={nam} onChange={(e) => tip(e, nam)}> */}
        <option value="0">Dissatisfied (0%)</option>
        <option value="10">It was okay (10%)</option>
        <option value="15">It was good (15%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </>
  );
}
