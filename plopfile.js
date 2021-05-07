module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?'
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/Component.tsx.hbs',
        },
      ],
    });
    plop.setGenerator('page', {
        description: 'Create a page',
        prompts: [
          {
            type: 'input',
            name: 'name',
            message: 'What is your page name?'
          },
        ],
        actions: [
          {
            type: 'add',
            path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'plop-templates/Page.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}View.tsx',
            templateFile: 'plop-templates/PageView.tsx.hbs',
          },
        ],
      });
  };