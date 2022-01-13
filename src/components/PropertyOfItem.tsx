import React from "react";

interface VersionItemProps {
  property: string;
}

export const PrProperty: React.FC<VersionItemProps> = ({ property }) => {
  return <option>{property}</option>;
};
