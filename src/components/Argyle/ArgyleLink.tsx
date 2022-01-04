
import React from 'react';
import { ArgyleLinkProps } from './ArgyleLink.props';
import  {useArgyleLink} from './hooks/useArgyleLink';


export const ArgyleLink: React.FC<ArgyleLinkProps> = props => {
  const { children, options, ...rest } = props;
  const { open } = useArgyleLink(options);

  return (
    <button  onClick={() => open()} {...rest}>
      {children}
    </button>
  );
};