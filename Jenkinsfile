pipeline { 
    agent any 
    tools {nodejs "node"}
    
    stages {
        stage('Build') { 
            steps { 
                sh 'npm install' 
            }
        }
        stage('Test'){
            steps {
                sh 'npm run chrome || true'
                sh 'npm run generate:report'
            }
        }
    }
}