const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://sonarqube:9000',
        options : {
            'sonar.projectKey': 'nlw-05-nodejs',
            'sonar.sources':  'src',
            'sonar.tests':  '__tests__',
            'sonar.inclusions'  :  '**/src/**', // Entry point of your code
            'sonar.exclusions'  :  '**/node_modules/**', // Entry point of your code
            'sonar.test.inclusions':  '__tests__/**/*.spec.js,__tests__/**/*.spec.jsx,__tests__/**/*.test.js,__tests__/**/*.test.ts',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.login':'admin',
            'sonar.password':'admin'
        }
    }, () => {});