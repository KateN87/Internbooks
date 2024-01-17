import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/Buttons/CustomButton';

export const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <div>
      OrderSuccess
      <CustomButton
        text="Go to home"
        onClick={() => navigate('/')}
        className="large"
      />
    </div>
  );
};

export default OrderSuccess;
