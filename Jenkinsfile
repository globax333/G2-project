pipeline {
    agent any

    tools{nodejs "NodeJS"}
        }
        stage('Cypress run') {
            steps {
                sh 'npm run allure:clear'
                sh 'cy:run:allure'
            }
        }
        stage('Allure report') {
            steps {
                sh 'allure:generate'
            }
        }
    
