
pipeline {
    agent any

    environment {
        BRANCH = 'main'
        GITHUB_URL = 'https://github.com/avinashganta5/Jenkins_pipeline_practice.git'
        IMAGE_NAME = 'simple'
        CONTAINER_NAME = 'simple-app'
        HOST_PORT = '8080'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Code Checkout') {
            steps {
                git branch: "${BRANCH}",
                    url: "${GITHUB_URL}"
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker image build -t ${IMAGE_NAME}:${BUILD_ID} .'
            }
        }

        stage('Stop and Delete Old Containers') {
            steps {
                sh '''
                    if [ "$(docker ps -aq -f name=^${CONTAINER_NAME}$)" ]; then
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                    fi
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        --restart unless-stopped \
                        -p ${HOST_PORT}:80 \
                        ${IMAGE_NAME}:${BUILD_ID}
                '''
            }
        }
    }
}
