import { useState } from 'react';
import { Controller } from 'react-hook-form';
import style from './index.module.scss';
// import PrimaryButton from 'src/ui/common/PrimaryButton';

const UploadFile = (props: any) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files); // Convert FileList to an array
      setSelectedFiles(fileArray);
    }
  };

  const handleFileDelete = (indexToDelete: number) => {
    const filesFiltered = selectedFiles.filter((_, index) => index !== indexToDelete);
    setSelectedFiles(filesFiltered);
    props.setValue(`${props.name}`, filesFiltered);
  };

  return (
    <>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={[]}
        render={({ field }) => (
          <div className={`${style.uploadWrapper} upload-wrapper`}>
            <div className={style.buttonWrapper}>{props.placeholder}</div>

            <div className={style.fileWrapper}>
              <span>
                {selectedFiles.length > 0 && (
                  <div>
                    <ul>
                      {selectedFiles.map((file, index) => (
                        <li key={index}>
                          {file.name}
                          <button
                            className={style.deletebtn}
                            type="button"
                            onClick={() => handleFileDelete(index)}
                            style={{ marginLeft: '10px', color: 'red' }}
                          >
                            Delete
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </span>
              <div className={style.inputWrapper}>
                <input
                  type="file"
                  multiple={props.multiple || false}
                  // content={props.fileType || "application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"}
                  onChange={(e) => {
                    const value = e.target.files;
                    if (value) {
                      const arrayFile = Array.from(value);
                      field.onChange(arrayFile); // Update form state
                    }
                    handleFileChange(value);
                  }}
                />
                <div className={`${style.btn} ${props.themeColor ? style[props.themeColor] : ''}`}>
                  Upload File
                </div>
              </div>
            </div>
          </div>
        )}
      />
      {/* Display the selected files */}
    </>
  );
};

export default UploadFile;
