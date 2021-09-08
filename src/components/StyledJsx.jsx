export const StyledJsx = () => {
  return (
    <>
      <div className={"container"}>
        <p>styled jsx</p>
      </div>
      <style hsx="true">
        {`
          .container {
              background: red;
          }
       `}
      </style>
    </>
  );
};
