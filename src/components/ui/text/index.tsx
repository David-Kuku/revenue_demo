import React from 'react';

interface TextProps {
  color: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  children: React.ReactNode;
  className?: string
}

const Text: React.FC<TextProps> = ({
  color,
  fontWeight,
  fontSize,
  lineHeight,
  children,
  className = ''
}: TextProps) => {

  return <div className={className} style={{
    color,
    fontWeight,
    lineHeight,
    fontSize
  }}>{children}</div>;
};

export default Text;
