import { ISalad } from '../../store/salads/types';

interface ISaladsProps {
  salads: ISalad[] | null;
}

const Salads: React.FC<ISaladsProps> = ({ salads }): JSX.Element => {
  return (
    <>
      {salads?.map((salad) => (
        <h1>{salad._id}</h1>
      ))}
    </>
  );
};

export default Salads;
