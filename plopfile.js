// eslint-disable-next-line no-undef
module.exports = (plop) => {
  plop.setGenerator('atom', {
    description: 'Create an atom component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your atom component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/atoms/{{pascalCase name}}/index.jsx',
        templateFile: 'plop-templates/component/base.index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/atoms/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/component/base.jsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/atoms/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'plop-templates/component/base.module.css.hbs',
      },
    ],
  });
  plop.setGenerator('organisms', {
    description: 'Create an organism component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your atom component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/organisms/{{pascalCase name}}/index.jsx',
        templateFile: 'plop-templates/component/base.index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/organisms/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/component/base.jsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/organisms/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'plop-templates/component/base.module.css.hbs',
      },
    ],
  });
};
