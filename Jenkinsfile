
pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Code Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/avinashganta5/Jenkins_pipeline_practice.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker image build -t simple:${BUILD_ID} .'
            }
        }
    }
}
