import minimist from 'minimist';
import path from 'path';
import fs from 'fs';

function main() {
  const { name, directoryPath } = getArgs();
  const componentCode = getComponentCode(name);

  const fileName = `${name}.tsx`;
  const filePath = path.join(directoryPath, fileName);

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
  
  try {
    fs.writeFileSync(filePath, componentCode, { encoding: 'utf8' });
  } catch (error: unknown) {
    console.error(error);
  }
}

main();

function getArgs() {
  const argv = minimist(process.argv.slice(2));

  const name = argv?.name;
  if (!name) {
    throw new Error(errorMessages.nameRequired);
  }

  const dist = argv?.dist;
  const directoryPath= dist ? path.resolve(dist) : process.cwd()  
  
  return {
    name,
    directoryPath,
  }
}

function getComponentCode(name: string) { 
  return (`// Generated with CLI tool <3
import FC from "react";
  
type Props = {

}

const ${name}: FC<Props> = (props) => {
  const { } = props;
  
  return (
    <div>${name}</div>
  );
};
  `
  )
};

export const errorMessages = {
  nameRequired: 'name argument is required',
} as const;
