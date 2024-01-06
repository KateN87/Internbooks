import { CardContainer } from './DataCard.styled';

type DataCardProps = {
  data: object;
};

const DataCard = ({ data }: DataCardProps) => {
  return (
    <CardContainer>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <p className="title">{key}</p>
          {Array.isArray(value) ? (
            value.map((line, index) => <p key={index}>{line}</p>)
          ) : (
            <p>{value}</p>
          )}
        </div>
      ))}
    </CardContainer>
  );
};

export default DataCard;
