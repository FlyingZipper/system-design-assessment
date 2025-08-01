import { createComponent, getPath } from "./utils";

function scaffoldComponent() {
  const fs = require('fs');

  // Get the component name from command arguments
  const name = process.argv[2];

  if (!name) {
    console.error('Please supply a valid component name.');
    process.exit(1);
  }

  const filePath = getPath({
    name: name,
    project: 'web',
    folder: 'components'
  })

  console.log(`Creating component ${name}`);

  if (fs.existsSync(filePath)) {
    console.error(`⛔️ Component ${name} already exists.`);
    process.exit(1);
  }

  // Create the component directory
  fs.mkdirSync(filePath, { recursive: true });
  fs.writeFileSync(...createComponent({ filePath, name: name, addSanityType: false }));

  // Create the storybook file
  // TODO: create the storybook creation function
  // fs.writeFileSync(...createStorybook({ filePath, name: name }));

  console.log(`✅ Component ${name} was created successfully`);
}

scaffoldComponent();
