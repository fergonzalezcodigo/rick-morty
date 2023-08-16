interface Props {
  primary: boolean
}

const Button = ({ primary }: Props) => {
  return (
    <button>
      {primary ? 'primary' : 'not primary'}
    </button>
  )
};

export default Button;
