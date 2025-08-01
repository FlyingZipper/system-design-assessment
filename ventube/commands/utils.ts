const path = require('path');

export const getPath = (
  { name, folder }:
    { name: string, folder: string }
) => {

  name = name.charAt(0).toUpperCase() + name.slice(1);

  const filePath = path.join(
    __dirname,
    '..',
    'app',
    'src',
    folder,
    name
  );

  return filePath;
}

export const createComponent = ({ filePath, name, addSanityType }: { filePath: string, name: string, addSanityType: boolean }) => {

  const componentPath = path.join(
    filePath,
    `${name}.tsx`
  );

  name = name.charAt(0).toUpperCase() + name.slice(1);

  const content = `
import { FC } from "react";

type Props = {} & ${name}Type;

export const ${name}: FC<Props> = ({}) => {
  return (
    <div>
      Component: ${name}
    </div>
  );
};
`

  return [componentPath, content.trim()]

}