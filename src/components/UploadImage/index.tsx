import React, { useState } from 'react';
import classNames from 'classnames';
import Text from '../Text';
import styles from './index.less';

interface UploadImageProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: boolean;
  onChange?: (value: any) => void;
}
const UploadImage = React.forwardRef((props: UploadImageProps, ref: any) => {
  const {
    className,
    label,
    disabled = false,
    defaultChecked = false,
    value = false,
    onChange,
    ...rest
  } = props;

  const classes: string = classNames(styles.UploadImage, className);
  const [file, setFile] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState();
  const handleImageChange = (e: any) => {
    e.preventDefault();
    let reader: any = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e: any) => {};

  return (
    <div className={styles.UploadImageWrapper}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className={styles.fileInput}
          type="file"
          onChange={(e) => handleImageChange(e)}
        />
        <div
          className={styles.fakeFile}
          style={
            imagePreviewUrl
              ? { background: 'none', justifyContent: 'flex-start' }
              : { background: '#5b5b5b', justifyContent: 'center' }
          }
        >
          {imagePreviewUrl ? (
            <img src={imagePreviewUrl} />
          ) : (
            <Text
              type="subheading-p1-bold"
              color="neutral-100"
              className={styles.text}
            >
              LaunchPad Image
            </Text>
          )}
        </div>
      </form>
    </div>
  );
});

export default UploadImage;
