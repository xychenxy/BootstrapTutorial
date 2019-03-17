module.exports = {

    /**
     *  Application configuration section
     *
     */

  apps : [


        // First application
      {
        name: 'BootstrapTutorial',
        script: 'app.js',

        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        // args: 'one two',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '52.23.159.62',
      ref  : 'origin/master',
      repo : 'https://github.com/xychenxy/BootstrapTutorial.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
        // env  : {
        //     NODE_ENV: 'dev'
        // }
    }
  }
};
