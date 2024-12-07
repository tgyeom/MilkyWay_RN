import color from '@/consts/color';

const customerColor = ({type}: TagProps) => {
  let bgColor: string;
  let textColor: string;
  switch (type) {
    case '모집중':
      bgColor = '#133488';
      textColor = '#ffffff';
      break;
    case '스터디':
      bgColor = '#FFEBE7';
      textColor = color.PRIMARY_R;
      break;
    case '멘토':
      bgColor = '#E3EBFF';
      textColor = color.PRIMARY_B;
      break;
    default:
      bgColor = 'gray';
      textColor = 'white';
  }
  return {bgColor, textColor};
};

export {customerColor};
