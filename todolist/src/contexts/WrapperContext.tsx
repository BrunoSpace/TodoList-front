import React, { createContext, useContext, useState } from "react";

interface EditContextType {
  isEdited: boolean;
  setIsEdited: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditContext = createContext<EditContextType>({
  isEdited: false,
  setIsEdited: () => {},
});

export const useEditContext = (): EditContextType => useContext(EditContext);

export const EditProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isEdited, setIsEdited] = useState<boolean>(false);

  return (
    <EditContext.Provider value={{ isEdited, setIsEdited }}>
      {children}
    </EditContext.Provider>
  );
};
