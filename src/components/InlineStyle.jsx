export const InlineStyle = () => {
  const containerStyle = {
    padding: "2em",
    border: "solid 1px #000",
  };

  const buttonStyle = {
    baclground: "#000",
  };

  return (
    <div style={containerStyle}>
      <p>Inline Style</p>
      <button style={buttonStyle}>ああ</button>
    </div>
  );
};

export default InlineStyle;
