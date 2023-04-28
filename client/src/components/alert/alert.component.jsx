import { AlertDanger } from './alert.styles';

export const ALERT_TYPE_CLASSES = {
  danger: 'danger',
};

const getAlert = (alertType) => {
  return {
    [ALERT_TYPE_CLASSES.danger]: AlertDanger,
  }[alertType];
};

const Alert = ({ children, type }) => {
  const CustomAlert = getAlert(type);
  return <CustomAlert>{children}</CustomAlert>;
};

export default Alert;
