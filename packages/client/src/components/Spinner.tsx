import React, { FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface Props {
  loading: boolean;
}
export const Spinner: FC<Props> = ({ loading }) => (
  <ClipLoader color="#34D399" loading={loading} size={100} />
);
