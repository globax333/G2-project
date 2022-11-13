pipeline {
    agent any

    tools{nodejs "NodeJS"}
    stages{
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
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
    }
}