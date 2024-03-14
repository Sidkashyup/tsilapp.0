import React from 'react';
import { Toast } from '@gorhom/bottom-sheet';

const ToastComponent = () => {
  return (
    <Toast ref={(ref) => Toast.setRef(ref)} />
  );
};

export default ToastComponent;
