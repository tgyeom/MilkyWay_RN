interface ITagProps {
  type?: '모집중' | '스터디' | '멘토';
}

const customerColor = ({type}: ITagProps) => {
  switch (type) {
    case '모집중':
      return '#133488';
    case '스터디':
      return '#FFEBE7';
    case '멘토':
      return '#E3EBFF';
    default:
      return 'gray';
  }
};

export default {
  customerColor,
};
