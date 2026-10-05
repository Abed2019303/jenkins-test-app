pipeline {
    agent any

    stages {
        stage('Environment Check') {
            steps {
                echo 'Checking Node.js version...'
                sh 'node -v'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running unit tests...'
                sh 'node app.js'
            }
        }

        stage('Build Artifact') {
            steps {
                echo 'Creating a build artifact...'
                sh 'echo "Build Version 1.0.0" > build_output.txt'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete.'
        }
        success {
            echo '🎉 SUCCESS: Jenkins test pipeline executed successfully!'
        }
        failure {
            echo '❌ FAILURE: Jenkins test pipeline encountered an error.'
        }
    }
}