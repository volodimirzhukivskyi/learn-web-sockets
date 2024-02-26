import './Button.css'; // Припустимо, що ви маєте файл Button.css в тій же директорії

function Button({ children, click }) {
  return (
    <button onClick={click} className="custom-button">
      {children}
    </button>
  );
}

export default Button;
