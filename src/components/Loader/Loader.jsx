import css from './Loader.module.css';
import { Grid } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Grid
      visible={true}
      height="40"
      width="40"
      color="#8B008B"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
      }}
      wrapperClass="grid-wrapper"
    />
  );
}
